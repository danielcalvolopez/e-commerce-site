import menuData from "@/utils/data/menuData";
import { useRouter } from "next/router";
import classes from "./menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <div className={classes.menu}>
      {menuData.map(({ name, path }) => (
        <MenuItem
          name={name}
          path={path}
          currentRoute={currentRoute}
          key={name}
        />
      ))}
    </div>
  );
};

export default Menu;
