import React from "react";
import MissionCard from "../components/MissionCard";

const Home: React.FC = () => {
  return (
    <main
      className="
    min-h-screen w-full bg-black text-white
    pl-98 sm:pl-96 md:pl-64 lg:pl-92 
    flex flex-col
  "
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center">
        Welcome to Gamma Geeks
      </h2>

      <div className="bg-gray-900 p-6 rounded-md text-gray-300 italic border-l-4 border-cyan-400 shadow-md mb-12 max-w-4xl mx-auto mt-3">
        "GammaGeeks is a community of passionate tech enthusiasts creating
        high-end mobile apps, web portals, and digital marketing solutions."
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-cyan-400 mt-12">
        <MissionCard
          title="Our Mission"
          content="We are dedicated to building innovative, scalable, and future-proof
          technology solutions that empower businesses to thrive in the digital age."
        />
        <MissionCard
          title="Our Vision"
          content="To become the leading technology partner for businesses seeking cutting-edge
          solutions, exceptional service, and transformative digital experiences."
        />
        <MissionCard
          title="Our Values"
          content="Innovation, integrity, collaboration, and excellence drive everything we do.
          We believe in pushing boundaries and delivering exceptional results."
        />
      </div>
    </main>
  );
};

export default Home;
