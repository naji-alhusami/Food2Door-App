import React from "react";
import Image from "next/image";

import bgImage from "@/public/Images/bgImage.jpg";
import classes from "./HomeBackground.module.css";

const HomeBackground = () => {
  return (
    <div>
      <div className={classes["food-image"]}>
        <Image src={bgImage} alt="foodImage" />
      </div>
      <div className={classes.location}>
        <h1>
          Simplify your life with doorstep food delivery using Food2Door App!
        </h1>
        <div className={classes["input-container"]}>
          <input type="text" placeholder="Enter your location" className={classes["search-input"]} />
          <button className={classes["search-button"]}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBackground;
