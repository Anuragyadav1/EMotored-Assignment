// import React, { useState, useEffect } from "react";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";


// export default function Settings() {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <div className="p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Settings</h2>

//       {/* Theme Toggle */}
//       <div className="mb-4 flex justify-between items-center">
//         <span>Dark Mode</span>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-2 rounded-lg transition duration-300 bg-gray-300 dark:bg-gray-700"
//         >
//           {darkMode ? (
//             <SunIcon className="h-6 w-6 text-yellow-400" />
//           ) : (
//             <MoonIcon className="h-6 w-6 text-gray-900" />
//           )}
//         </button>
//       </div>

//       {/* Save Settings Button */}
//       <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 hover:bg-blue-700">
//         Save Changes
//       </button>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem("authToken"); // Adjust based on your authentication logic
    localStorage.removeItem("user"); // If user details are stored

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      {/* Theme Toggle */}
      <div className="mb-4 flex justify-between items-center">
        <span>Dark Mode</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg transition duration-300 bg-gray-300 dark:bg-gray-700"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Save Settings Button */}
      <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 hover:bg-blue-700">
        Save Changes
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full bg-red-600 text-white p-2 rounded-lg mt-4 hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
