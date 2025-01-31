import React from "react";
import { Routes, Route } from "react-router-dom";

// Pagine STAFFING
import LoginStaffing from "../pages/staffing/LoginStaffing";
import FirstLogin from "../pages/staffing/FirstLogin";
import DashboardStaffing from "../pages/staffing/DashboardStaffing";
import LeTueLead from "../pages/staffing/LeTueLead";
import LeTueLeadSearchActive from "../pages/staffing/LeTueLeadSearchActive";
import LeTueLeadPopup from "../pages/staffing/LeTueLeadPopup";
import LeTueLeadLeadAccettate from "../pages/staffing/LeTueLeadLeadAccettate";
import LeTueLeadNote from "../pages/staffing/LeTueLeadNote";
import IlMioAccount from "../pages/staffing/IlMioAccount";

// Pagine AZIENDA
import LoginAzienda from "../pages/azienda/LoginAzienda";
import RegistrazioneAziendaStep1 from "../pages/azienda/RegistrazioneAziendaStep1";
import RegistrazioneAziendaStep2 from "../pages/azienda/RegistrazioneAziendaStep2";
import RicercaTalenti from "../pages/azienda/RicercaTalenti";
import RicercaTalentiAttiva from "../pages/azienda/RicercaTalentiAttiva";
import RicercaTalentiFiltri from "../pages/azienda/RicercaTalentiFiltri";
import RicercaTalentiStorico from "../pages/azienda/RicercaTalentiStorico";
import RicercaTalentiContattaStaffing from "../pages/azienda/RicercaTalentiContattaStaffing";
import RicercaTalentiGuidata1 from "../pages/azienda/RicercaTalentiGuidata1";
import RicercaTalentiGuidata2 from "../pages/azienda/RicercaTalentiGuidata2";
import IMieiDocumenti from "../pages/azienda/IMieiDocumenti";

function AppRouter() {
  return (
    <Routes>
      {/* STAFFING */}
      <Route path="/staffing/login" element={<LoginStaffing />} />
      <Route path="/staffing/first-login" element={<FirstLogin />} />
      <Route path="/staffing/dashboard" element={<DashboardStaffing />} />
      <Route path="/staffing/lead" element={<LeTueLead />} />
      <Route path="/staffing/lead-search" element={<LeTueLeadSearchActive />} />
      <Route path="/staffing/lead-popup" element={<LeTueLeadPopup />} />
      <Route path="/staffing/lead-accettate" element={<LeTueLeadLeadAccettate />} />
      <Route path="/staffing/lead-note" element={<LeTueLeadNote />} />
      <Route path="/staffing/account" element={<IlMioAccount />} />

      {/* AZIENDA */}
      <Route path="/azienda/login" element={<LoginAzienda />} />
      <Route path="/azienda/registrazione-1" element={<RegistrazioneAziendaStep1 />} />
      <Route path="/azienda/registrazione-2" element={<RegistrazioneAziendaStep2 />} />
      <Route path="/azienda/ricerca-talenti" element={<RicercaTalenti />} />
      <Route path="/azienda/ricerca-talenti-attiva" element={<RicercaTalentiAttiva />} />
      <Route path="/azienda/ricerca-talenti-filtri" element={<RicercaTalentiFiltri />} />
      <Route path="/azienda/ricerca-talenti-storico" element={<RicercaTalentiStorico />} />
      <Route path="/azienda/contatta-staffing" element={<RicercaTalentiContattaStaffing />} />
      <Route path="/azienda/ricerca-guidata-1" element={<RicercaTalentiGuidata1 />} />
      <Route path="/azienda/ricerca-guidata-2" element={<RicercaTalentiGuidata2 />} />
      <Route path="/azienda/documenti" element={<IMieiDocumenti />} />

      {/* Rotta di fallback */}
      <Route path="*" element={<div>404 - Pagina non trovata</div>} />
    </Routes>
  );
}

export default AppRouter;
