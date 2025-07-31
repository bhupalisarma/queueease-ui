import React from "react";

export const QueueStatus = () => {
	// Placeholder values – you can replace with real data later
	const token = "A-15";
	const position = 3;
	const waitTime = "8 mins";

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-10 w-full max-w-md text-center">
				<h2 className="text-3xl font-bold mb-4 text-white">
					Your Queue Status
				</h2>

				<div className="text-6xl font-extrabold text-primary mb-2">
					{token}
				</div>
				<p className="text-gray-400 text-lg mb-6">Token Number</p>

				<div className="mb-4">
					<p className="text-lg text-white font-medium">
						You're <span className="text-primary">{position}</span>{" "}
						in line
					</p>
					<p className="text-sm text-gray-400">
						Approx. wait: {waitTime}
					</p>
				</div>

				<button
					onClick={() => window.location.reload()}
					className="mt-6 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded transition">
					Refresh Status
				</button>
			</div>
		</div>
	);
};

export default QueueStatus;