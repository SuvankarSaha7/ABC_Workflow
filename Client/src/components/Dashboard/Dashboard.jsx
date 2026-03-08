import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

const Dashboard = () => {
  const colors = [
    { id: 1,  border: "border-l-blue-500",    text: "text-blue-500",    bg: "bg-blue-50"    },
    { id: 2,  border: "border-l-indigo-500",  text: "text-indigo-500",  bg: "bg-indigo-50"  },
    { id: 3,  border: "border-l-violet-500",  text: "text-violet-500",  bg: "bg-violet-50"  },
    { id: 4,  border: "border-l-teal-500",    text: "text-teal-500",    bg: "bg-teal-50"    },
    { id: 5,  border: "border-l-cyan-500",    text: "text-cyan-500",    bg: "bg-cyan-50"    },
    { id: 6,  border: "border-l-sky-500",     text: "text-sky-500",     bg: "bg-sky-50"     },
    { id: 7,  border: "border-l-emerald-500", text: "text-emerald-500", bg: "bg-emerald-50" },
    { id: 8,  border: "border-l-slate-500",   text: "text-slate-500",   bg: "bg-slate-50"   },
    { id: 9,  border: "border-l-purple-500",  text: "text-purple-500",  bg: "bg-purple-50"  },
    { id: 10, border: "border-l-blue-700",    text: "text-blue-700",    bg: "bg-blue-50"    },
    { id: 11, border: "border-l-teal-700",    text: "text-teal-700",    bg: "bg-teal-50"    },
    { id: 12, border: "border-l-indigo-700",  text: "text-indigo-700",  bg: "bg-indigo-50"  },
  ]

  const [divisions, setDivisons] = useState([]);
  const [loading, setLoading] = useState(true); // ← add this
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/divisions")
      .then((res) => {
        if (res.status !== 200) throw new Error("Failed to Fetch Data");
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setDivisons(data);
          setLoading(false);
        }, 3000);
        console.log(data);
      })
      .catch((err) => {
        setTimeout(() => {
          setError(err.message);
          setLoading(false);
        }, 3000);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader />
      </div>
    );

  if (error) return <p style={{ color: "red" }}>❌ Error: {error}</p>;

  return (
    <div className="w-full min-h-screen bg-gray-50 px-5">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-xl text-gray-400 mt-1 tracking-widest uppercase">
          All Divisions
        </h1>

        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-indigo-500" />
      </div>

      {/* Division Cards Grid */}

      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto">
        {divisions.map((division, index) => (
          <Link to={`/${division.division_name}`} key={division.id}>
            {/* the above data access, we accessing only the one division instead of multiple divisions */}
            <div className={`group relative ${colors[index %12].bg}  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center justify-center gap-2 border ${colors[index %12].border} cursor-pointer`}>
              <div className="w-12 h-12 flex items-center justify-center">
                <span className={` ${colors[index%12].text}group-hover:text-gray-100 font-bold text-lg transition-colors duration-300`}>
                  {division.division_name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {divisions.length === 0 && (
        <div className="text-center mt-20 text-gray-400">
          <p className="text-5xl mb-4">📂</p>
          <p className="text-lg font-medium">No divisions found</p>
          <p className="text-sm mt-1">Seed your database first</p>
        </div>
      )}
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
