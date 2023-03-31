import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Banner4 from "@/components/sections/banners/Banner4";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Product from "@/components/sections/products/Product";
import ProductSuggestions from "@/components/sections/products/product-page/product-suggestions/ProductSuggestions";
import ProductInfo from "@/components/sections/products/product-page/ProductInfo";
import ProductPictures from "@/components/sections/products/product-page/ProductPictures";
import Button1 from "@/components/UI/buttons/Button1";
import Counter from "@/components/UI/Counter";
import MainContent from "@/components/UI/MainContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "../styles/product-details.module.css";
import { MongoClient } from "mongodb";
import { getData } from "./api/products";

const productDetails = (props) => {
  const router = useRouter();

  const [product, setProduct] = useState({});

  const products = props.data;

  useEffect(() => {
    if (router.query.productDetails) {
      let result = products.find((product) => {
        return product.slug === router.query.productDetails;
      });
      setProduct(result);
    }
  }, [router.query.productDetails]);
  return (
    <>
      <Header className={classes["bg-black"]} />
      <MainContent>
        <Product
          button={false}
          image={product?.image}
          name={product?.name}
          description={product?.description}
        >
          <Counter />
          <Button1>add to cart</Button1>
        </Product>
        <ProductInfo
          features={product?.features}
          includes={product?.includes}
        />
        <ProductPictures gallery={product?.gallery} />
        <ProductSuggestions productSuggestions={product?.others} />
        <ProductCategories />
        <Banner4 />
      </MainContent>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://bubbleboy:fTdwgLSOBVi5BvDb@cluster0.dh7qqco.mongodb.net/e_commerce?retryWrites=true&w=majority"
  );
  const db = client.db();
  const productsCollection = db.collection("products");

  const products = await productsCollection.find({}, { slug: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: products.map((product) => ({
      params: { productDetails: product.slug },
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

export default productDetails;
