import React from "react";

export const Feedback = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-8 w-full max-w-xl">
				<h2 className="text-3xl font-bold mb-2 text-center">
					We value your feedback
				</h2>
				<p className="text-gray-400 mb-8 text-center">
					Let us know what you love or what we can do better.
				</p>

				<form className="space-y-5">
					<div>
						<label className="block text-sm text-gray-300 mb-1">
							Name (optional)
						</label>
						<input
							type="text"
							placeholder="Your name"
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-300 mb-1">
							Email (optional)
						</label>
						<input
							type="email"
							placeholder="you@example.com"
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-300 mb-1">
							Your Message
						</label>
						<textarea
							rows="5"
							placeholder="Write your feedback here..."
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-primary hover:bg-primary/90 transition text-white py-2 rounded-lg font-medium">
						Submit Feedback
					</button>
				</form>
			</div>
		</div>
	);
};
