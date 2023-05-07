import classes from "./backdrop.module.css";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className={classes.backdrop}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
