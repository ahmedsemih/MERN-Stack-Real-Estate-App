import { MdEdit } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { Inputs } from "..";

const ProfileImage = ({ image }: { image: string }) => {
  const inputRef = useRef<HTMLInputElement>();
  const { watch, setValue } = useFormContext<Inputs>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null | undefined>(image);
  
  const imageInput = watch("image");

  useEffect(() => {
    if (!imageInput) return setPreview(image);
  }, [imageInput, image]);

  const handleClickImage = () => {
    inputRef.current?.click();
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setPreview(e.target?.result);
    };
    reader.readAsDataURL(event.target.files[0]);

    setValue("image", event.target.files[0]);
  };

  return (
    <div
      onClick={handleClickImage}
      className="cursor-pointer group relative mx-auto sm:mx-0"
    >
      <img
        // @ts-expect-error type diff
        src={preview}
        alt="profile-image"
        className="rounded-full object-cover content-center border border-borderColor w-36 h-36 cursor-pointer"
      />
      <MdEdit className="left-[50%] transform translate-x-[-50%] top-[50%] translate-y-[-50%] text-5xl hidden absolute group-hover:block p-2 rounded-full bg-bgColor-soft" />
      <input
        // @ts-expect-error type diff
        ref={inputRef}
        onChange={handleChangeImage}
        hidden
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export default ProfileImage;
