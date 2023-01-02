import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import Styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valide name and age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valide age (> 0)",
      });
      return;
    }

    onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredAge("");
    // setEnteredUsername("");
  };

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} message={error.message} title={error.title} />}
      <Card className={Styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            ref={nameInputRef}
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            ref={ageInputRef}
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
