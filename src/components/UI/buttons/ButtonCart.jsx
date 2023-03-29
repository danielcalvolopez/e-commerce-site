import classes from "./button-cart.module.css";
import Button from "./Button";

const ButtonCart = ({ children, onSubmit, onClick }) => {
  return (
    <Button onSubmit={onSubmit} onClick={onClick} className={classes.button1}>
      {children}
    </Button>
  );
};

export default ButtonCart;
