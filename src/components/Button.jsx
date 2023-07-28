import React from "react";

const button = {};
// margin border-color border-width bg-color-400 text-color-300 p padding
const Button = ({ children, rounded, outlined, variation }) => {
  return (
    <button
      type="button"
      className="px-3 py-1.5 border border-blue-600 bg-fuchsia-400 text-white rounded-md drop-shadow-lx"
    >
      {children}
    </button>
  );
};

export default Button;
