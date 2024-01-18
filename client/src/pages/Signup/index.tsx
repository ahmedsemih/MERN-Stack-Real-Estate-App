import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../../components/form";
import { Logo } from "../../components/common";
import { BasicButton } from "../../components/ui";
import { REGISTER } from "../../graphql/mutations/auths";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
const SignupPage = () => {
  const navigate = useNavigate();
  const [register, { loading }] = useMutation(REGISTER, {
    onCompleted: () => {
      toast.success("Account created successfully.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: () => {
      return toast.error("This email is already in use.");
    },
  });

  const {
    register: subscribe,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({
    name,
    email,
    phone,
    password,
  }) => {
    await register({
      variables: { name, email, phone, password },
    });
  };

  return (
    <div className="md:w-1/2 max-w-[440px] mx-auto flex flex-col items-center lg:my-10 lg:gap-10 my-5 gap-5">
      <Logo width={200} />
      <div className="rounded-xl bg-bgColor-soft w-full p-8 border border-borderColor">
        <h1 className="text-4xl text-center font-bold">Create Account</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 my-8 text-black"
        >
          <Input
            label="Name"
            placeholder="John Doe"
            type="text"
            error={errors.name}
            {...subscribe("name", {
              required: "Name is required.",
            })}
          />
          <Input
            label="Email"
            placeholder="johndoe@mail.com"
            type="email"
            error={errors.email}
            {...subscribe("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address.",
              },
            })}
          />
          <Input
            label="Phone Number"
            placeholder="+441632960121"
            type="tel"
            error={errors.phone}
            {...subscribe("phone", {
              required: "Phone number is required.",
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                message: "Invalid phone number.",
              },
            })}
          />
          <Input
            label="Password"
            placeholder="p4$$w0rd"
            type="password"
            error={errors.password}
            {...subscribe("password", {
              required: "Password is required.",
              minLength: {
                value: 5,
                message: "Password must be min 5 character.",
              },
            })}
          />
          <p className="text-textColor-soft opacity-60 text-sm">
            When you create an account, you agree to all our policies.
          </p>
          <BasicButton
            variant="contained"
            radius="small"
            type="submit"
            loading={loading}
            className="w-full mt-2"
          >
            Create Account
          </BasicButton>
        </form>
        <p className="text-center text-textColor-soft mt-4">
          Do you have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-secondary font-semibold ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
