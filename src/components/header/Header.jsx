import classes from "./header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useMemo, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Backdrop from "../UI/Backdrop";

const Header = ({ className }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
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
      {toggleMenu && <Backdrop />}
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
          <p className={classes["menu-item"]}>Home</p>
          <p className={classes["menu-item"]}>Headphones</p>
          <p className={classes["menu-item"]}>Speakers</p>
          <p className={classes["menu-item"]}>Earphones</p>
        </div>
        <AiOutlineShoppingCart className={classes.cart} size={22} />
      </div>
      {toggleMenu && <ToggleMenu setToggleMenu={setToggleMenu} />}
    </div>
  );
};

export default Header;
