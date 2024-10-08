import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenuu from "../../components/Layout/AdminMenuu";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  // Fetching all users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/alluser"
        );
        const data = await response.json();
        if (data.success) {
          setUsers(data.user); // Store the user data in state
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Delete user function
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/auth/deleteuser/${id}`, // Adjust the URL if necessary
          {
            method: "DELETE",
          }
        );
        const data = await response.json();

        if (data.success) {
          // Update the users state to remove the deleted user
          setUsers(users.filter((user) => user._id !== id));
          toast.success(`user is deleted`);
        } else {
          toast.error(`Something went wrong`);
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Error deleting user");
      }
    }
  };

  return (
    <Layout title="Dashboard - All Users">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenuu />
          </div>

          <div className="col-md-9">
            <h1>All Users</h1>
            {/* Wrapping the table inside a div with table-responsive */}
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr className="bg-dark text-light">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteUser(user._id)} // Delete user on click
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
