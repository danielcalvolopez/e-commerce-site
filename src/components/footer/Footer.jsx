import Logo from "../Logo";
import classes from "./footer.module.css";
import Socials from "../socials/Socials";
import Menu from "../menu/Menu";

const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <span className={classes["orange-line"]} />
      <div className={classes["footer-content"]}>
        <div className={classes.header}>
          <Logo />
          <Menu />
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

            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
