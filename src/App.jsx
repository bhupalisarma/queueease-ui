import React, { useState } from "react";
import "./index.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";

import Sidebar from "./Sidebar";
import { Home } from "./Home";
import { JoinQueue } from "./JoinQueue";
import { QueueStatus } from "./QueueStatus";
import { Dashboard } from "./Dashboard";
import { Admin } from "./Admin";
import { Feedback } from "./Feedback";
import { Login } from "./Login";
import Signup from "./Signup";

function AppContent() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();

	// 👇 check if current route is login or signup
	const hideSidebar = ["/login", "/signup"].includes(location.pathname);

	return (
		<div className="flex h-screen bg-[#18181c] text-white font-sans overflow-hidden">
			{/* Conditionally render Sidebar */}
			{!hideSidebar && (
				<Sidebar
					isOpen={sidebarOpen}
					onClose={() => setSidebarOpen(false)}
				/>
			)}

			{/* Main content */}
			<div
				className={`flex-1 ${
					!hideSidebar ? "md:ml-64" : ""
				} overflow-y-auto relative`}>
				{/* Hamburger button (only if sidebar is visible) */}
				{!hideSidebar && (
					<button
						className="md:hidden text-2xl fixed top-4 left-4 z-50 bg-white text-black p-2 rounded shadow"
						onClick={() => setSidebarOpen(true)}>
						&#9776;
					</button>
				)}

				{/* Page content */}
				<div className="min-h-screen w-full px-4 sm:px-8 md:px-12 py-8">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/join-queue" element={<JoinQueue />} />
						<Route path="/queue-status" element={<QueueStatus />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/feedback" element={<Feedback />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
