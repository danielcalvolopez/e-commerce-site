import categories from "@/utils/data/categories";
import classes from "./product-categories.module.css";
import ProductCategory from "./ProductCategory";

const ProductCategories = () => {
  return (
    <div className={classes.categories}>
      {categories.map(({ imgSrc, name }) => (
        <ProductCategory key={name} img={imgSrc} name={name} />
      ))}
    </div>
  );
};

export default ProductCategories;
