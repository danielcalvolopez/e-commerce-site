import Footer from "@/components/footer/Footer";
import HeaderBig from "@/components/header/HeaderBig";
import Banner4 from "@/components/sections/banners/Banner4";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Products from "@/components/sections/products/Products";
import MainContent from "@/components/UI/MainContent";
import categories from "@/utils/data/categories";
import { useRouter } from "next/router";
import classes from "../../styles/category.module.css";
import { getData } from "../api/products";

const Category = (props) => {
  const data = props.data;

  const router = useRouter();

  const category = router.query.category;

  const filteredData = data.filter((item) => item.category.includes(category));

  return (
    <>
      <HeaderBig title={category} className={classes["header-bg-black"]} />
      <MainContent>
        <Products data={filteredData} category={category} />
        <ProductCategories />
        <Banner4 />
      </MainContent>
      <Footer />
    </>
  );
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: categories.map((category) => ({
      params: { category: category.name },
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
