import React from "react";
import "../../scss/pages/staffing/loginStaffing.scss";

function LoginStaffing() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Logica di autenticazione...
  };

  return (
    <div className="login-staffing-page">
      <h2>Login Staffing</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="btn-cta">Entra</button>
      </form>
    </div>
  );
}

export default LoginStaffing;
