import React from "react";

const HeroRight: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full md:w-1/2 p-8 text-center mt-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold italic text-blue-950 mb-8">
        Welcome to Gamma Geeks
      </h1>

      {/* Description in 2 lines */}
      <p className="text-lg italic max-w-lg text-black border-2 border-blue-950 bg-blue-50 rounded-2xl p-6 shadow-lg leading-relaxed">
        "GammaGeeks is a community of passionate tech enthusiasts creating
        high-end
        <br /> mobile apps, web portals, and digital marketing solutions."
      </p>
    </div>
  );
};

export default HeroRight;
