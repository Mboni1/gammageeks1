import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Contacts: React.FC = () => {
  return (
    <main
      className="min-h-screen bg-black text-white 
      pl-48 sm:pl-56 md:pl-64 lg:pl-72 p-10 transition-all"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Contact Us
      </h2>

      {/* Contact Info Container */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Rwanda Office */}
        <div className="bg-[#0b1323] p-6 rounded-2xl shadow-[0_0_15px_rgba(0,255,255,0.2)]">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            Rwanda Office
          </h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt /> Gisozi, Kigali - Rwanda
            </p>
            <p className="flex items-center gap-3">
              <FaPhone /> +250 788 000 000
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope /> @gammageeks.com
            </p>
          </div>
        </div>

        {/* Japan Office */}
        <div className="bg-[#0b1323] p-6 rounded-2xl shadow-[0_0_15px_rgba(0,255,255,0.2)]">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">
            Japan Office
          </h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt /> Hiroshima, Japan
            </p>
            <p className="flex items-center gap-3">
              <FaPhone /> +81 90 1234 5678
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope />
              @gammageeks.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-bold text-cyan-300 mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="#" className="hover:text-cyan-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-cyan-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-cyan-400">
            <FaTwitter />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
