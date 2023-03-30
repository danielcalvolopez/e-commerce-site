import Button1 from "@/components/UI/buttons/Button1";
import useScreenSize from "@/hooks/useScreenSize";
import classes from "./product-suggestion.module.css";

const ProductSuggestion = () => {
  const size = useScreenSize();

  const imgSrc = () => {
    if (size > 1200) {
      return "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
    }

    if (size < 1200 && size > 800) {
      return "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
    }

    if (size < 800) {
      return "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
    }
  };

  return (
    <div className={classes.container}>
      <img className={classes.img} src={imgSrc()} />
      <h5>xx99 mark i</h5>
      <Button1>see product</Button1>
    </div>
  );
};

export default ProductSuggestion;
