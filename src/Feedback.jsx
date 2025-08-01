import React, { useState } from "react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";


export const Feedback = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [comment, setComment] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const feedback = {
			rating,
			comment,
			timestamp: new Date().toISOString(),
		};
		const allFeedback = JSON.parse(
			localStorage.getItem("feedbacks") || "[]"
		);
		allFeedback.push(feedback);
		localStorage.setItem("feedbacks", JSON.stringify(allFeedback));
		setSubmitted(true);
		setRating(0);
		setComment("");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#18181c] text-white px-4">
			<div className="bg-[#1f1f27] border border-[#2a2a35] rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
				<h2 className="text-3xl font-bold mb-6">
					Rate Your Experience
				</h2>

				{!submitted ? (
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Stars */}
						<div className="flex justify-center gap-2">
							{[1, 2, 3, 4, 5].map((star) => {
								const isFilled = (hover || rating) >= star;
								return (
									<div
										key={star}
										onClick={() => setRating(star)}
										onMouseEnter={() => setHover(star)}
										onMouseLeave={() => setHover(0)}
										className="cursor-pointer text-3xl transition">
										{isFilled ? (
											<FaStar className="text-yellow-400" />
										) : (
											<FiStar className="text-gray-600" />
										)}
									</div>
								);
							})}
						</div>

						{/* Comment box */}
						<textarea
							rows={4}
							placeholder="Optional comment..."
							className="w-full px-4 py-2 rounded bg-[#2a2a35] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>

						<button
							type="submit"
							className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded font-medium"
							disabled={rating === 0}>
							Submit Feedback
						</button>
					</form>
				) : (
					<div className="text-green-400 text-lg font-semibold">
						🎉 Thank you for your feedback!
					</div>
				)}
			</div>
		</div>
	);
};
