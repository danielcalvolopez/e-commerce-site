import classes from "./header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useMemo, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Backdrop from "../UI/Backdrop";
import Link from "next/link";
import Cart from "../cart/Cart";

const Header = ({ className }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

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
        <div className={classes["burger-logo"]}>
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            className={classes.burger}
            size={24}
          />

          <Logo className={classes.logo} />
        </div>

        <div className={classes.menu}>
          <Link href="/" className={classes["menu-item"]}>
            Home
          </Link>
          <Link href="/headphones" className={classes["menu-item"]}>
            Headphones
          </Link>
          <Link href="/speakers" className={classes["menu-item"]}>
            Speakers
          </Link>
          <Link href="/earphones" className={classes["menu-item"]}>
            Earphones
          </Link>
        </div>
        <div className={classes["cart-wrapper"]}>
          <AiOutlineShoppingCart
            onClick={handleToggleCart}
            className={classes.cart}
            size={22}
          />
          {toggleCart && <Cart toggleCart={handleToggleCart} />}
        </div>
      </div>
      {toggleMenu && <ToggleMenu setToggleMenu={setToggleMenu} />}
    </div>
  );
};

export default Header;
