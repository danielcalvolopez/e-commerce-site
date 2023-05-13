import FormItem from "../UI/form/FormItem";
import classes from "./checkout-form-section.module.css";
import cashOnDeliveryLogo from "../../../public/assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";
import checkoutFormItemsData from "@/utils/data/checkoutFormItemsData";

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
            {checkoutFormItemsData.billing.map(
              ({ name, placeholder, label, type }) => (
                <FormItem
                  key={name}
                  label={label}
                  placeholder={placeholder}
                  name={name}
                  type={type}
                  errorMessage={errors[name]?.message}
                  register={register}
                />
              )
            )}
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
            {checkoutFormItemsData.shipping.map(
              ({ name, placeholder, label, type }) => (
                <FormItem
                  key={name}
                  label={label}
                  placeholder={placeholder}
                  name={name}
                  type={type}
                  errorMessage={errors[name]?.message}
                  register={register}
                />
              )
            )}
          </div>
        </div>
      )}
      {payment && (
        <div className={classes.section}>
          <label className={classes.title}>payment details</label>
          <div className={classes.payment}>
            <p>Payment Method</p>
            <div className={classes.radio}>
              {checkoutFormItemsData.paymentMethod.map(
                ({ id, label, type }) => (
                  <FormItem
                    key={name}
                    id={id}
                    label={label}
                    checked={paymentMethod === label}
                    onClick={handleChangePayment}
                    type={type}
                  />
                )
              )}
            </div>
          </div>

          {paymentMethod === "e-Money" ? (
            <div className={classes["inputs"]}>
              {checkoutFormItemsData.paymentCredentials.map(
                ({ label, placeholder, name, type }) => (
                  <FormItem
                    key={name}
                    label={label}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    register={register}
                  />
                )
              )}
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
