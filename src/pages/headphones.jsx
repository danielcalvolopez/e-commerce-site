import Footer from "@/components/footer/Footer";
import HeaderBig from "@/components/header/HeaderBig";
import Banner4 from "@/components/sections/banners/Banner4";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Products from "@/components/sections/products/Products";
import MainContent from "@/components/UI/MainContent";
import classes from "../styles/headphones.module.css";
import { getData } from "./api/products";

const headphones = (props) => {
  const data = props.data;

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

export const getStaticProps = async () => {
  const products = await getData();

  const allProducts = JSON.parse(JSON.stringify(products));

  return {
    props: {
      data: allProducts,
    },
    revalidate: 1,
  };
};

export default headphones;
