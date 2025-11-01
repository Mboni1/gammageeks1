import React from "react";

const Service: React.FC = () => {
  return (
    <main
      className="min-h-screen bg-black text-white 
    pl-48 sm:pl-56 md:pl-64 lg:pl-72 xl:pl-90 p-8 sm:p-10 md:p-14"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Our Services</h2>

      <div className="space-y-12 max-w-4xl">
        {/* Mobile App Development */}
        <section>
          <h3 className="text-2xl font-bold text-cyan-300 mb-3">
            Mobile App Development
          </h3>
          <ul className="text-gray-300 space-y-1">
            <li>Android & iOS (Native & Cross-platform)</li>
            <li>UI/UX optimized apps</li>
            <li>Scalable architecture</li>
          </ul>
        </section>

        {/* Web Portals */}
        <section>
          <h3 className="text-2xl font-bold text-cyan-300 mb-3">Web Portals</h3>
          <ul className="text-gray-300 space-y-1">
            <li>Responsive business websites</li>
            <li>Admin dashboards</li>
            <li>E-commerce platforms</li>
          </ul>
        </section>

        {/* Digital Marketing */}
        <section>
          <h3 className="text-2xl font-bold text-cyan-300 mb-3">
            Digital Marketing
          </h3>
          <ul className="text-gray-300 space-y-1">
            <li>SEO and content strategy</li>
            <li>Social media marketing</li>
            <li>Brand identity & campaigns</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Service;
