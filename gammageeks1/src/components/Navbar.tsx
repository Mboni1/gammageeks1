import React from "react";

const Navbar: React.FC = () => {
  const links = ["Home", "Services", "Teams", "Contact"];
  return (
    <nav className="flex flex-wrap justify-center gap-4 mt-6">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="px-4 py-2 border border-black rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
