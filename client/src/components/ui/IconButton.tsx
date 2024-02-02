import { FC } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type Props = {
  text: string;
  Icon: IconType;
  onClick?: VoidFunction;
};

const IconButton: FC<Props> = ({ text, Icon, onClick }) => {
  return (
    <motion.button
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="p-2 flex flex-col items-center justify-center text-textColor hover:text-textColor-soft transition-colors duration-200"
      onClick={onClick}
    >
      <Icon className="text-5xl" />
      <span className="text-sm font-semibold">{text}</span>
    </motion.button>
  );
};

export default IconButton;
