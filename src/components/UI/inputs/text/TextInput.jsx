import classes from "./text-input.module.css";

const TextInput = ({ placeholder, onChange, value, label }) => {
  return (
    <div className={classes.container}>
      <label>{label}</label>
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
