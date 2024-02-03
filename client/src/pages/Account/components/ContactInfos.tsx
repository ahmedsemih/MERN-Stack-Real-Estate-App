import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdModeEditOutline, MdDone } from "react-icons/md";

import { Inputs } from "..";
import { Input } from "@/components/form";

type Props = {
  email: string;
  phone: string;
};

const ContactInfos: FC<Props> = ({ email, phone }) => {
  const [isEmailDisabled, setIsEmailDisabled] = useState<boolean>(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState<boolean>(true);

  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <section className="bg-bgColor-soft rounded-lg p-4 w-full flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Contact Informations</h2>
      <div className="flex items-end gap-1">
        <Input
          label="Email"
          type="email"
          disabled={isEmailDisabled}
          placeholder="Your Email"
          error={errors.email}
          {...register("email", {
            value: email,
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address.",
            },
          })}
        />
        <button
          type="button"
          onClick={() => setIsEmailDisabled((prev) => !prev)}
          className={`text-2xl bg-borderColor p-2 rounded-lg hover:opacity-70  transition-all duration-200 ${
            errors.email && "my-auto"
          }`}
        >
          {isEmailDisabled ? <MdModeEditOutline /> : <MdDone />}
        </button>
      </div>
      <div className="flex items-end gap-1">
        <Input
          label="Phone"
          type="tel"
          disabled={isPhoneDisabled}
          placeholder="Your Phone"
          error={errors.phone}
          {...register("phone", {
            value: phone,
            required: "Phone is required.",
            pattern: {
              value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
              message: "Invalid phone number.",
            },
          })}
        />
        <button
          type="button"
          onClick={() => setIsPhoneDisabled((prev) => !prev)}
          className={`text-2xl bg-borderColor p-2 rounded-lg hover:opacity-70 transition-all duration-200 ${
            errors.phone && "my-auto"
          }`}
        >
          {isPhoneDisabled ? <MdModeEditOutline /> : <MdDone />}
        </button>
      </div>
    </section>
  );
};

export default ContactInfos;
