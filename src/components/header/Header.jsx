import classes from "./header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMemo } from "react";

const Header = ({ className }) => {
  const classNames = useMemo(() => {
    const defaultClassname = classes["header-container"];

    if (className) {
      return className;
    }

    return defaultClassname;
  }, []);
  return (
    <div className={classes.header}>
      <div className={classNames}>
        <div className={classes["burger-logo"]}>
          <GiHamburgerMenu className={classes.burger} size={24} />

          <Logo className={classes.logo} />
        </div>

        <div className={classes.menu}>
          <p className={classes["menu-item"]}>Home</p>
          <p className={classes["menu-item"]}>Headphones</p>
          <p className={classes["menu-item"]}>Speakers</p>
          <p className={classes["menu-item"]}>Earphones</p>
        </div>
        <AiOutlineShoppingCart className={classes.cart} size={22} />
      </div>
    </div>
  );
};

export default Header;
