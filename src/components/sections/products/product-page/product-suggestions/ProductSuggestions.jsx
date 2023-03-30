import classes from "./product-suggestions.module.css";
import ProductSuggestion from "./ProductSuggestion";

const ProductSuggestions = () => {
  return (
    <div className={classes.container}>
      <h3>you may also like</h3>
      <div className={classes.suggestions}>
        <ProductSuggestion />
        <ProductSuggestion />
        <ProductSuggestion />
      </div>
    </div>
  );
};

export default ProductSuggestions;
