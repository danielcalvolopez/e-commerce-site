import classes from "./text-input.module.css";

const TextInput = ({
  placeholder,
  onChange,
  value,
  label,
  name,
  errorMsg,
  register,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <label>{label}</label>
        {errorMsg !== undefined && <p>{errorMsg}</p>}
      </div>
      <input
        className={classes.input}
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        {...register(name)}
      />
    </div>
  );
};

export default TextInput;
