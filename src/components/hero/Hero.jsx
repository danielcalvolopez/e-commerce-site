import Link from "next/link";
import Button1 from "../UI/buttons/Button1";
import classes from "./hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={classes.content}
        >
          <p className={classes.announce}>new product</p>
          <h1 className={classes.title}>XX99 Mark II Headphones</h1>
          <p className={classes.description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            className={classes.link}
            href="/headphones/xx99-mark-two-headphones"
          >
            <Button1>see product</Button1>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
