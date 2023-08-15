import React from "react";
import Image from "next/image";
import Link from "next/link";

import appIcon from "@/public/Images/app-icon.png";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes["icon-title"]}>
        <Image src={appIcon} alt="logo" />
        <h1 className={classes.header}>FOOD2DOOR</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
