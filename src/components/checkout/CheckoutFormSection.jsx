import FormItem from "../UI/form/FormItem";
import classes from "./checkout-form-section.module.css";
import cashOnDeliveryLogo from "../../../public/assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";

const CheckoutFormSection = ({
  billing,
  shipping,
  payment,
  errors,
  register,
  handleChangePayment,
  paymentMethod,
}) => {
  return (
    <>
      {billing && (
        <div className={classes.section}>
          <label className={classes.title}>billing details</label>
          <div className={classes["inputs"]}>
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
      )}
      {shipping && (
        <div className={classes.section}>
          <label className={classes.title}>shipping info</label>
          <FormItem
            label="address"
            placeholder="10 Downing Street"
            name="address"
            type="text"
            errorMessage={errors.address?.message}
            register={register}
          />
          <div className={classes["inputs"]}>
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
      )}
      {payment && (
        <div className={classes.section}>
          <label className={classes.title}>payment details</label>
          <div className={classes.payment}>
            <p>Payment Method</p>
            <div className={classes.radio}>
              <FormItem
                id="e-Money"
                label="e-Money"
                checked={paymentMethod === "e-Money"}
                onClick={handleChangePayment}
                type="radio"
              />
              <FormItem
                id="Cash on Delivery"
                label="Cash on Delivery"
                onClick={handleChangePayment}
                checked={paymentMethod === "Cash on Delivery"}
                type="radio"
              />
            </div>
          </div>

          {paymentMethod === "e-Money" ? (
            <div className={classes["inputs"]}>
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
          ) : (
            <div className={classes.cod}>
              <Image src={cashOnDeliveryLogo} alt="" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CheckoutFormSection;
