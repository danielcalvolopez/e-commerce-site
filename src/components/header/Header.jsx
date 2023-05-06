import classes from "./header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useMemo, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Backdrop from "../UI/Backdrop";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../redux/features/cartSlice";
import Menu from "../menu/Menu";
import { AnimatePresence, motion } from "framer-motion";

const Header = ({ className }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.cartTotalQuantity.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.cartTotalQuantity]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  const handleToggleCart = () => {
    setToggleCart((prev) => !prev);
  };

  useEffect(() => {
    if (!toggleMenu) {
      document.body.style.overflow = "scroll";
    }
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    }
  }, [toggleMenu]);

  const classNames = useMemo(() => {
    const defaultClassname = classes["header-container"];

    if (className) {
      return defaultClassname.concat(" ", className);
    }

    return defaultClassname;
  }, []);
  return (
    <div className={classes.header}>
      {toggleMenu && <Backdrop onClick={handleToggleMenu} />}
      <div className={classNames}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={classes["burger-logo"]}
        >
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            className={classes.burger}
            size={24}
          />

          <Logo className={classes.logo} />
        </motion.div>

        <Menu />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`${classes["cart-wrapper"]} ${
            buttonIsHighlighted && classes.bump
          }`}
        >
          <AiOutlineShoppingCart
            onClick={handleToggleCart}
            className={classes.cart}
            size={22}
          />
          {cart.cartItems.length > 0 && (
            <span onClick={handleToggleCart} className={classes.quantity}>
              {cart.cartTotalQuantity}
            </span>
          )}
          {toggleCart && <Cart toggleCart={handleToggleCart} />}
        </motion.div>
      </div>
      <AnimatePresence>
        {toggleMenu && <ToggleMenu setToggleMenu={setToggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
