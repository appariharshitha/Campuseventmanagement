import React, { useState } from "react";
import "./Register.css";
import bgImage from "../assets/bg.jpg";

function Register() {
  const [selectedRole, setSelectedRole] = useState("Student");

  return (
    <div
      className="register-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="register-card">
        <h2>Register for CampusEventHub</h2>
        <p>Create your account to start managing and joining events.</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="College" />

        <div className="role-buttons">
          <button
            className={selectedRole === "Student" ? "active" : ""}
            onClick={() => setSelectedRole("Student")}
          >
            Student
          </button>
          <button
            className={selectedRole === "Admin" ? "active" : ""}
            onClick={() => setSelectedRole("Admin")}
          >
            Admin
          </button>
          <button
            className={selectedRole === "Super Admin" ? "active" : ""}
            onClick={() => setSelectedRole("Super Admin")}
          >
            Super Admin
          </button>
        </div>

        <button className="register-btn">Register</button>
        <button className="back-link">Back to Login</button>
      </div>
    </div>
  );
}

export default Register;
