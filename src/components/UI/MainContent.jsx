import classes from "./main-content.module.css";
import { motion } from "framer-motion";

const MainContent = ({ children, bgGray }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className={`${classes.content} ${bgGray && classes["bg-gray"]}`}
    >
      {children}
    </motion.main>
  );
};

export default MainContent;
