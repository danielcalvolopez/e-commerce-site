import Image from "next/image";
import Link from "next/link";
import Button3 from "../../UI/buttons/Button3";
import classes from "./product-category.module.css";

const ProductCategory = ({ img, name }) => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.thumbnail}
        width={170}
        height={150}
        src={img}
        alt=""
      />
      <div className={classes.card}>
        <h6>{name}</h6>
        <Link href={`/${name}`}>
          <Button3>shop</Button3>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
