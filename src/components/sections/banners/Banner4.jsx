import classes from "./banner4.module.css";

const Banner4 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h4 className={classes.title}>
          Bringing you the <span className={classes.orange}>best</span> audio
          gear
        </h4>
        <p className={classes.description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={classes.img}></div>
    </div>
  );
};

export default Banner4;
