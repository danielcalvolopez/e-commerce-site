import menuData from "@/utils/data/menuData";
import { useRouter } from "next/router";
import classes from "./menu.module.css";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const Menu = () => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className={classes.menu}
    >
      {menuData.map(({ name, path }) => (
        <MenuItem
          name={name}
          path={path}
          currentRoute={currentRoute}
          key={name}
        />
      ))}
    </motion.div>
  );
};

export default Menu;
