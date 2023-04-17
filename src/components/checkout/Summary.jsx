import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import ButtonWide from "../UI/buttons/ButtonWide";
import classes from "./summary.module.css";

const Summary = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart.cartItems);
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
