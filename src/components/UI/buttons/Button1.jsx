import classes from "./button-1.module.css";
import Button from "./Button";

const Button1 = ({ children, onSubmit, onClick }) => {
  return (
    <Button onSubmit={onSubmit} onClick={onClick} className={classes.button1}>
      {children}
    </Button>
  );
};

export default Button1;
