import { useState } from "react";
import "./Login.css";

function Login({ goToRegister }) {
 
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h2>Welcome Back 👋</h2>

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

      <button>Login</button>

      <p>
  Don’t have an account?
  <span className="link" onClick={goToRegister}>
    Register
  </span>
</p>

    </div>
  );
}

export default Login;
