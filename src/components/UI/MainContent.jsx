import classes from "./main-content.module.css";

const MainContent = ({ children }) => {
  return <main className={classes.content}>{children}</main>;
};

export default MainContent;
