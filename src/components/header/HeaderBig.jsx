import classes from "./header-big.module.css";
import Header from "./Header";

const HeaderBig = ({ title, className }) => {
  return (
    <div>
      <Header className={className} />
      <div className={classes.container}>
        <span className={classes.break} />
        {title && <h2 className={classes.title}>{title}</h2>}
      </div>
    </div>
  );
};

export default HeaderBig;
