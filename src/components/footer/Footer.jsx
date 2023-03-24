import Logo from "../Logo";
import classes from "./footer.module.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <span className={classes["orange-line"]} />
      <div className={classes["footer-content"]}>
        <div className={classes.header}>
          <Logo />
          <div className={classes.menu}>
            <p className={classes["menu-item"]}>Home</p>
            <p className={classes["menu-item"]}>Headphones</p>
            <p className={classes["menu-item"]}>Speakers</p>
            <p className={classes["menu-item"]}>Earphones</p>
          </div>
        </div>

        <div className={classes.body}>
          <p className={classes.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className={classes.bottom}>
            <p className={classes.copyright}>
              Copyright 2023. All Rights Reserved
            </p>
            <div className={classes.social}>
              <AiFillFacebook className={classes["social-logo"]} size={24} />
              <AiOutlineTwitter className={classes["social-logo"]} size={24} />
              <AiOutlineInstagram
                className={classes["social-logo"]}
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
