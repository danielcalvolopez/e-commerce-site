import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Hero from "@/components/hero/Hero";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Banner1 from "@/components/sections/banners/Banner1";
import Banner2 from "@/components/sections/banners/Banner2";
import Banner3 from "@/components/sections/banners/Banner3";
import Banner4 from "@/components/sections/banners/Banner4";
import MainContent from "@/components/UI/MainContent";
import { getData } from "./api/products";

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>audiophile</title>
        <meta name="description" content="Experience the sound" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Hero />

        <MainContent>
          <ProductCategories data={data} />
          <Banner1 />
          <Banner2 />
          <Banner3 />
          <Banner4 />
        </MainContent>

        <Footer />
      </>
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

export default Home;
