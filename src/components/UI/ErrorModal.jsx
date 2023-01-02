import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import Styles from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={Styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ message, onConfirm, title }) => {
  return (
    <Card className={Styles.modal}>
      <header className={Styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={Styles.content}>
        <p>{message}</p>
      </div>
      <footer className={Styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ message, onConfirm, title }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={message} onConfirm={onConfirm} title={title} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
