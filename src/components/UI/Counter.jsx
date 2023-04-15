import { useState } from "react";
import classes from "./counter.module.css";

const Counter = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleIncrease = () => {
    setCurrentNumber((prev) => prev + 1);
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
      <p className={classes.number}>{currentNumber}</p>
      <p onClick={handleIncrease} className={classes.symbol}>
        +
      </p>
    </div>
  );
};

export default Counter;
