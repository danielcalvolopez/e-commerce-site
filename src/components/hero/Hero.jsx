import HeaderBig from "../header/HeaderBig";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <HeaderBig />

      <div className={classes.hero}>
        <div className={classes.content}>
          <p className={classes.announce}>new product</p>
          <h1 className={classes.title}>XX99 Mark II Headphones</h1>
          <p className={classes.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
