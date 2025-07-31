// src/NavBar.jsx
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="bg-white shadow-md p-4 flex justify-between items-center">
			<div className="text-xl font-bold text-blue-600">QueueEase</div>
			<div className="space-x-4">
				
				<Link to="/" className="text-gray-700 hover:text-blue-600">
					Home
				</Link>
				<Link
					to="/dashboard"
					className="text-gray-700 hover:text-blue-600">
					Dashboard
				</Link>
				<Link
					to="/join-queue"
					className="text-gray-700 hover:text-blue-600">
					Join Queue
				</Link>
				<Link to="/login" className="text-gray-700 hover:text-blue-600">
					Login
				</Link>
				<Link
					to="/signup"
					className="text-gray-700 hover:text-blue-600">
					Signup
				</Link>
				<Link to="/admin" className="text-gray-700 hover:text-blue-600">
					Admin
				</Link>
				<Link
					to="/feedback"
					className="text-gray-700 hover:text-blue-600">
					Feedback
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
