import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
	FiHome,
	FiUser,
	FiClipboard,
	FiLogIn,
	FiEdit,
	FiSettings,
	FiMessageCircle,
	FiActivity,
	FiLogOut,
	FiChevronDown,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
	const navigate = useNavigate();
	const [showProfileMenu, setShowProfileMenu] = useState(false);

	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};

	const navItemClass = ({ isActive }) =>
		`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
			isActive
				? "bg-[#2c2c38] text-primary font-semibold"
				: "text-gray-400 hover:text-white hover:bg-[#2c2c38]"
		}`;

	return (
		<div
			className={`fixed top-0 left-0 h-screen w-64 flex flex-col bg-[#1f1f27] border-r border-[#2a2a35] p-6 z-50 transition-transform duration-300 transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} md:translate-x-0 md:static md:block`}>
			{/* Header + Profile */}
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-white tracking-wide mb-6">
					QueueEase
				</h1>

				{/* Profile Icon with Hover Dropdown */}
				<div className="absolute top-6 right-6">
					<div className="relative group">
						{/* Icon Circle */}
						<div className="w-10 h-10 rounded-full bg-[#2c2c38] flex items-center justify-center cursor-pointer hover:bg-[#333347] transition">
							<FiUser className="text-white text-xl" />
						</div>

						{/* Dropdown on hover */}
						<div className="absolute right-0 mt-2 w-48 bg-[#2c2c38] border border-[#3a3a4d] rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
							<div className="px-4 py-2 text-sm text-white border-b border-[#3a3a4d]">
								John Doe
							</div>
							<button
								onClick={handleLogout}
								className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#3a3a4d] hover:text-red-300">
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Nav Links */}
			<div className="flex flex-col h-full">
				<nav className="space-y-2 text-sm flex-grow">
					<NavLink to="/" className={navItemClass}>
						<FiHome /> Home
					</NavLink>
					<NavLink to="/dashboard" className={navItemClass}>
						<FiClipboard /> Dashboard
					</NavLink>
					<NavLink to="/join-queue" className={navItemClass}>
						<FiEdit /> Join Queue
					</NavLink>
					<NavLink to="/login" className={navItemClass}>
						<FiLogIn /> Login
					</NavLink>
					<NavLink to="/signup" className={navItemClass}>
						<FiUser /> Signup
					</NavLink>
					<NavLink to="/admin" className={navItemClass}>
						<FiSettings /> Admin
					</NavLink>
					<NavLink to="/feedback" className={navItemClass}>
						<FiMessageCircle /> Feedback
					</NavLink>
					<NavLink to="/queue-status" className={navItemClass}>
						<FiActivity /> Queue Status
					</NavLink>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
