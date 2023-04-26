import classes from "./number-input.module.css";

const NumberInput = ({
  placeholder,
  onChange,
  value,
  label,
  name,
  errorMsg,
  register,
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
        {errorMsg !== undefined && <p>{errorMsg}</p>}
      </div>
      <input
        name={name}
        className={classes.input}
        type="number"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onWheel={numberInputOnWheelPreventChange}
        {...register(name)}
      />
    </div>
  );
};

export default NumberInput;
