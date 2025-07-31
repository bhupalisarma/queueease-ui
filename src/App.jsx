import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import { Home } from "./Home";
import { JoinQueue } from "./JoinQueue";
import { QueueStatus } from "./QueueStatus";
import { Dashboard } from "./Dashboard";
import { Admin } from "./Admin";
import { Feedback } from "./Feedback";
import { Login } from "./Login";
import Signup from "./Signup";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<Router>
			<div className="flex h-screen bg-[#18181c] text-white font-sans overflow-hidden">
				{/* Sidebar */}
				<Sidebar
					isOpen={sidebarOpen}
					onClose={() => setSidebarOpen(false)}
				/>

				{/* Main content area */}
				<div className="flex-1 md:ml-64 overflow-y-auto relative">
					{/* Hamburger for mobile */}
					<button
						className="md:hidden text-2xl fixed top-4 left-4 z-50 bg-white text-black p-2 rounded shadow"
						onClick={() => setSidebarOpen(true)}>
						&#9776;
					</button>

					{/* Centered content container */}
					<div className="min-h-screen flex items-center justify-center px-4 py-12">
						<div className="w-full max-w-2xl">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/join-queue"
									element={<JoinQueue />}
								/>
								<Route
									path="/queue-status"
									element={<QueueStatus />}
								/>
								<Route
									path="/dashboard"
									element={<Dashboard />}
								/>
								<Route path="/admin" element={<Admin />} />
								<Route
									path="/feedback"
									element={<Feedback />}
								/>
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
