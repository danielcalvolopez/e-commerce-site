import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Hero from "@/components/hero/Hero";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";
import Banner1 from "@/components/sections/banners/Banner1";
import classes from "../styles/Home.module.css";

const Home = () => {
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

        <main className={classes.content}>
          <ProductCategories />
          <Banner1 />
        </main>
        <Footer />
      </>
    </>
  );
};

export default Home;
