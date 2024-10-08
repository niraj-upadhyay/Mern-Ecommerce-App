import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = { name, email, password, phone, address, answer };

    try {
      const res = await axios.post("/api/v1/auth/register", register);
      if (res && res.data.success) {
        console.log("Response:", res.data);
        // toast.success(res.data && res.data.message);
        toast.success(res.data.message || "Registration successful");
        // alert("Registration successful");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <h1>Register page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter the name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter the email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enterb the password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              placeholder="Enter the phone"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id=" Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              placeholder="Enter the Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id=" answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              placeholder="What is your Favorite sport"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
