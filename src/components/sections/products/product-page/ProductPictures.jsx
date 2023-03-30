import classes from "./product-pictures.module.css";

const ProductPictures = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes["img-wrapper-left"]}>
          <img
            className={classes.img}
            src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
          />
        </div>
        <div className={classes["img-wrapper-left"]}>
          <img
            className={classes.img}
            src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
          />
        </div>
      </div>
      <div className={classes.right}>
        <img
          className={classes.img}
          src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
        />
      </div>
    </div>
  );
};

export default ProductPictures;
