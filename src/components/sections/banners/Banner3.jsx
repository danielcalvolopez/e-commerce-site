import Button2 from "@/components/UI/buttons/Button2";
import Image from "next/image";
import Link from "next/link";
import classes from "./banner3.module.css";

const Banner3 = () => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.img}
        src="/assets/desktop/image-earphones-yx1.jpg"
        alt=""
        width={200}
        height={300}
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
