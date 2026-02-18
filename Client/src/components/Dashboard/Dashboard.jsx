import React from "react";
import { ShieldCheck, FileText, Workflow, Users, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
// import Entitlement from "./Entitlement/Entitlement";

const Dashboard = () => {
  const cards = [
    { title: "Entitlement", icon: <ShieldCheck size={36} />, color: "from-purple-400 to-indigo-500" },
    { title: "Policy", icon: <FileText size={36} />, color: "from-blue-400 to-cyan-500" },
    { title: "Workflow", icon: <Workflow size={36} />, color: "from-green-400 to-emerald-500" },
    { title: "Spocs", icon: <Users size={36} />, color: "from-pink-400 to-rose-500" },
    { title: "Approver", icon: <UserCheck size={36} />, color: "from-yellow-400 to-orange-500" },
  ];

  return (
    <div className="w-full min-h-screen rounded-lg p-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center tracking-wide">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg bg-white overflow-hidden group cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-500"
          >
            <Link to={`/${card.title}`}>
            
            {/* Animated background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>

            {/* Icon */}
            <div className="relative z-10 mb-3 text-gray-700 group-hover:text-white transition-colors duration-500">
              {card.icon}
            </div>

            {/* Title */}
            <h2 className="relative z-10 text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
              {card.title}
            </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Dashboard;




// import React from "react";

// const Dashboard = () => {
//   const boxes = ["Entitlement", "Policy", "Workflow", "Spocs", "Approvers"];

//   return (
//     <div className="w-full min-h-screen grid grid-cols-3 gap-6 p-8 bg-gray-50">
//       {boxes.map((title, index) => (
//         <div
//           key={index}
//           className="relative flex items-center justify-center h-40 text-xl font-semibold rounded-xl overflow-hidden group bg-purple-200 shadow-md transition-transform duration-300 hover:scale-105"
//         >
//           {/* Animated background fill from bottom to top */}
//           <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-blue-400 to-purple-400 transition-all duration-500 group-hover:h-full"></div>

//           {/* Text */}
//           <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-500">
//             {title}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;

