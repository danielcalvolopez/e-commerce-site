import Product from "./Product";
import classes from "./products.module.css";

const Products = ({ data, category }) => {
  const newFirstSort = (a, b) => {
    if (a.new === true) {
      return -1;
    }
    if (b.new === false) {
      return 1;
    }
  };
  const sortedData = data.sort(newFirstSort);

  return (
    <div className={classes.container}>
      {sortedData.map((product) => {
        const section = product.category === category;
        return (
          section && (
            <Product
              key={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              features={product.features}
              newProduct={product.new}
              left={product.left}
              categoryImage={product.categoryImage}
            />
          )
        );
      })}
    </div>
  );
};

export default Products;
