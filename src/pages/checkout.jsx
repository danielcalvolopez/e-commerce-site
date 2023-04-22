import Checkout from "@/components/checkout/Checkout";
import Summary from "@/components/checkout/Summary";
import OrderConfirmationModal from "@/components/checkout/OrderConfirmationModal";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContent from "@/components/UI/MainContent";
import classes from "../styles/checkout.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "@/redux/features/orderSlice";

const checkout = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const orderConfirmed = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    postCode: false,
  });

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
    eNumber: "",
    ePin: "",
    method: payment,
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

  const handleSubmitCheckout = (event) => {
    event.preventDefault();
    const {
      name,
      email,
      phone,
      postCode,
      address,
      city,
      country,
      eNumber,
      ePin,
    } = order;

    if (name.length === 0 && name.length > 30) {
      setError((state) => ({
        ...state,
        name: true,
      }));
      return;
    }

    const eMailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!eMailregex.test(email)) {
      setError((state) => ({
        ...state,
        email: true,
      }));
      return;
    }

    const phoneRegex =
      /^(?:(?:\+|00)44|0)\s?(?:\d{5}\s?\d{4,5}|\d{3}\s?\d{3}\s?\d{4}|\d{2}\s?\d{4}\s?\d{4}|\d{4}\s?\d{3}\s?\d{4})$/;
    if (!phoneRegex.test(phone)) {
      setError((state) => ({
        ...state,
        phone: true,
      }));
      return;
    }

    const postCodeRegex =
      /^([A-PR-UWYZa-pr-uwyz][0-9][0-9A-HJKS-UWa-hjks-uw]?\s?[0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2})$/;
    if (!postCodeRegex.test(postCode)) {
      setError((state) => ({
        ...state,
        postCode: true,
      }));
      return;
    }

    dispatch(saveOrder(order));
    setOrder({
      name: "",
      email: "",
      phone: "",
      address: "",
      postCode: "",
      city: "",
      country: "",
      eNumber: "",
      ePin: "",
    });
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
              error={error}
            />

            <Summary handleSubmitCheckout={handleSubmitCheckout} />
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default checkout;
