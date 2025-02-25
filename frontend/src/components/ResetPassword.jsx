// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import BASE_URL from "../config";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleReset = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await axios.post(`${BASE_URL}/auth/reset-password`, {
//         token,
//         password,
//       });
//       setMessage(res.data.message);
//       setTimeout(() => navigate("/"), 3000); // Redirect to login page after success
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Your Password</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleReset}>
//         <input
//           type="password"
//           placeholder="New Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm New Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;


import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../config";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/auth/reset-password`, { token, password });
      toast.success(res.data.message);
      setPassword("")
      setConfirmPassword("")
      setTimeout(() => navigate("/"), 2000); // Redirect after success
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Reset Your Password</h2>

        <form onSubmit={handleReset} className="mt-5">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
