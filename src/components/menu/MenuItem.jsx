import Link from "next/link";
import classes from "./menu-item.module.css";

const MenuItem = ({ currentRoute, name, path }) => {
  return (
    <Link
      href={path}
      className={
        currentRoute === path
          ? classes["menu-item-active"]
          : classes["menu-item"]
      }
    >
      {name}
    </Link>
  );
};

export default MenuItem;
