import classes from "./button-3.module.css";
import Button from "./Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Button3 = ({ children, onSubmit, onClick }) => {
  return (
    <Button onSubmit={onSubmit} onClick={onClick} className={classes.button3}>
      {children}{" "}
      <MdOutlineKeyboardArrowRight className={classes.arrow} size={18} />
    </Button>
  );
};

export default Button3;
