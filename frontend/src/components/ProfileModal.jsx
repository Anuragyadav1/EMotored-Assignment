// import React, { useState } from "react";
// import { Dialog, Tab } from "@headlessui/react";

// const ProfileModal = ({ isOpen, setIsOpen }) => {
//   const [tabIndex, setTabIndex] = useState(0);
//   // const [isOpen, setIsOpen] = useState(false);

//   return (
  
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded-lg w-full max-w-md">
//       <h2 className="text-lg font-bold mb-4">Add New Profile</h2>
//       <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
//         <Tab.List className="flex border-b">
//           <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Basic</Tab>
//           <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Social</Tab>
//           <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Contact</Tab>
//         </Tab.List>
//         <Tab.Panels className="mt-4">
//           <Tab.Panel>
//             <input className="w-full p-2 border rounded mb-3" placeholder="Enter Name" />
//             <input className="w-full p-2 border rounded mb-3" placeholder="Enter Email" />
//             <input className="w-full p-2 border rounded" placeholder="Enter Phone" />
//             <button onClick={() => setTabIndex(1)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Next</button>
//           </Tab.Panel>
//           <Tab.Panel>
//             <input className="w-full p-2 border rounded mb-3" placeholder="Instagram Link (Optional)" />
//             <input className="w-full p-2 border rounded" placeholder="YouTube Link (Optional)" />
//             <div className="flex justify-between mt-4">
//               <button onClick={() => setTabIndex(0)} className="px-4 py-2 bg-gray-300 rounded">Back</button>
//               <button onClick={() => setTabIndex(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
//             </div>
//           </Tab.Panel>
//           <Tab.Panel>
//             <input className="w-full p-2 border rounded mb-3" placeholder="Address" />
//             <input className="w-full p-2 border rounded mb-3" placeholder="City" />
//             <input className="w-full p-2 border rounded" placeholder="Zip Code" />
//             <button onClick={() => setIsOpen(false)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Done</button>
//           </Tab.Panel>
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   </Dialog>
//   );
// };

// export default ProfileModal;


// import React, { useState } from "react";
// import { Dialog, Tab } from "@headlessui/react";
// import axios from "axios";

// const ProfileModal = ({ isOpen, setIsOpen }) => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     instagram: "",
//     youtube: "",
//     address: "",
//     city: "",
//     zipCode: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/profiles", formData);
//       console.log("Profile added:", response.data);
//       setIsOpen(false);
//     } catch (error) {
//       console.error("Error adding profile:", error);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg w-full max-w-md">
//         <h2 className="text-lg font-bold mb-4">Add New Profile</h2>
//         <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
//           <Tab.List className="flex border-b">
//             <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Basic</Tab>
//             <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Social</Tab>
//             <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Contact</Tab>
//           </Tab.List>
//           <Tab.Panels className="mt-4">
//             <Tab.Panel>
//               <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Enter Name" />
//               <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Enter Email" />
//               <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter Phone" />
//               <button onClick={() => setTabIndex(1)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Next</button>
//             </Tab.Panel>
//             <Tab.Panel>
//               <input name="instagram" value={formData.instagram} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Instagram Link (Optional)" />
//               <input name="youtube" value={formData.youtube} onChange={handleChange} className="w-full p-2 border rounded" placeholder="YouTube Link (Optional)" />
//               <div className="flex justify-between mt-4">
//                 <button onClick={() => setTabIndex(0)} className="px-4 py-2 bg-gray-300 rounded">Back</button>
//                 <button onClick={() => setTabIndex(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
//               </div>
//             </Tab.Panel>
//             <Tab.Panel>
//               <input name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Address" />
//               <input name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="City" />
//               <input name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Zip Code" />
//               <button onClick={handleSubmit} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Done</button>
//             </Tab.Panel>
//           </Tab.Panels>
//         </Tab.Group>
//       </div>
//     </Dialog>
//   );
// };

// export default ProfileModal;









// import React, { useState } from "react";
// import { Dialog, Tab } from "@headlessui/react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import BASE_URL from "../config";


