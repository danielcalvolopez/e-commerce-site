import classes from "./button-submit-order.module.css";

const ButtonSubmitOrder = ({
  children,
  onSubmit,
  onClick,
  form,
  isFormValid,
}) => {
  return (
    <button
      type="submit"
      form={form}
      onSubmit={onSubmit}
      onClick={onClick}
      className={`${classes.button} ${!isFormValid && classes.disabled}`}
      disabled={!isFormValid}
    >
      {children}
    </button>
  );
};

export default ButtonSubmitOrder;
