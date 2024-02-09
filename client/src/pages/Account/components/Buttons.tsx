import { FC, useMemo } from "react";
import { useFormContext } from "react-hook-form";

import { BasicButton } from "@/components/ui";

type Props = {
  defaultEmail: string;
  defaultPhone: string;
  loading?: boolean;
};

const Buttons: FC<Props> = ({ defaultEmail, defaultPhone, loading }) => {
  const { reset, watch } = useFormContext();
  const { phone, email, image } = watch();

  const haveChanges = useMemo(() => {
    if (defaultEmail !== email || defaultPhone !== phone || image !== undefined)
      return true;

    return false;
  }, [email, phone, image, defaultEmail, defaultPhone]);

  return (
    <div className="flex px-4 w-full justify-end gap-4 items-start sm:items-center flex-col sm:flex-row">
      {haveChanges && <p className="text-lg">*You have unsaved changes.</p>}
      <div className="flex items-center lg:w-1/4 md:w-1/3 sm:w-1/2 w-full gap-4">
        <BasicButton
          disabled={!haveChanges}
          loading={loading}
          type="submit"
          radius="small"
          className="w-1/2"
        >
          Save
        </BasicButton>
        <BasicButton
          disabled={loading || !haveChanges}
          type="button"
          radius="small"
          variant="outlined"
          onClick={() => reset()}
          className="w-1/2"
        >
          Cancel
        </BasicButton>
      </div>
    </div>
  );
};

export default Buttons;
