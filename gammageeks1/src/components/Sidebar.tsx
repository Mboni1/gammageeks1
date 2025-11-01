import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed left-0 top-0 h-full w-120
      bg-linear-to-b from-[#020617] via-[#07101f] to-[#05101f]
      flex flex-col items-center py-12
      border-r border-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.35)]"
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <div
          className="text-white text-6xl font-bold border-2 border-white-400 rounded-full 
        w-24 h-24 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.7)]"
        >
          γ
        </div>
        <h1 className="text-cyan-400 mt-4 text-2xl font-bold tracking-wide">
          GAMMA GEEKS
        </h1>
      </div>

      {/* Navigation - closer to Logo */}
      <nav className="flex flex-row justify-center items-center gap-4 mt-6 flex-wrap">
        {["Home", "Services", "Teams", "Contacts"].map((item, i) => (
          <NavLink
            key={i}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg text-sm font-medium transition
        ${
          isActive
            ? "bg-cyan-500/30 border border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.7)]"
            : "text-gray-300 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(0,255,255,0.6)] hover:scale-105"
        }`
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-center text-cyan-400 font-light text-sm mb-6">
        We Build Future-Proof Tech
      </div>
    </aside>
  );
};

export default Sidebar;
