import React from "react";
import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import appIcon from "@/public/Images/app-icon.png";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.navbarContent}>
        <ul className={classes.navbarList}>
          <li>
            <Link href="/standings">HOME</Link>
          </li>
          <li>
            <Link href="/standings">CONTACT</Link>
          </li>
          <li>
            <Link href="/standings">ABOUT</Link>
          </li>
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
  );
};

export default Navbar;
