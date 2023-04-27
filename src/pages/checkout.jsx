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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/utils/validationSchema";

const checkout = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const orderConfirmed = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [confirmModal, setConfirmModal] = useState(false);
  const [buttonAbled, setButtonAbled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [payment, setPayment] = useState("e-Money");
  const order = cart.cartItems;

  const onSubmit = (formData) => {
    dispatch(saveOrder({ formData, order, payment }));
    setConfirmModal(true);
  };

  const handleChangePayment = (event) => {
    setPayment(event.target.id);
  };

  return (
    <div>
      <Header className={classes["header-bg-black"]} />
      <MainContent bgGray>
        {confirmModal && <OrderConfirmationModal />}
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
    </div>
  );
};

export default checkout;
