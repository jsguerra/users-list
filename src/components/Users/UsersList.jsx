import React from "react";
import Card from "../UI/Card";
import Styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={Styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
