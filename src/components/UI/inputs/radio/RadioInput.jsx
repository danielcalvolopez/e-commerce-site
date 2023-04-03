import classes from "./radio-input.module.css";

const RadioInput = ({ id, onClick, label, checked }) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`${classes.content} ${checked && classes.checked}`}
    >
      <label htmlFor="">{label}</label>
      <div className={classes["custom-radio"]}>
        {checked && <span className={classes["custom-radio-fill"]} />}
      </div>
    </div>
  );
};

export default RadioInput;
