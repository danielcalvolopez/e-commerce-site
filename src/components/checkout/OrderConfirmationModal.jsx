import classes from "./order-confirmation-modal.module.css";
import Backdrop from "../UI/Backdrop";
import ButtonWide from "../UI/buttons/ButtonWide";
import Image from "next/image";
import orderConfirmation from "../../../public/assets/checkout/icon-order-confirmation.svg";
import CartItem from "../cart/CartItem";
import Price from "../cart/Price";
import { useDispatch, useSelector } from "react-redux";
import shipping from "@/utils/data/shippingRates";
import Link from "next/link";
import { useState } from "react";
import { clearCart } from "@/redux/features/cartSlice";

const ThanksModal = () => {
  const orderConfirmed = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);
  const [toggleViewItems, setToggleViewItems] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setToggleViewItems((prev) => !prev);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
            {toggleViewItems ? (
              cart.orderItems.map(
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
              )
            ) : (
              <CartItem
                price={orderConfirmed.orderItems[0].price}
                name={orderConfirmed.orderItems[0].name}
                image={orderConfirmed.orderItems[0].image.desktop}
                key={orderConfirmed.orderItems[0].id}
              >
                <span>x{orderConfirmed.orderItems[0].cartQuantity}</span>
              </CartItem>
            )}
            {cart.cartItems.length > 1 ? (
              <>
                <div className={classes.break} />
                {!toggleViewItems ? (
                  <p onClick={handleToggle} className={classes.view}>
                    and {cart.cartItems.length - 1} other item(s)
                  </p>
                ) : (
                  <p onClick={handleToggle} className={classes.view}>
                    View less
                  </p>
                )}
              </>
            ) : null}
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
          <ButtonWide onClick={() => handleClearCart()}>
            back to home
          </ButtonWide>
        </Link>
      </div>
    </>
  );
};

export default ThanksModal;
