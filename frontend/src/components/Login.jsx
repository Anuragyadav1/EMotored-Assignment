// import React, { useState } from "react";
// import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

// const Login = () => {
//   const [isRegister, setIsRegister] = useState(false);

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Section */}
//       <div className="hidden md:flex flex-col justify-between bg-blue-600 text-white w-1/2 p-10 relative custom-shape">
//         <div className="absolute top-10 left-10">
//           <img src="/logo.png" alt="Logo" className="w-16 h-16" />
//         </div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
//           BASE
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 left-28">
//           <FaGithub className="text-xl" />
//           <FaTwitter className="text-xl" />
//           <FaLinkedin className="text-xl" />
//           <FaDiscord className="text-xl" />
//         </div>
//       </div>
      
//       {/* Right Section */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
//         {isRegister ? (
//           <>
//             <h2 className="text-3xl font-semibold mb-4">Create Account</h2>
//             <p className="text-gray-500 mb-6">Sign up for a new account</p>
//           </>
//         ) : (
//           <>
//             <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
//             <p className="text-gray-500 mb-6">Sign in to your account</p>
//           </>
//         )}

//         {/* OAuth Buttons */}
//         <div className="flex gap-4 mb-6">
//           <button className="border p-2 rounded-md flex items-center gap-2">
//             <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
//             {isRegister ? "Sign up with Google" : "Sign in with Google"}
//           </button>
//           <button className="border p-2 rounded-md flex items-center gap-2">
//             <img src="/apple-icon.svg" alt="Apple" className="w-5 h-5" />
//             {isRegister ? "Sign up with Apple" : "Sign in with Apple"}
//           </button>
//         </div>

//         {/* Form */}
//         <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
//           {isRegister && (
//             <>
//               <label className="block text-sm font-medium">Full Name</label>
//               <input type="text" className="w-full p-2 border rounded mb-4" placeholder="John Doe" />
//             </>
//           )}
//           <label className="block text-sm font-medium">Email address</label>
//           <input type="email" className="w-full p-2 border rounded mb-4" placeholder="johndoe@gmail.com" />
          
//           <label className="block text-sm font-medium">Password</label>
//           <input type="password" className="w-full p-2 border rounded mb-4" placeholder="••••••••" />
          
//           {!isRegister && (
//             <a href="#" className="text-blue-600 text-sm mb-4 inline-block">Forgot password?</a>
//           )}
          
//           <button className="w-full bg-blue-600 text-white p-2 rounded-md">
//             {isRegister ? "Sign Up" : "Sign In"}
//           </button>
//         </div>
        
//         <p className="text-sm mt-4">
//           {isRegister ? (
//             <>Already have an account? <button className="text-blue-600" onClick={() => setIsRegister(false)}>Sign in</button></>
//           ) : (
//             <>Don't have an account? <button className="text-blue-600" onClick={() => setIsRegister(true)}>Register here</button></>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
// import { auth, provider, signInWithPopup } from "../firebaseConfig";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
//       toast.success("Login Successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error("Google Sign-In Failed!");
//     }
//   };

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Section */}
//       <div className="hidden md:flex flex-col justify-between bg-blue-600 text-white w-1/2 p-10 relative custom-shape">
//         <div className="absolute top-10 left-10">
//           <img src="/logo.png" alt="Logo" className="w-16 h-16" />
//         </div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
//           BASE
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 left-28">
//           <FaGithub className="text-xl" />
//           <FaTwitter className="text-xl" />
//           <FaLinkedin className="text-xl" />
//           <FaDiscord className="text-xl" />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
//         <h2 className="text-3xl font-semibold mb-4">{isRegister ? "Create Account" : "Sign In"}</h2>
//         <p className="text-gray-500 mb-6">{isRegister ? "Sign up for a new account" : "Sign in to your account"}</p>

//         {/* OAuth Buttons */}
//         <div className="flex gap-4 mb-6">
//           <button onClick={handleGoogleSignIn} className="border p-2 rounded-md flex items-center gap-2">
//             <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
//             {isRegister ? "Sign up with Google" : "Sign in with Google"}
//           </button>
//         </div>

