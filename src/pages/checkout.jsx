import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import RadioInput from "@/components/UI/inputs/radio/RadioInput";
import TextInput from "@/components/UI/inputs/text/TextInput";
import MainContent from "@/components/UI/MainContent";
import { useState } from "react";
import classes from "../styles/checkout.module.css";

const checkout = () => {
  const [payment, setPayment] = useState("e-Money");

  const handleChangePayment = (event) => {
    setPayment(event.target.id);
  };

  return (
    <>
      <Header className={classes["header-bg-black"]} />
      <MainContent bgGray>
        <div className={classes.content}>
          <div className={classes.back}>
            <p>Go Back</p>
          </div>
          <div className={classes["body"]}>
            <div className={classes.checkout}>
              <h3>checkout</h3>
              <TextInput label="name" placeholder="John Doe" />

              <RadioInput
                id="e-Money"
                label="e-Money"
                checked={payment === "e-Money"}
                onClick={handleChangePayment}
              />
              <RadioInput
                id="Cash on Delivery"
                label="Cash on Delivery"
                onClick={handleChangePayment}
                checked={payment === "Cash on Delivery"}
              />
            </div>
            <div className={classes.summary}>
              <h6>summary</h6>
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default checkout;
