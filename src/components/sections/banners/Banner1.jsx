import Button4 from "@/components/UI/buttons/Button4";
import classes from "./banner1.module.css";

const Banner1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img
          className={classes.img}
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        />
      </div>
      <div className={classes.right}>
        <h1>zx9 speaker</h1>
        <p className={classes.description}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button4>see product</Button4>
      </div>
    </div>
  );
};

export default Banner1;
