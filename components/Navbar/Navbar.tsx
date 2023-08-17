import React from "react";
import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import appIcon from "@/public/Images/app-icon.png";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes["icon-title"]}>
        <Image src={appIcon} alt="logo" />
        <h1 className={classes.header}>Food2Door</h1>
      </div>
      <div>
        <ul className={classes.navbarList}>
          <li>
            <Link href="/standings">HOME</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <BasketButton />
            {/* <Link href="/standings">Standings</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
