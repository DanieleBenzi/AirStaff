import React from "react";
import Sidebar from "./Sidebar";
import "../scss/components/layout.scss";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <header className="layout-header">
          <h1>AirStaff</h1>
        </header>
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
