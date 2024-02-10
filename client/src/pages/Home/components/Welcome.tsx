import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { HOME_LINKS } from "@/utils/constants";
import IconButton from "@/components/ui/IconButton";
import Searchbar from "@/components/layout/Navbar/Searchbar";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="lg:h-2/3 h-full w-full absolute top-0 left-0 bg-welcome-bg bg-center bg-cover">
      <div className="w-full h-full from-bgColor z-10 to-primary bg-gradient-to-t opacity-50" />
      <div className="w-full xl:w-2/3 md:w-4/5 md:left-[50%] md:transform md:translate-x-[-50%] md:py-4 md:px-0 md:p-8 p-4 h-full absolute top-0 left-0 z-30 flex flex-col justify-center items-center">
        <p className="mb-8 xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl text-center px-1 text-white">
          Find and Discover Your Dream <strong>Estate</strong>
        </p>
        <Searchbar onWelcome />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
          className="w-full lg:w-1/2 flex sm:justify-between items-center pt-12 flex-row flex-wrap justify-center"
        >
          {HOME_LINKS.map((link) => (
            <IconButton
              key={link.name}
              text={link.name}
              Icon={link.icon}
              onClick={() => navigate(`/search${link.param}`)}
              className="text-white hover:text-[#ddd]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
