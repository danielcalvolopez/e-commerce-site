import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import classes from "../../../styles/product-details.module.css";
import { MongoClient } from "mongodb";
import { getData } from "../../api/products";
import Product from "@/components/sections/products/Product";
import Header from "@/components/header/Header";
import MainContent from "@/components/UI/MainContent";
import Counter from "@/components/UI/Counter";
import Button1 from "@/components/UI/buttons/Button1";
import ProductInfo from "@/components/sections/products/product-page/ProductInfo";
import ProductPictures from "@/components/sections/products/product-page/ProductPictures";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Banner4 from "@/components/sections/banners/Banner4";
import Footer from "@/components/footer/Footer";
import ProductSuggestions from "@/components/sections/products/product-page/product-suggestions/ProductSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { addCustomAmountToCart } from "@/redux/features/cartSlice";
import { reset, selectCount } from "@/redux/features/counterSlice";
import { LoadingContext } from "@/context/LoadingContext";
import LoadingPage from "@/components/UI/loading/LoadingPage";
import Head from "next/head";

const ProductDetails = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const counter = useSelector(selectCount);
  const products = data;
  const loading = useContext(LoadingContext);

  const handleAddToCart = (product) => {
    dispatch(addCustomAmountToCart([product, counter]));
    dispatch(reset());
  };

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
      <Head>
        <title>{product?.name}</title>
      </Head>
      {loading && <LoadingPage />}
      <Header className={classes["header-bg-black"]} />
      <MainContent>
        <Product
          button={false}
          image={product?.image}
          name={product?.name}
          description={product?.description}
          left
        >
          <Counter />
          <Button1 onClick={() => handleAddToCart(product)}>
            add to cart
          </Button1>
        </Product>
        <ProductInfo
          features={product?.features}
          includes={product?.includes}
        />
        <ProductPictures gallery={product?.gallery} />
        <ProductSuggestions suggestions={product?.others} />
        <ProductCategories data={data} />
        <Banner4 />
      </MainContent>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const productsCollection = db.collection("products");

  const products = await productsCollection
    .find({}, { slug: 1, category: 1 })
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: products.map((product) => ({
      params: {
        productDetails: product.slug.toString(),
        category: product.category.toString(),
      },
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

export default ProductDetails;
