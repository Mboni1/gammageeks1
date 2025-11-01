import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Contacts from "./pages/Contacts";

const App: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <main className="ml-64 p-10 w-full text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Navigate to="/services" />} />
          <Route path="/services" element={<Services />} />

          <Route path="/" element={<Navigate to="/teams" />} />
          <Route path="/teams" element={<Teams />} />

          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
