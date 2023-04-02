import classes from "./price.module.css";

const Price = ({ total, text }) => {
  return (
    <div className={classes.price}>
      <p>{text}</p>
      <h5>£ {total}</h5>
    </div>
  );
};

export default Price;
