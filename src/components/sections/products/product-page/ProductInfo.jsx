import classes from "./product-info.module.css";

const ProductInfo = ({ features, includes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.features}>
        <h4>FEATURES</h4>
        <p className={classes.description}>{features}</p>
      </div>
      <div className={classes.box}>
        <h4>in the box</h4>
        <ul className={classes.list}>
          {includes?.map(({ quantity, item }) => (
            <li key={item} className={classes["list-element"]}>
              <span className={classes.quantity}>{quantity}x</span>
              <p className={classes.description}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
