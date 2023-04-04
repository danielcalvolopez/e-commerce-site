import Checkout from "@/components/checkout/Checkout";
import Summary from "@/components/checkout/Summary";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContent from "@/components/UI/MainContent";
import classes from "../styles/checkout.module.css";

const checkout = () => {
  return (
    <>
      <Header className={classes["header-bg-black"]} />
      <MainContent bgGray>
        <div className={classes.content}>
          <div className={classes.back}>
            <p>Go Back</p>
          </div>
          <div className={classes["body"]}>
            <Checkout />

            <Summary />
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default checkout;
