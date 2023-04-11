import classes from "./price.module.css";

const Price = ({ total, text, color, flex }) => {
  const totalPrice = total.toLocaleString("en-US");
  return (
    <div className={`${classes.price} ${flex && classes.flex}`}>
      <p>{text}</p>
      <h6 className={color && classes.color}>£ {totalPrice}</h6>
    </div>
  );
};

export default Price;
