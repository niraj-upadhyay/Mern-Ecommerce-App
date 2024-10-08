import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="list-group">
      <div className="text-center">
        <h1>User Panel</h1>
      </div>
      <div className="list-group ">
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
          activeClassName="active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action"
        >
          orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
