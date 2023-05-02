import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./menu.module.css";

const Menu = () => {
  const router = useRouter();
  const currentRoute = router.asPath;

  console.log(currentRoute);
  return (
    <div className={classes.menu}>
      <Link
        href="/"
        className={
          currentRoute === "/"
            ? classes["menu-item-active"]
            : classes["menu-item"]
        }
      >
        Home
      </Link>
      <Link
        href="/headphones"
        className={
          currentRoute === "/headphones"
            ? classes["menu-item-active"]
            : classes["menu-item"]
        }
      >
        Headphones
      </Link>
      <Link
        href="/speakers"
        className={
          currentRoute === "/speakers"
            ? classes["menu-item-active"]
            : classes["menu-item"]
        }
      >
        Speakers
      </Link>
      <Link
        href="/earphones"
        className={
          currentRoute === "/earphones"
            ? classes["menu-item-active"]
            : classes["menu-item"]
        }
      >
        Earphones
      </Link>
    </div>
  );
};

export default Menu;
