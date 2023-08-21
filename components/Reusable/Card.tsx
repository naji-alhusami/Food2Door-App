import React, { ReactNode } from "react";

// import classes from "./Card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return <div> {props.children} </div>;
};

export default Card;
