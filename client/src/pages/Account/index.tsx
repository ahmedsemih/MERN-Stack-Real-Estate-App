import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Error } from "@/components/common";
import { useAuthStore } from "@/store/authStore";
import { GET_USER } from "@/graphql/queries/users";
import UploadService from "@/services/UploadService";
import { UPDATE_USER } from "@/graphql/mutations/users";
import { AccountInfos, Buttons, ContactInfos, Loader } from "./components";

export type Inputs = {
  email: string;
  phone: string;
  image: File;
};

const AccountPage = () => {
  const user = useAuthStore((state) => state.user);
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { _id: user?._id },
  });
  const [updateUser, { loading: updateLoading }] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      toast.success("Your Informations updated successfully.");
      methods.reset();
    },
    onError: () => {
      toast.error("Your changes couldn't be saved.");
      methods.reset();
    },
  });

  const methods = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: { email: data?.user.email, phone: data?.user.phone },
  });
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    let image = data?.user.image;
    if (values.image) {
      const res = await UploadService.uploadImage(values.image);
      image = res.secure_url;
    }

    updateUser({
      variables: {
        _id: user?._id,
        image,
        email: values.email,
        phone: values.phone,
      },
    });
  };

  if (loading) return <Loader />;

  if (error)
    return (
      <Error message="Whoops! An error occurred while fetching your informations." />
    );

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 min-h-[52vh] justify-center"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <AccountInfos
            name={data?.user.name}
            createdAt={data?.user.createdAt}
            image={data?.user.image}
          />
          <ContactInfos email={data?.user.email} phone={data?.user.phone} />
        </div>
        <Buttons
          defaultEmail={data?.user.email}
          defaultPhone={data?.user.phone}
          loading={loading || updateLoading}
        />
      </form>
    </FormProvider>
  );
};

export default AccountPage;
