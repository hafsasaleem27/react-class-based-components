import React, { useState, useEffect } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Fragment } from "react/cjs/react.production.min";

const UserFinder = (props) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Max",
    },
    {
      id: "u2",
      name: "Manual",
    },
    {
      id: "u3",
      name: "James",
    },
  ];

  useEffect(() => {
    setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
  }, [searchTerm]);

  const searchUserHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchUserHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
