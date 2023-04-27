import classes from "./loading-page.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.container}>
      <span className={classes.spinner} />
    </div>
  );
};

export default LoadingPage;
