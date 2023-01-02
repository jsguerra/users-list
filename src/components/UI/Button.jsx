import React from "react";
import Styles from "./Button.module.css";

const Buttons = ({ children, onClick, type }) => {
  return (
    <button className={Styles.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
