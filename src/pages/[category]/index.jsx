import Footer from "@/components/footer/Footer";
import HeaderBig from "@/components/header/HeaderBig";
import Banner4 from "@/components/sections/banners/Banner4";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Products from "@/components/sections/products/Products";
import LoadingPage from "@/components/UI/loading/LoadingPage";
import MainContent from "@/components/UI/MainContent";
import { LoadingContext } from "@/context/LoadingContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import classes from "../../styles/category.module.css";
import { getData } from "../api/products";

const Category = (props) => {
  const data = props.data;
  const router = useRouter();
  const category = router.query.category;
  const filteredData = data.filter((item) => item.category.includes(category));
  const loading = useContext(LoadingContext);

  return (
    <>
      <Head>
        <title>{category.charAt(0).toUpperCase() + category.slice(1)}</title>
      </Head>
      {loading && <LoadingPage />}
      <HeaderBig title={category} className={classes["header-bg-black"]} />
      <MainContent>
        <Products data={filteredData} category={category} />
        <ProductCategories data={data} />
        <Banner4 />
      </MainContent>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const products = await getData();

  const uniqueCategories = [...new Set(products.map((item) => item.category))];
  return {
    fallback: false,
    paths: uniqueCategories.map((category) => ({
      params: { category: category },
    })),
  };
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

export default Category;
