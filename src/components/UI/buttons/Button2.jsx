import classes from "./button-2.module.css";
import Button from "./button";

const Button2 = ({ children, onSubmit, onClick }) => {
  return (
    <Button onSubmit={onSubmit} onClick={onClick} className={classes.button2}>
      {children}
    </Button>
  );
};

export default Button2;
