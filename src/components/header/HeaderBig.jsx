import classes from "./header-big.module.css";
import Header from "./Header";

const HeaderBig = ({ title }) => {
  return (
    <div>
      <Header className={classes["bg-gray"]} />
      <div className={classes.container}>
        <span className={classes.break} />
        {title && <h2 className={classes.title}>headphones</h2>}
      </div>
    </div>
  );
};

export default HeaderBig;
