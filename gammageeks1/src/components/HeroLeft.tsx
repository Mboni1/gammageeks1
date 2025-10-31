import React from "react";
import Navbar from "./Navbar";

const HeroLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start text-center p-8 bg-blue-950 text-green-300 min-h-screen pt-16">
      {/* Logo */}
      <div className="border-4 border-green-300 rounded-full w-32 h-32 flex items-center justify-center text-6xl font-serif">
        γ
      </div>

      {/* Company Name */}
      <h1 className="text-2xl font-semibold mt-4">Gamma Geeks</h1>

      {/* Navbar */}
      <Navbar />

      {/* Tagline */}
      <p className="mt-80 italic text-2xl font-light max-w-lg">
        We Build Future-Proof Tech.
      </p>

      {/* Vertical Divider */}
    </div>
  );
};

export default HeroLeft;
