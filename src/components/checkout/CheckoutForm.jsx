import Form from "../UI/form/Form";
import classes from "./checkout-form.module.css";
import CheckoutFormSection from "./CheckoutFormSection";

const CheckoutForm = ({
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

      <CheckoutFormSection billing errors={errors} register={register} />
      <CheckoutFormSection shipping errors={errors} register={register} />
      <CheckoutFormSection
        payment
        paymentMethod={payment}
        errors={errors}
        handleChangePayment={handleChangePayment}
        register={register}
      />
    </Form>
  );
};

export default CheckoutForm;
