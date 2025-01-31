import React from "react";
import "../../scss/pages/azienda/loginAzienda.scss";

function LoginAzienda() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Logica di login per azienda
  };

  return (
    <div className="login-azienda-page">
      <h2>Login Azienda</h2>
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

export default LoginAzienda;
