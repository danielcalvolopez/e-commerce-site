import classes from "./backdrop.module.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={classes.backdrop}>
      {children}
    </div>
  );
};

export default Backdrop;
