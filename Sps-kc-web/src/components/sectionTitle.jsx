import React from "react";

/**
 * SectionTitle - A standard section title component using Tailwind CSS.
 * @param {string} title - The main title text.
 * @param {string} [subtitle] - Optional subtitle or highlight text.
 * @param {string} [className] - Optional extra classes for the wrapper.
 */
export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center my-8 ${className}`}>
      {subtitle && (
        <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-widest mb-2">
          {subtitle}
        </div>
      )}
      <h1
        className="text-2xl capitalize md:text-5xl font-bold text-gray-900 mb-2"
        style={{
          textAlign: "center",
          color: "#1a237e",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "4rem",
          textTransform: "uppercase",
          // letterSpacing: "2px",
          textShadow: "2px 2px 4px rgba(70, 130, 180, 0.4)",
        }}
      >
        {title}
      </h1>
      {/* <div className="w-16 h-1 mx-auto bg-blue-600 rounded mb-2" /> */}
    </div>
  );
}
