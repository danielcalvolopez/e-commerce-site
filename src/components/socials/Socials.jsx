import classes from "./socials.module.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className={classes.social}>
      <AiFillFacebook className={classes["social-logo"]} size={24} />
      <AiOutlineTwitter className={classes["social-logo"]} size={24} />
      <AiOutlineInstagram className={classes["social-logo"]} size={24} />
    </div>
  );
};

export default Socials;
