import Form from "../UI/form/Form";
import FormItem from "../UI/form/FormItem";
import classes from "./checkout.module.css";

const Checkout = ({
  handleChangeInput,
  handleChangePayment,
  order,
  payment,
  error,
}) => {
  return (
    <Form className={classes.checkout}>
      <h3>checkout</h3>

      <div className={classes.billing}>
        <label className={classes.title}>billing details</label>
        <div className={classes["billing-inputs"]}>
          <FormItem
            onChange={handleChangeInput}
            value={order.name}
            label="name"
            placeholder="John Doe"
            name="name"
            type="text"
            error={error.name}
            errorMessage="Please enter a valid name"
          />
          <FormItem
            onChange={handleChangeInput}
            value={order.email}
            label="email address"
            placeholder="johndoe@gmail.com"
            name="email"
            type="text"
            error={error.email}
            errorMessage="Please enter a valid email"
          />
          <FormItem
            onChange={handleChangeInput}
            value={order.phone}
            label="phone number"
            placeholder="07654321098"
            name="phone"
            type="number"
            error={error.phone}
            errorMessage="Please enter a valid phone number"
          />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>shipping info</label>
        <FormItem
          onChange={handleChangeInput}
          value={order.address}
          label="address"
          placeholder="10 Downing Street"
          name="address"
          type="text"
        />
        <div className={classes["billing-inputs"]}>
          <FormItem
            onChange={handleChangeInput}
            value={order.postCode}
            label="ZIP code"
            placeholder="W9 4HG"
            name="postCode"
            type="text"
            error={error.postCode}
            errorMessage="Please enter a valid post code"
          />
          <FormItem
            onChange={handleChangeInput}
            value={order.city}
            label="city"
            placeholder="London"
            name="city"
            type="text"
          />
          <FormItem
            onChange={handleChangeInput}
            value={order.country}
            label="country"
            placeholder="United Kingdom"
            name="country"
            type="text"
          />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>payment details</label>
        <div className={classes.payment}>
          <p>Payment Method</p>
          <div className={classes.radio}>
            <FormItem
              id="e-Money"
              label="e-Money"
              checked={payment === "e-Money"}
              onClick={handleChangePayment}
              type="radio"
            />
            <FormItem
              id="Cash on Delivery"
              label="Cash on Delivery"
              onClick={handleChangePayment}
              checked={payment === "Cash on Delivery"}
              type="radio"
            />
          </div>
        </div>
        <div className={classes["billing-inputs"]}>
          <FormItem
            onChange={handleChangeInput}
            value={order.eNumber}
            label="e-Money Number"
            placeholder="238521993"
            name="eNumber"
            type="number"
          />
          <FormItem
            value={order.ePin}
            onChange={handleChangeInput}
            label="e-Money PIN"
            placeholder="6891"
            name="ePin"
            type="number"
          />
        </div>
      </div>
    </Form>
  );
};

export default Checkout;
