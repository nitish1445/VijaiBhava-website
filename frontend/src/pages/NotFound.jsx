import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1628] text-center px-6 pt-24">
      <span className="section-label">404</span>
      <h1 className="font-serif text-6xl text-white font-light mb-4">
        Page Not Found
      </h1>
      <p className="text-white/50 text-sm mb-8">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="btn-gold">
        Return Home
      </a>
    </div>
  );
};

export default NotFound;
