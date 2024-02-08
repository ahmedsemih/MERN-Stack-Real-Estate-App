import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../../components/form";
import { Logo } from "../../components/common";
import { BasicButton } from "../../components/ui";
import { useAuthStore } from "../../store/authStore";
import { LOGIN } from "../../graphql/mutations/auths";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      setUser(login);
      return navigate("/");
    },
    onError: () => {
      reset();
      return toast.error("Wrong email or password.");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await login({ variables: { email, password } });
  };

  return (
    <div className="md:w-1/2 max-w-[440px] mx-auto flex flex-col items-center lg:my-10 lg:gap-10 my-5 gap-5">
      <Logo width={200} />
      <div className="rounded-xl bg-bgColor-soft w-full p-8 border border-borderColor">
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 my-8 text-black"
        >
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            error={errors.password}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be min 5 character.",
              },
            })}
          />
          <BasicButton
            variant="contained"
            radius="small"
            type="submit"
            loading={loading}
            className="w-full"
          >
            Login
          </BasicButton>
        </form>
        <p className="text-center text-textColor-soft mt-4">
          Don't you have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-secondary font-semibold ml-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
