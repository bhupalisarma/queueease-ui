import React from "react";

export const Home = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-10 w-full max-w-xl text-center backdrop-blur-sm">
				<h1 className="text-4xl font-bold mb-4 text-white">
					Welcome to <span className="text-primary">QueueEase</span>
				</h1>
				<p className="text-gray-400 mb-8 text-lg">
					A smarter, sleeker way to wait in line — no more chaos, just
					clarity.
				</p>

				<div className="flex justify-center gap-4 flex-wrap">
					<button className="bg-primary hover:bg-primary/90 transition text-white px-6 py-2 rounded-lg font-medium">
						I'm a Customer
					</button>
					<button className="bg-white text-[#18181c] hover:bg-gray-100 transition px-6 py-2 rounded-lg font-medium">
						I'm a Business
					</button>
				</div>
			</div>
		</div>
	);
};
