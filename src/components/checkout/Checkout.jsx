import Form from "../UI/form/Form";
import FormItem from "../UI/form/FormItem";
import classes from "./checkout.module.css";

const Checkout = ({
  handleChangePayment,
  payment,
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  return (
    <Form
      id="checkout"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.checkout}
    >
      <h3>checkout</h3>

      <div className={classes.billing}>
        <label className={classes.title}>billing details</label>
        <div className={classes["billing-inputs"]}>
          <FormItem
            label="name"
            placeholder="John Doe"
            name="name"
            type="text"
            errorMessage={errors.name?.message}
            register={register}
          />
          <FormItem
            label="email address"
            placeholder="johndoe@gmail.com"
            name="email"
            type="text"
            errorMessage={errors.email?.message}
            register={register}
          />
          <FormItem
            label="phone number"
            placeholder="07654321098"
            name="phone"
            type="number"
            errorMessage={errors.phone?.message}
            register={register}
          />
        </div>
      </div>

      <div className={classes.billing}>
        <label className={classes.title}>shipping info</label>
        <FormItem
          label="address"
          placeholder="10 Downing Street"
          name="address"
          type="text"
          errorMessage={errors.address?.message}
          register={register}
        />
        <div className={classes["billing-inputs"]}>
          <FormItem
            label="ZIP code"
            placeholder="W9 4HG"
            name="postCode"
            type="text"
            errorMessage={errors.postCode?.message}
            register={register}
          />
          <FormItem
            label="city"
            placeholder="London"
            name="city"
            type="text"
            errorMessage={errors.city?.message}
            register={register}
          />
          <FormItem
            label="country"
            placeholder="United Kingdom"
            name="country"
            type="text"
            errorMessage={errors.country?.message}
            register={register}
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

        {payment === "e-Money" && (
          <div className={classes["billing-inputs"]}>
            <FormItem
              label="e-Money Number"
              placeholder="238521993"
              name="eNumber"
              type="number"
              register={register}
            />
            <FormItem
              label="e-Money PIN"
              placeholder="6891"
              name="ePin"
              type="number"
              register={register}
            />
          </div>
        )}
      </div>
    </Form>
  );
};

export default Checkout;
