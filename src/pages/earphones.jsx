import Footer from "@/components/footer/Footer";
import HeaderBig from "@/components/header/HeaderBig";
import Banner4 from "@/components/sections/banners/Banner4";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Products from "@/components/sections/products/Products";
import MainContent from "@/components/UI/MainContent";
import useFetch from "@/hooks/useFetch";
import classes from "../styles/earphones.module.css";

const earphones = () => {
  const { data } = useFetch();
  return (
    <>
      <HeaderBig title="earphones" className={classes["bg-black"]} />
      <MainContent>
        <Products data={data} category="earphones" />
        <ProductCategories />
        <Banner4 />
      </MainContent>
      <Footer />
    </>
  );
};

export default earphones;
