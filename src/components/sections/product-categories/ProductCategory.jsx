import Button3 from "../../UI/buttons/Button3";
import classes from "./product-category.module.css";

const ProductCategory = ({ img, name }) => {
  return (
    <div className={classes.container}>
      <img className={classes.thumbnail} width="170px" src={img} />
      <div className={classes.card}>
        <h6>{name}</h6>
        <Button3>shop</Button3>
      </div>
    </div>
  );
};

export default ProductCategory;