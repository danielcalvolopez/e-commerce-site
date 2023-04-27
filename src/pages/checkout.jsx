import Checkout from "@/components/checkout/Checkout";
import Summary from "@/components/checkout/Summary";
import OrderConfirmationModal from "@/components/checkout/OrderConfirmationModal";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContent from "@/components/UI/MainContent";
import classes from "../styles/checkout.module.css";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "@/redux/features/orderSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/utils/validationSchema";
import { LoadingContext } from "@/context/LoadingContext";
import LoadingPage from "@/components/UI/loading/LoadingPage";

const checkout = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const order = cart.cartItems;
  const dispatch = useDispatch();
  const [confirmationModal, setConfirmationModal] = useState(false);
  const loading = useContext(LoadingContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [payment, setPayment] = useState("e-Money");

  const postOrderDb = async (formData, order, payment) => {
    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        billing: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          postCode: formData.postCode,
          city: formData.city,
          country: formData.country,
        },
        payment: {
          method: payment,
          eNumber: formData.eNumber,
          ePin: formData.ePin,
        },
        orderItems: order,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onSubmit = (formData) => {
    dispatch(saveOrder({ formData, order, payment }));
    postOrderDb(formData, order, payment);
    setConfirmationModal(true);
  };

  const handleChangePayment = (event) => {
    setPayment(event.target.id);
  };

  return (
    <>
      {loading && <LoadingPage />}
      <Header className={classes["header-bg-black"]} />
      <MainContent bgGray>
        {confirmationModal && <OrderConfirmationModal />}
        <div className={classes.content}>
          <div className={classes.back}>
            <p onClick={() => router.back()}>Go Back</p>
          </div>
          <div className={classes["body"]}>
            <Checkout
              register={register}
              handleChangePayment={handleChangePayment}
              order={order}
              payment={payment}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              errors={errors}
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
