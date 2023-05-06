import classes from "./toggle-menu.module.css";
import Socials from "../socials/Socials";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <Link
          href="/"
          onClick={handleCloseMenu}
          className={classes["menu-item"]}
        >
          Home
        </Link>
        <Link
          href="/headphones"
          onClick={handleCloseMenu}
          className={classes["menu-item"]}
        >
          Headphones
        </Link>
        <Link
          href="/speakers"
          onClick={handleCloseMenu}
          className={classes["menu-item"]}
        >
          Speakers
        </Link>
        <Link
          href="/earphones"
          onClick={handleCloseMenu}
          className={classes["menu-item"]}
        >
          Earphones
        </Link>
      </div>
      <Socials />
    </motion.div>
  );
};

export default ToggleMenu;
