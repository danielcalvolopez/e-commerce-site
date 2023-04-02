import classes from "./error-text-input.module.css";

const TextInput = ({ placeholder, onChange, value, label, error }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <label>{label}</label>
        <p>{error}</p>
      </div>
      <input
        className={classes.input}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
