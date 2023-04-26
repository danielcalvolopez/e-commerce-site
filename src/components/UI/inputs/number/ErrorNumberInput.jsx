import classes from "./error-number-input.module.css";

const ErrorNumberInput = ({
  placeholder,
  onChange,
  value,
  label,
  errorMsg,
  name,
}) => {
  const numberInputOnWheelPreventChange = (event) => {
    event.target.blur();
    event.stopPropagation();
    setTimeout(() => {
      event.target.focus();
    }, 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <label>{label}</label>
        <p>{errorMsg}</p>
      </div>
      <input
        className={classes.input}
        type="number"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onWheel={numberInputOnWheelPreventChange}
        name={name}
      />
    </div>
  );
};

export default ErrorNumberInput;
