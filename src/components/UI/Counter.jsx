import { addToCart } from "@/redux/features/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./counter.module.css";

const Counter = ({ data }) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const dispatch = useDispatch();

  const handleIncrease = (data) => {
    setCurrentNumber((prev) => prev + 1);
    dispatch(addToCart(data));
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
      <p onClick={() => handleIncrease(data)} className={classes.symbol}>
        +
      </p>
    </div>
  );
};

export default Counter;
