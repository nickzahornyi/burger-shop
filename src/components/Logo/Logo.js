import React from "react";

import burderLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = () => (
  <div className={classes.logo}>
    <img src={burderLogo} alt="Burger Shop" />
  </div>
);

export default logo;
