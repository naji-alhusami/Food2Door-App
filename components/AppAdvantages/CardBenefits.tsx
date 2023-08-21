import React from "react";
import Image from "next/image";
// import AppBenefits from "./AppBenefits";

import CardsBenefitsData from "./CardBenefitsData";
import classes from "./CardsBenefits.module.css";
import Card from "../Reusable/Card";

const CardsBenefits = () => {
  return (
    <div>
      <h1 className={classes.header}>Advantages of using Food2Door</h1>
      <div className={classes.cards}>
        {CardsBenefitsData.map((data) => (
          <div key={data.id} className={classes.card}>
            <Card>
              <Image
                src={data.image}
                alt="cardsphoto"
                style={{ width: 200, height: 200 }}
              />
              <h2>{data.header}</h2>
              <p>{data.text}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsBenefits;
