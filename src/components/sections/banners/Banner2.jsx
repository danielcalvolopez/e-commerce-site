import Button2 from "@/components/UI/buttons/Button2";
import Link from "next/link";
import classes from "./banner2.module.css";

const Banner2 = () => {
  return (
    <div className={classes.container}>
      <h4>zx7 speaker</h4>
      <Link href="/speakers/zx7-speaker">
        <Button2>see product</Button2>
      </Link>
    </div>
  );
};

export default Banner2;
