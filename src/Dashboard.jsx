import React, { useState } from "react";

export const Dashboard = () => {
	// Dummy queue data for now
	const [queue, setQueue] = useState([
		{ id: "A-15", name: "John Doe" },
		{ id: "A-16", name: "Priya Sharma" },
		{ id: "A-17", name: "Ahmed Khan" },
	]);

	const [current, setCurrent] = useState(null);

	const handleCallNext = () => {
		if (queue.length > 0) {
			const [next, ...rest] = queue;
			setCurrent(next);
			setQueue(rest);
		}
	};

	const handleSkip = () => {
		if (queue.length > 0) {
			const [skipped, ...rest] = queue;
			setQueue([...rest, skipped]); // send to end
		}
	};

	return (
		<div className="min-h-screen bg-[#18181c] text-white px-4 py-8 flex justify-center">
			<div className="w-full max-w-4xl">
				<h2 className="text-3xl font-bold mb-8 text-center">
					Dashboard
				</h2>

				{/* Current Token */}
				<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-xl p-6 mb-6 text-center">
					<p className="text-gray-400 text-sm mb-2">Now Serving</p>
					<h3 className="text-5xl font-bold text-primary">
						{current ? current.id : "—"}
					</h3>
					<p className="mt-2 text-lg">
						{current?.name || "No one yet"}
					</p>
				</div>

				{/* Queue Controls */}
				<div className="flex gap-4 mb-6 justify-center">
					<button
						onClick={handleCallNext}
						className="bg-primary hover:bg-primary/90 px-6 py-2 rounded text-white font-medium">
						Call Next
					</button>
					<button
						onClick={handleSkip}
						className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded text-white font-medium">
						Skip
					</button>
				</div>

				{/* Live Queue List */}
				<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-xl p-6">
					<h4 className="text-lg font-semibold mb-4">
						People in Queue
					</h4>
					{queue.length === 0 ? (
						<p className="text-gray-500 text-sm">
							Queue is currently empty.
						</p>
					) : (
						<ul className="space-y-3">
							{queue.map((user, index) => (
								<li
									key={user.id}
									className="flex items-center justify-between bg-[#2a2a35] px-4 py-2 rounded">
									<span>
										<span className="text-primary font-semibold mr-2">
											{user.id}
										</span>
										{user.name}
									</span>
									<span className="text-sm text-gray-400">
										Position #{index + 1}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};
