import classes from "./number-input.module.css";

const NumberInput = ({ placeholder, onChange, value, label, name }) => {
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
        name={name}
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
