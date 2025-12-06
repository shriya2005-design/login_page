import { useState } from "react";
import "./Register.css";

function Register({ goToLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-container">
      <h2>Register</h2>

      <input type="text" placeholder="User ID" />
      <input type="tel" placeholder="Phone Number" />
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />

      <div className="password-box">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁"}
        </span>
      </div>

      <button>Register</button>

      {/* ✅ ADD THIS */}
      <p>
        Already have an account?
        <span className="link" onClick={goToLogin}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
