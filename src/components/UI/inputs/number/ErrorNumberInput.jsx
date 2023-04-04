import classes from "./error-number-input.module.css";

const NumberInput = ({ placeholder, onChange, value, label, error }) => {
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
        <p>{error}</p>
      </div>
      <input
        className={classes.input}
        type="number"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onWheel={numberInputOnWheelPreventChange}
      />
    </div>
  );
};

export default NumberInput;
