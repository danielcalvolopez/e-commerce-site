import classes from "./button-4.module.css";
import Button from "./Button";

const Button4 = ({ children, onSubmit, onClick }) => {
  return (
    <Button onSubmit={onSubmit} onClick={onClick} className={classes.button4}>
      {children}
    </Button>
  );
};

export default Button4;
