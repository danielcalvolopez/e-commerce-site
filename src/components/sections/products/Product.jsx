import Button1 from "@/components/UI/buttons/Button1";
import useScreenSize from "@/hooks/useScreenSize";
import classes from "./product.module.css";

const Product = ({
  image,
  name,
  description,
  newProduct,
  left,
  categoryImage,
  children,
  button,
}) => {
  const size = useScreenSize();
  return (
    <div className={left ? classes.container : classes["container-reverse"]}>
      <img
        className={classes.img}
        src={
          size > 1200
            ? image?.desktop
            : size < 650
            ? image?.mobile
            : categoryImage?.tablet
        }
      />
      <div className={classes.info}>
        {newProduct && <p className={classes.new}>new product</p>}
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.description}>{description}</p>
        {button && <Button1>see product</Button1>}
        <div className={classes["product-page"]}>{children}</div>
      </div>
    </div>
  );
};

export default Product;
