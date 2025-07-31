// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const user = JSON.parse(localStorage.getItem("user"));
		if (user?.email === email) {
			localStorage.setItem("role", user.role);
			navigate("/dashboard");
		} else {
			alert("Invalid credentials (mock login)");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-8 w-full max-w-md">
				<h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>

				<form onSubmit={handleLogin} className="space-y-5">
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

					<button
						type="submit"
						className="w-full bg-primary hover:bg-primary/90 transition text-white py-2 rounded font-medium">
						Log In
					</button>
				</form>

				<p className="text-center text-sm text-gray-400 mt-6">
					Don't have an account?{" "}
					<a href="/signup" className="text-primary hover:underline">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};
