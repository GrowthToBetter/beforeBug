import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white flex items-center justify-center">
      <div className="max-w-4xl px-8 py-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg border border-white border-opacity-20">
        <h1 className="text-4xl font-extrabold text-center mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          Welcome to <span className="font-bold text-blue-300">Before Bug</span>
          , the platform designed to help programmers of all levels enhance
          their coding skills and build innovative solutions for the future. We
          believe that learning should be engaging, accessible, and constantly
          evolving, just like technology.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          Our mission is simple: to provide a space where developers can sharpen
          their skills, collaborate with like-minded individuals, and stay ahead
          of the curve. Whether you’re a beginner exploring the basics or an
          experienced coder pushing the boundaries of what’s possible, Before
          Bug is here to support your journey.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          Our platform offers curated challenges, insightful resources, and a
          community-driven approach to learning. We are dedicated to fostering a
          vibrant community where knowledge is shared freely, and innovation
          thrives.
        </p>
        <div className="text-center mt-8">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
