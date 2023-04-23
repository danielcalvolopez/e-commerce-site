import { getTotals } from "@/redux/features/cartSlice";
import shipping from "@/utils/data/shippingRates";
import { vatCalculator } from "@/utils/functions/vatCalculator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import ButtonWide from "../UI/buttons/ButtonWide";
import classes from "./summary.module.css";

const Summary = ({ handleSubmitCheckout }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

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

          <ButtonWide onClick={handleSubmitCheckout}>continue & pay</ButtonWide>
        </>
      )}
    </div>
  );
};

export default Summary;
