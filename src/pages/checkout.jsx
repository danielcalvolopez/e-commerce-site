import CheckoutSummary from "@/components/checkout/CheckoutSummary";
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
import usePostOrder from "@/hooks/usePostOrder";
import CheckoutForm from "@/components/checkout/CheckoutForm";

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
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [payment, setPayment] = useState("e-Money");
  const { postOrderDbEmoney, postOrderDbCashOnDelivery } = usePostOrder();

  const onSubmit = (formData) => {
    dispatch(saveOrder({ formData, order, payment }));
    payment === "e-Money"
      ? postOrderDbEmoney(formData, order, payment)
      : postOrderDbCashOnDelivery(formData, order, payment);
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
            <CheckoutForm
              register={register}
              handleChangePayment={handleChangePayment}
              order={order}
              payment={payment}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              errors={errors}
            />

            <CheckoutSummary isFormValid={isValid} />
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default checkout;
