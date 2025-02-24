// import React, { useState } from "react";
// import { Dialog, Tab } from "@headlessui/react";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import {
//   Menu,
//   X,
//   Bell,
//   Search,
//   User,
//   LayoutDashboard,
//   CreditCard,
//   Calendar,
//   Users,
//   Settings,
// } from "lucide-react";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

// export default function Dashboard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [tabIndex, setTabIndex] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const barData = {
//     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//     datasets: [
//       { label: "User", data: [400, 350, 200, 300], backgroundColor: "#22c55e" },
//       { label: "Guest", data: [300, 400, 150, 280], backgroundColor: "#ef4444" },
//     ],
//   };

//   const pieData = {
//     labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
//     datasets: [{ data: [55, 31, 14], backgroundColor: ["#16a34a", "#facc15", "#ef4444"] }],
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className={`fixed md:relative z-50 w-64 mb-8 bg-blue-600 text-white p-5 h-full md:h-auto transition-transform 
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//     <div className="flex flex-col h-full">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Board.</h2>
//         <X className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(false)} />
//       </div>
//       <nav className="mt-5 space-y-8 flex-grow">
//         <p className="flex items-center gap-2 font-semibold"><LayoutDashboard /> Dashboard</p>
//         <p className="flex items-center gap-2"><CreditCard /> Transactions</p>
//         <p className="flex items-center gap-2"><Calendar /> Schedules</p>
//         <p className="flex items-center gap-2"><Users /> Users</p>
//         <p className="flex items-center gap-2"><Settings /> Settings</p>
//       </nav>
//     </div>
//   </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center">
//           <Menu className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(true)} />
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//               <input type="text" className="pl-10 pr-3 py-2 border rounded-lg w-48 md:w-64" placeholder="Search..." />
//             </div>
//             <Bell className="cursor-pointer" />
//             <User className="cursor-pointer" />
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
//           {["Total Revenues", "Total Transactions", "Total Likes", "Total Users"].map((item, index) => (
//             <div key={index} className="p-4 bg-white rounded-lg shadow text-center">
//               <p className="text-gray-500">{item}</p>
//               <p className="text-xl font-bold">{index === 0 ? "$2,129,430" : index === 1 ? "1,520" : "9,721"}</p>
//             </div>
//           ))}
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div className="p-6 bg-white rounded-lg shadow">
//             <h3 className="mb-4 text-lg font-bold">Activities</h3>
//             <Bar data={barData} />
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow">
//             <h3 className="mb-4 text-lg font-bold">Top Products</h3>
//             <Pie data={pieData} />
//           </div>
//         </div>

//         {/* Add Profile Button */}
//         <div className="mt-6">
//           <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add Profile</button>
//         </div>
//       </main>

//       {/* Add Profile Modal */}
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg w-full max-w-md">
//           <h2 className="text-lg font-bold mb-4">Add New Profile</h2>
//           <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
//             <Tab.List className="flex border-b">
//               <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Basic</Tab>
//               <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Social</Tab>
//               <Tab className={({ selected }) => `w-1/3 p-2 ${selected ? "border-b-2 border-blue-600" : "text-gray-500"}`}>Contact</Tab>
//             </Tab.List>
//             <Tab.Panels className="mt-4">
//               <Tab.Panel>
//                 <input className="w-full p-2 border rounded mb-3" placeholder="Enter Name" />
//                 <input className="w-full p-2 border rounded mb-3" placeholder="Enter Email" />
//                 <input className="w-full p-2 border rounded" placeholder="Enter Phone" />
//                 <button onClick={() => setTabIndex(1)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Next</button>
//               </Tab.Panel>
//               <Tab.Panel>
//                 <input className="w-full p-2 border rounded mb-3" placeholder="Instagram Link (Optional)" />
//                 <input className="w-full p-2 border rounded" placeholder="YouTube Link (Optional)" />
//                 <div className="flex justify-between mt-4">
//                   <button onClick={() => setTabIndex(0)} className="px-4 py-2 bg-gray-300 rounded">Back</button>
//                   <button onClick={() => setTabIndex(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
//                 </div>
//               </Tab.Panel>
//               <Tab.Panel>
//                 <input className="w-full p-2 border rounded mb-3" placeholder="Address" />
//                 <input className="w-full p-2 border rounded mb-3" placeholder="City" />
//                 <input className="w-full p-2 border rounded" placeholder="Zip Code" />
//                 <button onClick={() => setIsOpen(false)} className="mt-4 w-full bg-blue-600 text-white p-2 rounded">Done</button>
//               </Tab.Panel>
//             </Tab.Panels>
//           </Tab.Group>
//         </div>
//       </Dialog>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Dialog, Tab } from "@headlessui/react";
import { Bar, Pie } from "react-chartjs-2";
// import { auth, signOut } from "../firebaseConfig";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Menu,
  X,
  Bell,
  Search,
  User,
  LayoutDashboard,
  CreditCard,
  Calendar,
  Users,
  Settings,
} from "lucide-react";
import Transactions from "./Transactions";
import Schedules from "./Schedules";
import UsersPage from "./UsersPage";
import SettingsPage from "./SettingsPage";
import ProfileModal from "./ProfileModal";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [userName, setUserName] = useState(""); // State for user name

  useEffect(() => {
    // Retrieve user info from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.given_name) {
      setUserName(user.given_name);
    }
  }, []);

  const sections = [
    { name: "Dashboard", icon: <LayoutDashboard /> },
    { name: "Transactions", icon: <CreditCard /> },
    { name: "Schedules", icon: <Calendar /> },
    { name: "Users", icon: <Users /> },
    { name: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside className={`fixed md:relative z-50 w-64 bg-blue-600 text-white p-5 h-full transition-transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Board.</h2>
            <X className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(false)} />
          </div>
          <nav className="mt-5 space-y-4">
            {sections.map((section) => (
              <p key={section.name}
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${activeSection === section.name ? "bg-blue-800" : ""}`}
                onClick={() => setActiveSection(section.name)}
              >
                {section.icon} {section.name}
              </p>
            ))}
          </nav>
        </div>
      </aside> */}
      <aside className={`fixed md:relative z-50 w-64 mb-8 bg-blue-600 text-white p-5 h-full md:h-auto transition-transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Board.</h2>
        <X className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(false)} />
      </div>
      <nav className="mt-5 space-y-8 flex-grow">
      {sections.map((section) => (
  <p
    key={section.name}
    className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
      activeSection === section.name ? "bg-blue-800" : ""
    }`}
    onClick={() => setActiveSection(section.name)}
  >
    {section.icon} {section.name}
  </p>
))}

      </nav>
    </div>
  </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <Menu className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(true)} />
          <h1 className="text-2xl font-bold mb-8">{activeSection}</h1>
          <div className="flex items-center gap-4">
            <Search className="text-gray-500" />
            <Bell className="cursor-pointer" />
            {/* <User className="cursor-pointer" /> */}
            {/* Display User Name Instead of Icon */}
            <span className="font-medium text-gray-700 cursor-pointer">{userName || "User"}</span>
          </div>
        </div>

        {/* Dynamic Content Rendering */}
        {activeSection === "Dashboard" && <DashboardContent />}
        {activeSection === "Transactions" && <Transactions />}
        {activeSection === "Schedules" && <Schedules />}
        {activeSection === "Users" && <UsersPage />}
        {activeSection === "Settings" && <SettingsPage />}
      </main>
    </div>
  );
}

function DashboardContent() {
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      { label: "User", data: [400, 350, 200, 300], backgroundColor: "#22c55e" },
      { label: "Guest", data: [300, 400, 150, 280], backgroundColor: "#ef4444" },
    ],
  };

  const pieData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [{ data: [55, 31, 14], backgroundColor: ["#16a34a", "#facc15", "#ef4444"] }],
  };
    const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {["Total Revenues", "Total Transactions", "Total Likes", "Total Users"].map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow text-center">
            <p className="text-gray-500">{item}</p>
            <p className="text-xl font-bold">{index === 0 ? "$2,129,430" : index === 1 ? "1,520" : "9,721"}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-lg font-bold">Activities</h3>
          <Bar data={barData} />
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-lg font-bold">Top Products</h3>
          <Pie data={pieData} />
        </div>
        <div className="mt-2 ml-2">
           <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add Profile</button>
         </div>
      </div>
      {/* Pass isOpen and setIsOpen to ProfileModal */}
    <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </>
  );
}

