import classes from "./toggle-menu.module.css";
import Socials from "../socials/Socials";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import menuData from "@/utils/data/menuData";

const ToggleMenu = ({ setToggleMenu }) => {
  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={classes.container}
    >
      <AiOutlineClose
        onClick={handleCloseMenu}
        className={classes.exit}
        size={30}
      />
      <div className={classes.menu}>
        {menuData.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            onClick={handleCloseMenu}
            className={classes["menu-item"]}
          >
            {name}
          </Link>
        ))}
      </div>
      <Socials />
    </motion.div>
  );
};

export default ToggleMenu;
