import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import appIcon from "@/public/Images/appIcon.png";
import responsiveNavbar from "@/public/Images/responsiveNavbar.svg";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <div className={classes.responsiveNavbar}>
          <button type="button" className={classes.navbarButton}>
            <Image src={responsiveNavbar} alt="responsiveNavbar" />
          </button>
          {/* <button
            type="button"
            onClick={() => setShowNavbarInResponsive(!showNavbarInResponsive)}
          >
            {showNavbarInResponsive ? (
              <svg className="w-6 h-6 " viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button> */}
        </div>
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
          <Image src={appIcon} alt="logo" className={classes.icon} />
          <h1 className={classes.header}>Food2Door</h1>
        </div>
        <div className={classes.navbarButton}>
          <BasketButton />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
