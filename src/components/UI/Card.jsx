import React from "react";
import Styles from "./Card.module.css";

const Card = ({ children, className }) => {
  return <div className={`${Styles.card} ${className}`}>{children}</div>;
};

export default Card;
