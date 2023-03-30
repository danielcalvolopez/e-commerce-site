import classes from "./product-pictures.module.css";

const ProductPictures = ({ gallery }) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes["img-wrapper-left"]}>
          <img className={classes.img} src={gallery?.first.desktop} />
        </div>
        <div className={classes["img-wrapper-left"]}>
          <img className={classes.img} src={gallery?.second.desktop} />
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes.img} src={gallery?.third.desktop} />
      </div>
    </div>
  );
};

export default ProductPictures;
