import classes from "./product-suggestions.module.css";
import ProductSuggestion from "./ProductSuggestion";

const ProductSuggestions = ({ suggestions }) => {
  return (
    <div className={classes.container}>
      <h3>you may also like</h3>
      <div className={classes.suggestions}>
        {suggestions?.map(({ slug, name, image }) => (
          <ProductSuggestion key={slug} name={name} image={image} slug={slug} />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestions;
