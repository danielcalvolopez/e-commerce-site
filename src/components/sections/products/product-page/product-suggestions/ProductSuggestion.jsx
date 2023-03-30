import Button1 from "@/components/UI/buttons/Button1";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/router";
import classes from "./product-suggestion.module.css";

const ProductSuggestion = ({ image, slug, name }) => {
  const size = useScreenSize();
  const router = useRouter();

  const imgSrc = () => {
    if (size > 1200) {
      return image.desktop;
    }

    if (size < 1200 && size > 800) {
      return image.tablet;
    }

    if (size < 800) {
      return image.mobile;
    }
  };

  const handleOnClickProduct = () => {
    router.push(`/${slug}`);
  };

  return (
    <div className={classes.container}>
      <img className={classes.img} src={imgSrc()} />
      <h5>{name}</h5>
      <Button1 onClick={handleOnClickProduct}>see product</Button1>
    </div>
  );
};

export default ProductSuggestion;
