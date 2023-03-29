import HeaderBig from "../header/HeaderBig";
import Button1 from "../UI/buttons/Button1";
import Counter from "../UI/Counter";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <HeaderBig className={classes["bg-gray"]} />

      <div className={classes.hero}>
        <div className={classes.content}>
          <p className={classes.announce}>new product</p>
          <h1 className={classes.title}>XX99 Mark II Headphones</h1>
          <p className={classes.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button1>see product</Button1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
