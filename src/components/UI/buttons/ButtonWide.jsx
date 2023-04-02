import classes from "./button-wide.module.css";
import Button from "./Button";

const ButtonWide = ({ children, onSubmit, onClick }) => {
  return (
    <Button onSubmit={onSubmit} onClick={onClick} className={classes.button1}>
      {children}
    </Button>
  );
};

export default ButtonWide;
