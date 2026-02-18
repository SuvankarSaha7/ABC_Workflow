import React from "react";
import { Link } from "react-router-dom";
import Itclogo from "../../img/ITC_logo.jpg";
import { LogIn, LogOut, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-blue-200 shadow-md mx-6 my-4 rounded-lg px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-300  hover:scale-[1.01] hover:shadow-lg ">
      {/* Left Section: Logo + Brand */}
      <div className="flex items-center space-x-3">
        <img
          src={Itclogo}
          alt="ITC Logo"
          className="w-10 h-10 rounded-full border border-gray-200"
        />
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">ITC</h1>
      </div>

      {/* Right Section: Links */}
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-blue-600 transition-all duration-200"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/login"
          className="flex items-center gap-2 hover:text-blue-600 transition-all duration-200"
        >
          <LogIn size={20} />
          Login
        </Link>

        <Link
          to="/logout"
          className="flex items-center gap-2 hover:text-blue-600 transition-all duration-200"
        >
          <LogOut size={20} />
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
