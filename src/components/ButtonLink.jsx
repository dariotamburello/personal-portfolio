import React from "react";

export const LightButtonLink = ({ children, url, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors ${className}`}
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

export const LightBlueButtonLink = ({ children, url, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-blue-500 border-2 border-blue-500 text-white rounded-lg hover:bg-blue-400 hover:border-blue-400 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export const TransparentLightBlueButtonLink = ({
  children,
  url,
  className = "",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-white border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-200/70 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};
