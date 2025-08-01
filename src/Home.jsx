import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUsers,
  FiSmartphone,
  FiClock,
  FiArrowRight,
  FiTrendingUp,
} from "react-icons/fi";

export const Home = () => {
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate("/join-queue");
  };

  return (
    <div className="bg-[#18181c] text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center relative overflow-hidden bg-gradient-to-br from-[#1f1f27] to-[#18181c]">
        {/* Blur blobs */}
        <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10rem] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl" />

        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Smarter Queueing.<br />
          Less Waiting.
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          QueueEase makes managing queues seamless and stress-free — for both customers and staff.
        </p>
        <button
          onClick={handleCustomerClick}
          className="bg-primary hover:bg-primary/90 transition text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md inline-flex items-center gap-2"
        >
          I'm a Customer <FiArrowRight className="text-xl" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#1f1f27] text-center">
        <h2 className="text-3xl font-bold mb-10">Why QueueEase?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <FiUsers className="text-4xl text-primary" />
            <p className="text-gray-300">No physical crowding or chaos</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FiSmartphone className="text-4xl text-primary" />
            <p className="text-gray-300">Join queues remotely from any device</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FiClock className="text-4xl text-primary" />
            <p className="text-gray-300">Get accurate wait-time predictions</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FiTrendingUp className="text-4xl text-primary" />
            <p className="text-gray-300">Boost customer satisfaction</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <ol className="space-y-6 text-left text-gray-400 text-lg">
          <li><span className="text-primary font-bold">1.</span> Customer joins a queue via phone or kiosk</li>
          <li><span className="text-primary font-bold">2.</span> They wait remotely while monitoring their turn</li>
          <li><span className="text-primary font-bold">3.</span> QueueEase alerts them when they're up</li>
          <li><span className="text-primary font-bold">4.</span> Staff sees everything live on their dashboard</li>
        </ol>
      </section>

      {/* Business CTA */}
      <section className="py-16 bg-[#18181c] text-center border-t border-[#2a2a35]">
        <p className="text-gray-400 text-sm">
          Are you a business looking to manage queues better?{" "}
          <a
            href="mailto:hello@queueease.io"
            className="text-primary hover:underline"
          >
            Contact us to get started.
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#1f1f27] text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} QueueEase. All rights reserved.
      </footer>
    </div>
  );
};
