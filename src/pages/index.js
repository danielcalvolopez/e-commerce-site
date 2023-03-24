import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Head from "next/head";
import classes from "@/styles/Home.module.css";
import HeaderBig from "@/components/header/HeaderBig";
import Hero from "@/components/hero/Hero";
import ProductCategory from "@/components/sections/ProductCategory";
import ProductCategories from "@/components/sections/ProductCategories";

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
        <main>
          <ProductCategories />
        </main>
        <Footer />
      </>
    </>
  );
};

export default Home;
