import classes from "./button-wide.module.css";
import Button from "./Button";

const ButtonWide = ({ children, onSubmit, onClick, form }) => {
  return (
    <Button
      form={form}
      onSubmit={onSubmit}
      onClick={onClick}
      className={classes.button}
    >
      {children}
    </Button>
  );
};

export default ButtonWide;
