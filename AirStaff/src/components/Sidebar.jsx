import React from "react";
import { Link } from "react-router-dom";
import "../scss/components/sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        {/* Sostituisci /src/assets/images/logo.svg col tuo logo effettivo */}
        <img src="/src/assets/images/logo.svg" alt="AirStaff Logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/staffing/dashboard">Dashboard (Staffing)</Link>
          </li>
          <li>
            <Link to="/staffing/lead">Le tue lead</Link>
          </li>
          <li>
            <Link to="/azienda/login">Login Azienda</Link>
          </li>
          <li>
            <Link to="/azienda/ricerca-talenti">Ricerca Talenti (Azienda)</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
