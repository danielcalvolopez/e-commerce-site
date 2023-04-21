import Checkout from "@/components/checkout/Checkout";
import Summary from "@/components/checkout/Summary";
import OrderConfirmationModal from "@/components/checkout/OrderConfirmationModal";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContent from "@/components/UI/MainContent";
import classes from "../styles/checkout.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const checkout = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.cartItems.length === 0) {
      router.push("/");
    }
  }, [cart.cartItems.length]);

  const [payment, setPayment] = useState("e-Money");
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postCode: "",
    city: "",
    country: "",
    method: payment,
    eNumber: "",
    ePin: "",
    orderItems: cart.cartItems,
  });

  useEffect(() => {
    setOrder((state) => ({
      ...state,
      orderItems: cart.cartItems,
      method: payment,
    }));
  }, [cart.cartItems, payment]);

  const handleChangeInput = (event) => {
    setOrder((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangePayment = (event) => {
    setPayment(event.target.id);
  };
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
            <Checkout
              handleChangeInput={handleChangeInput}
              handleChangePayment={handleChangePayment}
              order={order}
              payment={payment}
            />

            <Summary />
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default checkout;
