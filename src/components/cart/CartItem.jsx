import classes from "./cart-item.module.css";
import Counter from "../UI/Counter";

const CartItem = () => {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item-info"]}>
        <img
          className={classes.img}
          src="/assets/cart/image-xx99-mark-two-headphones.jpg"
        />
        <div className={classes.text}>
          <h6>XX99 MK II</h6>
          <p className={classes.price}>$ 2,999</p>
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default CartItem;
