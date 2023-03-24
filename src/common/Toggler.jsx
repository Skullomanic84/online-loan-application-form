import { useState } from "react";

const Toggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
          : "bg-white text-black"
      } h-screen flex items-center justify-center`}
    >
      <button
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
        onClick={handleDarkModeToggle}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Toggler;
