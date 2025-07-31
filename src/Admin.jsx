import React, { useState } from "react";

export const Admin = () => {
	// Mock stats
	const stats = {
		totalCustomers: 47,
		avgWait: "6m 30s",
		activeQueues: 4,
	};

	// Services
	const [services, setServices] = useState([
		"Customer Support",
		"Account Opening",
		"Billing",
		"Technical Help",
	]);

	const [newService, setNewService] = useState("");

	const addService = () => {
		if (newService.trim() && !services.includes(newService)) {
			setServices([...services, newService]);
			setNewService("");
		}
	};

	const removeService = (index) => {
		setServices(services.filter((_, i) => i !== index));
	};

	return (
		<div className="min-h-screen bg-[#18181c] text-white px-4 py-8 flex justify-center">
			<div className="w-full max-w-5xl">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Admin Dashboard
				</h2>

				{/* Overview cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
					<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-xl p-6 text-center">
						<p className="text-gray-400 text-sm mb-1">
							Total Customers Today
						</p>
						<h3 className="text-3xl font-bold text-primary">
							{stats.totalCustomers}
						</h3>
					</div>
					<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-xl p-6 text-center">
						<p className="text-gray-400 text-sm mb-1">
							Average Wait Time
						</p>
						<h3 className="text-3xl font-bold text-primary">
							{stats.avgWait}
						</h3>
					</div>
					<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-xl p-6 text-center">
						<p className="text-gray-400 text-sm mb-1">
							Active Queues
						</p>
						<h3 className="text-3xl font-bold text-primary">
							{stats.activeQueues}
						</h3>
					</div>
				</div>

				{/* Manage Services */}
				<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-xl p-6">
					<h4 className="text-xl font-semibold mb-4">
						Manage Services
					</h4>

					<div className="flex gap-2 mb-4">
						<input
							type="text"
							placeholder="e.g. Account Verification"
							className="flex-1 px-4 py-2 rounded bg-[#2a2a35] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-primary"
							value={newService}
							onChange={(e) => setNewService(e.target.value)}
						/>
						<button
							onClick={addService}
							className="bg-primary hover:bg-primary/90 text-white px-4 rounded">
							Add
						</button>
					</div>

					<ul className="space-y-2">
						{services.map((service, index) => (
							<li
								key={index}
								className="flex items-center justify-between bg-[#2a2a35] px-4 py-2 rounded">
								<span>{service}</span>
								<button
									onClick={() => removeService(index)}
									className="text-sm text-red-400 hover:text-red-300">
									Remove
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
