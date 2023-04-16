import classes from "./cart.module.css";
import ButtonWide from "../UI/buttons/ButtonWide";
import Backdrop from "../UI/Backdrop";
import CartItem from "./CartItem";
import Counter from "../UI/Counter";
import Price from "./Price";
import Link from "next/link";
import { useSelector } from "react-redux";

const Cart = ({ toggleCart }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Backdrop onClick={toggleCart} />
      <div className={classes.content} btntext="checkout">
        <div className={classes.header}>
          <h5>cart ({cart?.cartItems.length})</h5>
          <p>Remove all</p>
        </div>

        {cart?.cartItems.length === 0 ? (
          <p className={classes.empty}>Cart is empty.</p>
        ) : (
          cart?.cartItems.map((item) => (
            <CartItem
              key={item.id}
              price={item.price}
              name={item.name}
              image={item.image.desktop}
            >
              <Counter />
            </CartItem>
          ))
        )}

        {cart?.cartItems.length > 0 && (
          <>
            <Price total={5396} text="total" />
            <Link href="/checkout">
              <ButtonWide>checkout</ButtonWide>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
