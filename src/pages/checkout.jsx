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
import { eMailregex, phoneRegex, postCodeRegex } from "@/utils/functions/regex";

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
    address: false,
    city: false,
    country: false,
  });
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

  const { name, email, phone, postCode, address, city, country } = order;

  console.log(orderConfirmed);

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

    if (name.length === 0) {
      setError((state) => ({
        ...state,
        name: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        name: false,
      }));
    }

    if (!eMailregex.test(email)) {
      setError((state) => ({
        ...state,
        email: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        email: false,
      }));
    }

    if (!phoneRegex.test(phone)) {
      setError((state) => ({
        ...state,
        phone: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        phone: false,
      }));
    }

    if (address.length === 0) {
      setError((state) => ({
        ...state,
        address: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        address: false,
      }));
    }

    if (!postCodeRegex.test(postCode)) {
      setError((state) => ({
        ...state,
        postCode: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        postCode: false,
      }));
    }

    if (city.length === 0) {
      setError((state) => ({
        ...state,
        city: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        city: false,
      }));
    }

    if (country.length === 0) {
      setError((state) => ({
        ...state,
        country: true,
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        country: false,
      }));
    }

    dispatch(saveOrder(order));
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
