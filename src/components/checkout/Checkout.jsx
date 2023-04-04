import { useState } from "react";
import NumberInput from "../UI/inputs/number/NumberInput";
import RadioInput from "../UI/inputs/radio/RadioInput";
import TextInput from "../UI/inputs/text/TextInput";
import classes from "./checkout.module.css";

const Checkout = () => {
  const [payment, setPayment] = useState("e-Money");

  const handleChangePayment = (event) => {
    setPayment(event.target.id);
  };

  return (
    <div className={classes.checkout}>
      <h3>checkout</h3>

      <div className={classes.billing}>
        <label className={classes.title}>billing details</label>
        <div className={classes["billing-inputs"]}>
          <TextInput label="name" placeholder="John Doe" />
          <TextInput label="email address" placeholder="johndoe@gmail.com" />
          <NumberInput label="phone number" placeholder="07654321098" />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>shipping info</label>
        <TextInput label="address" placeholder="10 Downing Street" />
        <div className={classes["billing-inputs"]}>
          <TextInput label="ZIP code" placeholder="W9 4HG" />
          <TextInput label="city" placeholder="London" />
          <TextInput label="country" placeholder="United Kingdom" />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>shipping info</label>
        <div className={classes.payment}>
          <p>Payment Method</p>
          <div className={classes.radio}>
            <RadioInput
              id="e-Money"
              label="e-Money"
              checked={payment === "e-Money"}
              onClick={handleChangePayment}
            />
            <RadioInput
              id="Cash on Delivery"
              label="Cash on Delivery"
              onClick={handleChangePayment}
              checked={payment === "Cash on Delivery"}
            />
          </div>
        </div>
        <div className={classes["billing-inputs"]}>
          <NumberInput label="e-Money Number" placeholder="238521993" />
          <NumberInput label="e-Money PIN" placeholder="6891" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
