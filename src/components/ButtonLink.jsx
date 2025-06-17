import React from "react";

export const LightButtonLink = ({ children, url, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export const DarkButtonLink = ({ children, url, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};
