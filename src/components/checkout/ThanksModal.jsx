import classes from "./thanks-modal.module.css";
import Backdrop from "../UI/Backdrop";
import ButtonWide from "../UI/buttons/ButtonWide";
import Image from "next/image";
import orderConfirmation from "../../../public/assets/checkout/icon-order-confirmation.svg";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";

const ThanksModal = () => {
  return (
    <>
      <Backdrop />
      <div className={classes.container}>
        <div className={classes.confirmation}>
          <Image src={orderConfirmation} />
          <h3>thank you for your order</h3>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className={classes["order-summary"]}>
          <div className={classes.item}>
            <CartItem>
              <span>x1</span>
            </CartItem>
            <div className={classes.break} />
            <p className={classes.other}>and 2 other item(s)</p>
          </div>

          <div className={classes.price}>
            <Price flex text="grand total" total={5446} />
          </div>
        </div>
        <ButtonWide>back to home</ButtonWide>
      </div>
    </>
  );
};

export default ThanksModal;
