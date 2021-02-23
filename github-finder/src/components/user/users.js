import React from "react";
import PropTypes from "prop-types";
import UserItem from "./userItem";
import Spinner from "../layout/spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map((user) => (
          <UserItem key={user.node_id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};
export default Users;
