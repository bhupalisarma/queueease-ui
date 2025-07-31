import React from "react";

export const JoinQueue = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-8 w-full max-w-md">
				<h2 className="text-3xl font-bold mb-6 text-center text-white">
					Join the Queue
				</h2>

				<form className="space-y-5">
					{/* Name */}
					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Full Name
						</label>
						<input
							type="text"
							placeholder="John Doe"
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>

					{/* Service Selection */}
					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Select Service
						</label>
						<select className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary">
							<option>Customer Support</option>
							<option>Account Opening</option>
							<option>Billing & Payments</option>
							<option>Tech Help</option>
						</select>
					</div>

					{/* Contact Info */}
					<div>
						<label className="block text-sm mb-1 text-gray-300">
							Phone or Email (optional)
						</label>
						<input
							type="text"
							placeholder="+91 9876543210 or email@example.com"
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full bg-primary hover:bg-primary/90 transition text-white py-2 rounded font-medium">
						Join Queue
					</button>
				</form>
			</div>
		</div>
	);
};
