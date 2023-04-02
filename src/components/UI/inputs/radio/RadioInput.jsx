import classes from "./radio-input.module.css";

const RadioInput = ({ label, onChange, value }) => {
  return (
    <div className={classes.content}>
      <input type="radio" onChange={onChange} value={value} />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default RadioInput;
