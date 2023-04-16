import Checkout from "@/components/checkout/Checkout";
import Summary from "@/components/checkout/Summary";
import OrderConfirmationModal from "@/components/checkout/OrderConfirmationModal";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContent from "@/components/UI/MainContent";
import classes from "../styles/checkout.module.css";
import { useRouter } from "next/router";

const checkout = () => {
  const router = useRouter();
  return (
    <>
      <Header className={classes["header-bg-black"]} />
      <MainContent bgGray>
        {/* <OrderConfirmationModal /> */}
        <div className={classes.content}>
          <div className={classes.back}>
            <p onClick={() => router.back()}>Go Back</p>
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
