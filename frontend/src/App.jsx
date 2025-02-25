// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//     <ToastContainer/>
//     </>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         </Routes>
//       </Router>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//     </>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./components/ResetPassword";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/reset-password/:token" element={<ResetPassword/>} /> {/* No protection */}
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </GoogleOAuthProvider>
  );
}

export default App;
