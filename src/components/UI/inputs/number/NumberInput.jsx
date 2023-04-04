import classes from "./number-input.module.css";

const NumberInput = ({ placeholder, onChange, value, label }) => {
  const numberInputOnWheelPreventChange = (event) => {
    event.target.blur();
    event.stopPropagation();
    setTimeout(() => {
      event.target.focus();
    }, 0);
  };

  return (
    <div className={classes.container}>
      <label>{label}</label>
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
