import Button2 from "@/components/UI/buttons/Button2";
import Link from "next/link";
import classes from "./banner3.module.css";

const Banner3 = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="/assets/desktop/image-earphones-yx1.jpg"
      />
      <div className={classes.info}>
        <h4>YX1 EARPHONES</h4>
        <Link href="/earphones/yx1-earphones">
          <Button2>see product</Button2>
        </Link>
      </div>
    </div>
  );
};

export default Banner3;
