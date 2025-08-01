// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("user");
	const navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();
		// Save to localStorage (mock implementation)
		localStorage.setItem("role", role);
		localStorage.setItem("user", JSON.stringify({ name, email, role }));
		navigate("/dashboard");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-8 w-full max-w-md">
				<h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

				<form onSubmit={handleSignup} className="space-y-5">
					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Name
						</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600"
							placeholder="Your Name"
						/>
					</div>

					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600"
							placeholder="you@example.com"
						/>
					</div>

					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600"
							placeholder="••••••••"
						/>
					</div>

					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Role
						</label>
						<select
							value={role}
							onChange={(e) => setRole(e.target.value)}
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600">
							<option value="user">Customer</option>
							<option value="receptionist">Manager</option>
						</select>
					</div>

					<button
						type="submit"
						className="w-full bg-primary hover:bg-primary/90 transition text-white py-2 rounded font-medium">
						Create Account
					</button>
				</form>

				<p className="text-center text-sm text-gray-400 mt-6">
					Already have an account?{" "}
					<a href="/login" className="text-primary hover:underline">
						Log in
					</a>
				</p>
			</div>
		</div>
	);
};

export default Signup;
