import classes from "./product-info.module.css";

const ProductInfo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.features}>
        <h4>FEATURES</h4>
        <p className={classes.description}>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </p>
        <p className={classes.description}>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div className={classes.box}>
        <h4>in the box</h4>
        <ul className={classes.list}>
          <li className={classes["list-element"]}>
            <span className={classes.quantity}>1x</span>
            <p className={classes.description}>Headphone Unit</p>
          </li>
          <li className={classes["list-element"]}>
            <span className={classes.quantity}>2x</span>
            <p className={classes.description}>Replacement Earcups</p>
          </li>
          <li className={classes["list-element"]}>
            <span className={classes.quantity}>1x</span>
            <p className={classes.description}>User Manual</p>
          </li>
          <li className={classes["list-element"]}>
            <span className={classes.quantity}>1x</span>
            <p className={classes.description}>3.5mm 5m Audio Cable</p>
          </li>
          <li className={classes["list-element"]}>
            <span className={classes.quantity}>1x</span>
            <p className={classes.description}>Travel Bag</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
