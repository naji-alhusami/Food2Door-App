import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import appIcon from "@/public/Images/appIcon.png";
import bgImage from "@/public/Images/bgImage.jpg";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <div className={classes.navbarContent}>
          <ul className={classes.navbarList}>
            <Link href="/standings">
              <li>HOME</li>
            </Link>
            <Link href="/standings">
              <li>CONTACT</li>
            </Link>
            <Link href="/standings">
              <li>ABOUT</li>
            </Link>
          </ul>
        </div>
        <div className={classes["icon-title"]}>
          <Image src={appIcon} alt="logo" />
          <h1 className={classes.header}>Food2Door</h1>
        </div>
        <div className={classes.navbarButton}>
          <BasketButton />
        </div>
      </nav>
      <div className={classes["food-image"]}>
        <Image src={bgImage} alt="foodImage" />
      </div>
    </Fragment>
  );
};

export default Navbar;
