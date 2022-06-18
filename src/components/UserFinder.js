import React, { useState, useEffect, Component } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Fragment } from "react/cjs/react.production.min";

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
class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({
      filteredUsers: DUMMY_USERS,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchUserHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchUserHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = (props) => {
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const DUMMY_USERS = [
//     {
//       id: "u1",
//       name: "Max",
//     },
//     {
//       id: "u2",
//       name: "Manual",
//     },
//     {
//       id: "u3",
//       name: "James",
//     },
//   ];

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchUserHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchUserHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
