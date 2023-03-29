import Button1 from "@/components/UI/buttons/Button1";
import classes from "./product.module.css";

const Product = ({ image, name, description, newProduct, left }) => {
  return (
    <div className={left ? classes.container : classes["container-reverse"]}>
      <img className={classes.img} src={image} />
      <div className={classes.info}>
        {newProduct && <p className={classes.new}>new product</p>}
        <h2>{name}</h2>
        <p className={classes.description}>{description}</p>
        <Button1>see product</Button1>
      </div>
    </div>
  );
};

export default Product;
