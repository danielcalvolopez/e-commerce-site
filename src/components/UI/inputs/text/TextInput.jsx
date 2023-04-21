import classes from "./text-input.module.css";

const TextInput = ({ placeholder, onChange, value, label, name }) => {
  return (
    <div className={classes.container}>
      <label>{label}</label>
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

export default TextInput;
