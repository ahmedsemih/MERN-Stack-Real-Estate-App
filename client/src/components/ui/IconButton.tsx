import { FC } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  Icon: IconType;
  onClick?: VoidFunction;
};

const IconButton: FC<Props> = ({ text, className, Icon, onClick }) => {
  return (
    <motion.button
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className={"p-2 flex flex-col items-center justify-center transition-colors duration-200 " + className}
      onClick={onClick}
    >
      <Icon className="text-5xl" />
      <span className="text-sm font-semibold">{text}</span>
    </motion.button>
  );
};

export default IconButton;
