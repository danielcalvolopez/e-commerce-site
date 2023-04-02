import classes from "./cart.module.css";
import ButtonWide from "../UI/buttons/ButtonWide";
import Backdrop from "../UI/Backdrop";
import CartItem from "./CartItem";
import Counter from "../UI/Counter";
import Price from "./Price";

const Cart = ({ toggleCart }) => {
  const number = 5300;
  const total = number.toLocaleString("en-US");

  return (
    <>
      <Backdrop onClick={toggleCart} />
      <div className={classes.content} btnText="checkout">
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
        <Price total={total} text="total" />
        <ButtonWide>checkout</ButtonWide>
      </div>
    </>
  );
};

export default Cart;
