import React from "react";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

const App: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default App;
