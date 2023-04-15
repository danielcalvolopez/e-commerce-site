import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import ButtonWide from "../UI/buttons/ButtonWide";
import classes from "./summary.module.css";

const Summary = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={classes.summary}>
      <h6>summary</h6>
      <div className={classes.items}>
        {cart.cartItems.map((item) => (
          <CartItem
            price={item.price}
            name={item.name}
            image={item.image.desktop}
          >
            <span>x1</span>
          </CartItem>
        ))}
      </div>
      <div className={classes["price-breakdown"]}>
        <Price text="total" total={5396} />
        <Price text="shipping" total={50} />
        <Price text="vat (included)" total={1079} />
      </div>
      <Price color text="grand total" total={5446} />

      <ButtonWide>continue & pay</ButtonWide>
    </div>
  );
};

export default Summary;
