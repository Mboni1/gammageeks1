import React from "react";

interface Props {
  title: string;
  content: string;
}

const MissionCard: React.FC<Props> = ({ title, content }) => (
  <div
    className="bg-[#07101f] p-6 rounded-xl border border-[#0b2c3b] 
  hover:border-neonBlue hover:shadow-neon transition duration-300"
  >
    <h3 className="text-neonBlue text-lg font-semibold mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{content}</p>
  </div>
);

export default MissionCard;
