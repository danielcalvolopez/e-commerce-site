import classes from "./button-wide.module.css";
import Button from "./Button";

const ButtonWide = ({ children, onSubmit, onClick, disabled }) => {
  return (
    <Button
      onSubmit={onSubmit}
      onClick={onClick}
      className={`${classes.button} ${disabled && classes.disabled}`}
    >
      {children}
    </Button>
  );
};

export default ButtonWide;