//         <p className="text-sm mt-4">
//           {isRegister ? (
//             <>Already have an account? <button className="text-blue-600" onClick={() => setIsRegister(false)}>Sign in</button></>
//           ) : (
//             <>Don't have an account? <button className="text-blue-600" onClick={() => setIsRegister(true)}>Register here</button></>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
//           headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
//         });

//         localStorage.setItem("user", JSON.stringify(userInfo.data));
//         toast.success("Login Successful!");
//         navigate("/dashboard");
//       } catch (error) {
//         toast.error("Failed to fetch user info!");
//       }
//     },
//     onError: () => toast.error("Google Sign-In Failed!"),
//   });

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Section */}
//       <div className="hidden md:flex flex-col justify-between bg-blue-600 text-white w-1/2 p-10 relative custom-shape">
//         <div className="absolute top-10 left-10">
//           <img src="/logo.png" alt="Logo" className="w-16 h-16" />
//         </div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
//           BASE
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 left-28">
//           <FaGithub className="text-xl" />
//           <FaTwitter className="text-xl" />
//           <FaLinkedin className="text-xl" />
//           <FaDiscord className="text-xl" />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
//         <h2 className="text-3xl font-semibold mb-4">{isRegister ? "Create Account" : "Sign In"}</h2>
//         <p className="text-gray-500 mb-6">{isRegister ? "Sign up for a new account" : "Sign in to your account"}</p>

//         {/* OAuth Buttons */}
//         <div className="flex gap-4 mb-6">
//           <button onClick={handleGoogleSignIn} className="border p-2 rounded-md flex items-center gap-2">
//             <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
//             {isRegister ? "Sign up with Google" : "Sign in with Google"}
//           </button>
//         </div>

//         <p className="text-sm mt-4">
//           {isRegister ? (
//             <>Already have an account? <button className="text-blue-600" onClick={() => setIsRegister(false)}>Sign in</button></>
//           ) : (
//             <>Don't have an account? <button className="text-blue-600" onClick={() => setIsRegister(true)}>Register here</button></>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        localStorage.setItem("user", JSON.stringify(userInfo.data));
        toast.success("Login Successful!");
        navigate("/dashboard");
      } catch (error) {
        toast.error("Failed to fetch user info!");
      }
    },
    onError: () => toast.error("Google Sign-In Failed!"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button and show loading state

    try {
      const endpoint = isRegister ? `${BASE_URL}/auth/register` : `${BASE_URL}/auth/login`;
      const response = await axios.post(endpoint, formData);
  
      if (!isRegister) {
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store only the user object
      }
  
      toast.success(isRegister ? "Account Created!" : "Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Authentication Failed!");
    }
    finally{
      setLoading(false); // Re-enable button after request completes
    }
  };
  

  return (
    <div className="flex h-screen w-full">
      <div className="hidden md:flex flex-col justify-between bg-blue-600 text-white w-1/2 p-10 relative custom-shape">
        <div className="absolute top-10 left-10">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          BASE
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 left-28">
          <FaGithub className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaLinkedin className="text-xl" />
          <FaDiscord className="text-xl" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-semibold mb-4">{isRegister ? "Create Account" : "Sign In"}</h2>
        <p className="text-gray-500 mb-6">{isRegister ? "Sign up for a new account" : "Sign in to your account"}</p>
        <div className="flex gap-4 mb-6">
          <button onClick={handleGoogleSignIn} className="border p-2 rounded-md flex items-center gap-2">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            {isRegister ? "Sign up with Google" : "Sign in with Google"}
          </button>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
          {isRegister && (
            <>
              <label className="block text-sm font-medium">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="John Doe" required />
            </>
          )}
          <label className="block text-sm font-medium">Email address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="johndoe@gmail.com" required />
          <label className="block text-sm font-medium">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="••••••••" required />
          {!isRegister && <a href="#" className="text-blue-600 text-sm mb-4 inline-block">Forgot password?</a>}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md"  disabled={loading}>
             {loading ? (isRegister ? "Creating Account..." : "Signing In...") : (isRegister ? "Sign Up" : "Sign In")}
          </button>
        </form>
        <p className="text-sm mt-4">
          {isRegister ? (
            <>Already have an account? <button className="text-blue-600" onClick={() => setIsRegister(false)}>Sign in</button></>
          ) : (
            <>Don't have an account? <button className="text-blue-600" onClick={() => setIsRegister(true)}>Register here</button></>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
