import React from "react";
import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import appIcon from "@/public/Images/app-icon.png";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.Navbar}>
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
      <div className={classes["icon-title"]}>
        <div className={classes["icon-title-content"]}>
          <Image src={appIcon} alt="logo" />
          <h1 className={classes.header}>Food2Door</h1>
        </div>
      </div>
      <div>
        <ul className={classes.navbarList}>
          <li>
            <Link href="/standings">HOME</Link>
          </li>
          {/* <li>
            <Link href="/standings">CONTACT</Link>
          </li>
          <li>
            <Link href="/standings">ABOUT</Link>
          </li> */}
          <li>
            <BasketButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
