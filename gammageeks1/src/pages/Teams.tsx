import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Vincent Musangamfura",
    role: "Director of Technology",
    img: "/images/team1.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Adolphe Ngoga",
    role: "Project Manager",
    img: "/images/team2.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Serge Rwogera",
    role: "UI/UX Designer",
    img: "/images/team3.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Jean Claude Mbonimpa",
    role: "Marketing Lead",
    img: "/images/team4.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

const Teams: React.FC = () => {
  return (
    <main
      className="min-h-full bg-black text-white 
      pl-42 sm:pl-56 md:pl-64 lg:pl-72 p-10 transition-all"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center tracking-wide">
        Meet The Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#0b1323] p-5 rounded-2xl 
            shadow-[0_0_15px_rgba(0,255,255,0.2)] w-56 hover:scale-105 transition"
          >
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-lg font-bold text-cyan-300">{member.name}</h3>
            <p className="text-gray-400 text-sm text-center mt-1">
              {member.role}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                className="hover:text-cyan-400 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                className="hover:text-cyan-400 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                className="hover:text-cyan-400 text-xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Teams;
