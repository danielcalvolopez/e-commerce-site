import classes from "./cart.module.css";
import ButtonWide from "../UI/buttons/ButtonWide";
import Backdrop from "../UI/Backdrop";
import CartItem from "./CartItem";
import Price from "./Price";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/features/cartSlice";
import { useEffect } from "react";
import Counter from "../UI/Counter";

const Cart = ({ toggleCart }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleClearCart = () => {
    dispatch(clearCart());
    toggleCart();
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  useEffect(() => {
    if (cart.cartItems.length === 0) {
      toggleCart();
    }
  }, [cart.cartItems.length]);

  return (
    <>
      <Backdrop onClick={toggleCart} />
      <div className={classes.content} btntext="checkout">
        <div className={classes.header}>
          <h5>cart ({cart.cartTotalQuantity})</h5>
          {cart?.cartItems.length > 0 && (
            <p onClick={() => handleClearCart()}>Remove all</p>
          )}
        </div>

        {cart?.cartItems.length === 0 ? (
          <p className={classes.empty}>Cart is empty.</p>
        ) : (
          cart?.cartItems.map((item) => (
            <CartItem
              toggleCart
              cart
              key={item.id}
              price={item.price}
              name={item.name}
              image={item.image?.desktop}
              removeFromCart={() => handleRemoveFromCart(item)}
            >
              <Counter
                increaseCart={() => handleIncreaseQuantity(item)}
                decreaseCart={() => handleDecreaseQuantity(item)}
                cart
                quantity={item.cartQuantity}
              />
            </CartItem>
          ))
        )}

        {cart?.cartItems.length > 0 && (
          <>
            <Price total={cart.cartTotalAmount} text="total" />
            <Link href="/checkout">
              <ButtonWide cart>checkout</ButtonWide>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
