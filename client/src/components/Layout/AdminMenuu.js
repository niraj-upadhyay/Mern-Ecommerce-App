import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenuu = () => {
  return (
    <>
      <div className="list-group">
        <div className="text-center">
          <h1>Admin Panel</h1>
        </div>
        <div className="list-group ">
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            activeClassName="active"
          >
            create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-user"
            className="list-group-item list-group-item-action"
          >
            User
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenuu;
