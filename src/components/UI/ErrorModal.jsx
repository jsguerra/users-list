import React from "react";
import Card from "./Card";
import Button from "./Button";
import Styles from "./ErrorModal.module.css";

const ErrorModal = ({ message, title }) => {
  return (
    <>
      <div className={Styles.backdrop}></div>
      <Card className={Styles.modal}>
        <header className={Styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={Styles.content}>
          <p>{message}</p>
        </div>
        <footer className={Styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
