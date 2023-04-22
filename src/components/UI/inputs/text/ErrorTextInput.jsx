import classes from "./error-text-input.module.css";

const ErrorTextInput = ({
  placeholder,
  onChange,
  value,
  label,
  name,
  errorMsg,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <label>{label}</label>
        <p>{errorMsg}</p>
      </div>
      <input
        className={classes.input}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default ErrorTextInput;
