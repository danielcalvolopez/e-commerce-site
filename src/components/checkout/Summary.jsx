import { getTotals } from "@/redux/features/cartSlice";
import { vatCalculator } from "@/utils/functions/vatCalculator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import ButtonWide from "../UI/buttons/ButtonWide";
import classes from "./summary.module.css";

const Summary = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const shipping = {
    standard: 50,
  };

  return (
    <div className={classes.summary}>
      <h6>summary</h6>
      <div className={classes.items}>
        {cart.cartItems.map((item) => (
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            image={item.image.desktop}
          >
            <span>x{item.cartQuantity}</span>
          </CartItem>
        ))}
      </div>
      {cart.cartTotalQuantity === 0 ? (
        <p className={classes.empty}>Cart is empty.</p>
      ) : (
        <>
          <div className={classes["price-breakdown"]}>
            <Price text="total" total={cart.cartTotalAmount} />
            <Price text="shipping" total={shipping.standard} />
            <Price
              text="vat (included)"
              total={vatCalculator(20, cart.cartTotalAmount)}
            />
          </div>
          <Price
            color
            text="grand total"
            total={cart.cartTotalAmount + shipping.standard}
          />

          <ButtonWide>continue & pay</ButtonWide>
        </>
      )}
    </div>
  );
};

export default Summary;
