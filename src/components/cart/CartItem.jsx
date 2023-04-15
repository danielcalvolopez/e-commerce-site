import classes from "./cart-item.module.css";

const CartItem = ({ children, price, name, image }) => {
  const itemName = name.split(" ");
  itemName.pop();
  const finalName = itemName.join(" ");

  const priceFormat = price.toLocaleString("en-US");

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item-info"]}>
        <img className={classes.img} src={image} />
        <div className={classes.text}>
          <h6>{finalName}</h6>
          <p className={classes.price}>$ {priceFormat}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CartItem;
