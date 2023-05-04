import Button1 from "@/components/UI/buttons/Button1";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/router";
import classes from "./product.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const Product = ({
  image,
  name,
  description,
  newProduct,
  left,
  children,
  slug,
  button,
  category,
}) => {
  const size = useScreenSize();
  const router = useRouter();

  const handleOnClickProduct = () => {
    router.push(`/${category}/${slug}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={left ? classes.container : classes["container-reverse"]}
    >
      <Image
        className={classes.img}
        src={size > 1200 ? image?.desktop : image?.mobile}
        alt=""
        width={540}
        height={540}
        priority={true}
      />

      <div className={classes.info}>
        {newProduct && <p className={classes.new}>new product</p>}
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.description}>{description}</p>
        {button && (
          <Button1 onClick={handleOnClickProduct}>see product</Button1>
        )}
        <div className={classes["product-page"]}>{children}</div>
      </div>
    </motion.div>
  );
};

export default Product;