// const ProfileModal = ({ isOpen, setIsOpen }) => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     instagram: "",
//     youtube: "",
//     address: "",
//     city: "",
//     zipCode: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     setError(""); // Reset previous errors
//     try {
//       const response = await axios.post(`${BASE_URL}/add`, formData);
//       // alert("Profile added successfully!");
//       toast.success("Profile added successfully!", { position: "top-right" });
//       setIsOpen(false);
//       setFormData({ name: "", email: "", phone: "", instagram: "", youtube: "", address: "", city: "", zipCode: "" });
//     } catch (error) {
//       console.error("Error adding profile:", error.response?.data?.message || error.message);
//       setError(error.response?.data?.message || "Failed to add profile.");
//     }
//   };

//   return (
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg w-full max-w-md">
//         <h2 className="text-lg font-bold mb-4">Add New Profile</h2>
//         {error && <p className="text-red-500 mb-3">{error}</p>}
//         <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
//           <Tab.List className="flex border-b">
//             <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Basic</Tab>
//             <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Social</Tab>
//             <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Contact</Tab>
//           </Tab.List>
//           <Tab.Panels className="mt-4">
//             <Tab.Panel>
//               <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Enter Name" />
//               <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Enter Email" />
//               <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter Phone" />
//               <button onClick={() => setTabIndex(1)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Next</button>
//             </Tab.Panel>
//             <Tab.Panel>
//               <input name="instagram" value={formData.instagram} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Instagram Link" />
//               <input name="youtube" value={formData.youtube} onChange={handleChange} className="w-full p-2 border rounded" placeholder="YouTube Link" />
//               <div className="flex justify-between mt-4">
//                 <button onClick={() => setTabIndex(0)} className="px-4 py-2 bg-gray-300 rounded">Back</button>
//                 <button onClick={() => setTabIndex(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
//               </div>
//             </Tab.Panel>
//             <Tab.Panel>
//               <input name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Address" />
//               <input name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="City" />
//               <input name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Zip Code" />
//               <button onClick={handleSubmit} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Submit</button>
//             </Tab.Panel>
//           </Tab.Panels>
//         </Tab.Group>
//       </div>
//     </Dialog>
//   );
// };

// export default ProfileModal;







import React, { useState } from "react";
import { Dialog, Tab } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../config";

const ProfileModal = ({ isOpen, setIsOpen }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError(""); // Reset previous errors
    try {
      const response = await axios.post(`${BASE_URL}/add`, formData);
      toast.success("Profile added successfully!", { position: "top-right" });
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        youtube: "",
        address: "",
        city: "",
        zipCode: "",
      });
    } catch (error) {
      console.error("Error adding profile:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Failed to add profile.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 p-1 text-gray-600 hover:text-gray-900">
          <XMarkIcon className="h-5 w-5" />
        </button>

        <h2 className="text-lg font-bold mb-4 text-center">Add New Profile</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        
        <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <Tab.List className="flex border-b">
            <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Basic</Tab>
            <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Social</Tab>
            <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Contact</Tab>
          </Tab.List>
          
          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Enter Name" />
              <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Enter Email" />
              <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter Phone" />
              <button onClick={() => setTabIndex(1)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Next</button>
            </Tab.Panel>
            
            <Tab.Panel>
              <input name="instagram" value={formData.instagram} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Instagram Link" />
              <input name="youtube" value={formData.youtube} onChange={handleChange} className="w-full p-2 border rounded" placeholder="YouTube Link" />
              <div className="flex justify-between mt-4">
                <button onClick={() => setTabIndex(0)} className="px-4 py-2 bg-gray-300 rounded">Back</button>
                <button onClick={() => setTabIndex(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
              </div>
            </Tab.Panel>
            
            <Tab.Panel>
              <input name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="Address" />
              <input name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded mb-3" placeholder="City" />
              <input name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Zip Code" />
              <button onClick={handleSubmit} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Submit</button>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Dialog>
  );
};

export default ProfileModal;



