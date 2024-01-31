import { FC } from "react";

type Props = {
  description: string;
};

const Description: FC<Props> = ({ description }) => {
  return (
    <div className="bg-bgColor-soft rounded-lg border border-borderColor p-4">
      <h3 className="text-2xl font-semibold mb-3">Description</h3>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default Description;
