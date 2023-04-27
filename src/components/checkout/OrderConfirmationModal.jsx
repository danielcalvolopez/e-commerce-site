import classes from "./order-confirmation-modal.module.css";
import Backdrop from "../UI/Backdrop";
import ButtonWide from "../UI/buttons/ButtonWide";
import Image from "next/image";
import orderConfirmation from "../../../public/assets/checkout/icon-order-confirmation.svg";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import { useSelector } from "react-redux";
import shipping from "@/utils/data/shippingRates";
import Link from "next/link";

const ThanksModal = () => {
  const orderConfirmed = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Backdrop />
      <div className={classes.container}>
        <div className={classes.confirmation}>
          <Image src={orderConfirmation} alt="" />
          <h3>thank you for your order</h3>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className={classes["order-summary"]}>
          <div className={classes.item}>
            {orderConfirmed.orderItems.map(
              ({ id, cartQuantity, price, name, image }) => (
                <CartItem
                  price={price}
                  name={name}
                  image={image.desktop}
                  key={id}
                >
                  <span>x{cartQuantity}</span>
                </CartItem>
              )
            )}

            <div className={classes.break} />
            <p className={classes.other}>and 2 other item(s)</p>
            {/* <p className={classes.other}>View less</p> */}
          </div>

          <div className={classes.price}>
            <Price
              flex
              text="grand total"
              total={cart.cartTotalAmount + shipping.standard}
            />
          </div>
        </div>
        <Link href="/">
          <ButtonWide>back to home</ButtonWide>
        </Link>
      </div>
    </>
  );
};

export default ThanksModal;
