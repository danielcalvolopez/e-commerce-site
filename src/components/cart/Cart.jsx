import classes from "./cart.module.css";
import ButtonWide from "../UI/buttons/ButtonWide";
import Backdrop from "../UI/Backdrop";
import CartItem from "./CartItem";
import Counter from "../UI/Counter";
import Price from "./Price";

const Cart = ({ toggleCart }) => {
  return (
    <>
      <Backdrop onClick={toggleCart} />
      <div className={classes.content} btntext="checkout">
        <div className={classes.header}>
          <h5>cart (3)</h5>
          <p>Remove all</p>
        </div>
        <CartItem>
          <Counter />
        </CartItem>
        <CartItem>
          <Counter />
        </CartItem>
        <CartItem>
          <Counter />
        </CartItem>
        <Price total={5396} text="total" />
        <ButtonWide>checkout</ButtonWide>
      </div>
    </>
  );
};

export default Cart;
