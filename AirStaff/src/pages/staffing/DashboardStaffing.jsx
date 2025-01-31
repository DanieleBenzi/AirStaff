import React from "react";
import Layout from "../../components/Layout";
import "../../scss/pages/staffing/dashboardStaffing.scss";

function DashboardStaffing() {
  return (
    <Layout>
      <div className="dashboard-staffing">
        <h2>Dashboard - Staffing</h2>
        <p>Qui trovi le informazioni principali della tua agenzia di staffing.</p>
        {/* Aggiungi card, overview, widget come da design Figma */}
      </div>
    </Layout>
  );
}

export default DashboardStaffing;
