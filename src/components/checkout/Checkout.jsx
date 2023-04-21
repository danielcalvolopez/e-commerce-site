import NumberInput from "../UI/inputs/number/NumberInput";
import RadioInput from "../UI/inputs/radio/RadioInput";
import TextInput from "../UI/inputs/text/TextInput";
import classes from "./checkout.module.css";

const Checkout = ({
  handleChangeInput,
  handleChangePayment,
  order,
  payment,
}) => {
  return (
    <form className={classes.checkout}>
      <h3>checkout</h3>

      <div className={classes.billing}>
        <label className={classes.title}>billing details</label>
        <div className={classes["billing-inputs"]}>
          <TextInput
            onChange={handleChangeInput}
            value={order.name}
            label="name"
            placeholder="John Doe"
            name="name"
          />
          <TextInput
            onChange={handleChangeInput}
            value={order.email}
            label="email address"
            placeholder="johndoe@gmail.com"
            name="email"
          />
          <NumberInput
            onChange={handleChangeInput}
            value={order.phone}
            label="phone number"
            placeholder="07654321098"
            name="phone"
          />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>shipping info</label>
        <TextInput
          onChange={handleChangeInput}
          value={order.address}
          label="address"
          placeholder="10 Downing Street"
          name="address"
        />
        <div className={classes["billing-inputs"]}>
          <TextInput
            onChange={handleChangeInput}
            value={order.postCode}
            label="ZIP code"
            placeholder="W9 4HG"
            name="postCode"
          />
          <TextInput
            onChange={handleChangeInput}
            value={order.city}
            label="city"
            placeholder="London"
            name="city"
          />
          <TextInput
            onChange={handleChangeInput}
            value={order.country}
            label="country"
            placeholder="United Kingdom"
            name="country"
          />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>payment details</label>
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
          <NumberInput
            onChange={handleChangeInput}
            value={order.eNumber}
            label="e-Money Number"
            placeholder="238521993"
            name="eNumber"
          />
          <NumberInput
            value={order.ePin}
            onChange={handleChangeInput}
            label="e-Money PIN"
            placeholder="6891"
            name="ePin"
          />
        </div>
      </div>
    </form>
  );
};

export default Checkout;
