import classes from "./price.module.css";

const Price = ({ total, text, color }) => {
  const totalPrice = total.toLocaleString("en-US");
  return (
    <div className={classes.price}>
      <p>{text}</p>
      <h6 className={color && classes.color}>£ {totalPrice}</h6>
    </div>
  );
};

export default Price;
