import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BasketButton from "./BasketButton";
import greenx from "@/public/Images/greenx.png";
import appIcon from "@/public/Images/appIcon.png";
import responsiveNavbar from "@/public/Images/responsiveNavbar.svg";
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <div className={classes.responsiveNavbar}>
          <button
            type="button"
            className={classes.navbarButton}
            onClick={() => {
              setShowNavbarInResponsive(!showNavbarInResponsive);
            }}
          >
            <Image
              src={showNavbarInResponsive ? greenx : responsiveNavbar}
              alt="Image"
              className={`${classes.imageNavbar} ${
                showNavbarInResponsive ? classes.imageAnimate : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Screens */}
        <div className="navbar-small-screens-content">
          {showNavbarInResponsive && (
            <div>
              <ul>
                <Link
                  href="/"
                  onClick={() => {
                    setShowNavbarInResponsive(!showNavbarInResponsive);
                  }}
                >
                  <li>HOME</li>
                </Link>
                <Link
                  href="/iconicplaces"
                  onClick={() => {
                    setShowNavbarInResponsive(!showNavbarInResponsive);
                  }}
                >
                  <li>ICONIC PLACES</li>
                </Link>
                <Link
                  href="/about"
                  onClick={() => {
                    setShowNavbarInResponsive(!showNavbarInResponsive);
                  }}
                >
                  <li>ABOUT</li>
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Large Screens */}
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
