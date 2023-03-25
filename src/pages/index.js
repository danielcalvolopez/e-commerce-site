import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Hero from "@/components/hero/Hero";
import ProductCategories from "@/components/sections/product-categories/ProductCategories";

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
