import {
  decrement,
  increment,
  selectCount,
} from "@/redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./counter.module.css";

const Counter = ({ cart, increaseCart, decreaseCart, quantity }) => {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    if (counter > 20) {
      return;
    }
    cart ? increaseCart() : dispatch(increment());
  };

  const handleDecrease = () => {
    cart ? decreaseCart() : dispatch(decrement());
  };

  return (
    <div className={classes.container}>
      <p onClick={handleDecrease} className={classes.symbol}>
        -
      </p>
      <p className={classes.number}>{cart ? quantity : counter}</p>
      <p onClick={handleIncrease} className={classes.symbol}>
        +
      </p>
    </div>
  );
};

export default Counter;
