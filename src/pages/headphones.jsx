import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderBig from "@/components/header/HeaderBig";
import Banner4 from "@/components/sections/banners/Banner4";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Products from "@/components/sections/products/Products";
import MainContent from "@/components/UI/MainContent";
import useFetch from "@/hooks/useFetch";
import classes from "../styles/headphones.module.css";

const headphones = () => {
  const data = useFetch();

  return (
    <>
      <HeaderBig title="headphones" className={classes["bg-black"]} />
      <MainContent>
        <Products data={data} category="headphones" />
        <ProductCategories />
        <Banner4 />
      </MainContent>
      <Footer />
    </>
  );
};

export default headphones;
