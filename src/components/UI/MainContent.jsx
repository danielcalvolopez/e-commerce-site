import classes from "./main-content.module.css";

const MainContent = ({ children, bgGray }) => {
  return (
    <main className={`${classes.content} ${bgGray && classes["bg-gray"]}`}>
      {children}
    </main>
  );
};

export default MainContent;
