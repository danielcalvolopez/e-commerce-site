import classes from "./product-categories.module.css";
import ProductCategory from "./ProductCategory";

const ProductCategories = ({ data }) => {
  const newData = data?.map(({ category, categoryImage }) => ({
    category,
    categoryImage,
  }));

  const filteredArray = [];
  const includedCategories = {};

  newData?.forEach((item) => {
    if (!includedCategories[item.category]) {
      filteredArray.push(item);
      includedCategories[item.category] = true;
    }
  });

  return (
    <div className={classes.categories}>
      {filteredArray.map((item) => (
        <ProductCategory
          key={item.categoryImage.desktop}
          img={item.categoryImage.desktop}
          name={item.category}
        />
      ))}
    </div>
  );
};

export default ProductCategories;
