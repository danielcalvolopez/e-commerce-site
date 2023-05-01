import classes from "./loading-page.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <span className={classes.spinner} />
      </div>
    </div>
  );
};

export default LoadingPage;
