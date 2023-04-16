import { useState } from "react";
import classes from "./counter.module.css";

const Counter = ({ quantity, cart, addToCart }) => {
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleIncrease = () => {
    if (currentNumber > 20) {
      return;
    }
    setCurrentNumber((prev) => prev + 1);
    if (cart) {
      addToCart();
    }
  };

  const handleDecrease = () => {
    if (currentNumber === 1) {
      return;
    }
    setCurrentNumber((prev) => prev - 1);
  };

  return (
    <div className={classes.container}>
      <p onClick={handleDecrease} className={classes.symbol}>
        -
      </p>
      <p className={classes.number}>{cart ? quantity : currentNumber}</p>
      <p onClick={handleIncrease} className={classes.symbol}>
        +
      </p>
    </div>
  );
};

export default Counter;
