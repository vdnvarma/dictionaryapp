import React from "react";
import { FaHome } from "react-icons/fa";

function HomeButton({ resetApp }) {
  return (
    <button
      onClick={resetApp}  
      className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300"
    >
      <FaHome />
    </button>
  );
}

export default HomeButton;
