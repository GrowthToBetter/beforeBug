import React from "react";

export default function Goals() {
  return (
    <div className="w-full h-screen bg-custom-gradient text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center">Our Goals</h1>
        <p className="text-lg leading-8 text-gray-300 mb-12 text-center">
          At <span className="font-bold text-blue-400">Before Bug</span>, our
          goal is to create a platform that empowers developers to unlock their
          full potential, collaborate, and innovate for a better future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h2 className="text-3xl font-semibold mb-4 text-blue-300">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300">
              To be a leading platform where developers of all skill levels can
              access resources, share ideas, and build impactful solutions that
              shape the future of technology.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h2 className="text-3xl font-semibold mb-4 text-blue-300">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300">
              To provide a supportive ecosystem that fosters learning,
              collaboration, and innovation by offering cutting-edge tools,
              resources, and mentorship to developers worldwide.
            </p>
          </div>

          {/* Goal 1 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h2 className="text-3xl font-semibold mb-4 text-blue-300">
              Goal 1: Empower Developers
            </h2>
            <p className="text-lg text-gray-300">
              Equip developers with the skills, knowledge, and resources they
              need to excel in their careers and contribute to the global tech
              community.
            </p>
          </div>

          {/* Goal 2 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h2 className="text-3xl font-semibold mb-4 text-blue-300">
              Goal 2: Foster Collaboration
            </h2>
            <p className="text-lg text-gray-300">
              Create an inclusive community where developers can connect, share
              ideas, and collaborate on innovative projects that solve
              real-world problems.
            </p>
          </div>

          {/* Goal 3 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-white border-opacity-20">
            <h2 className="text-3xl font-semibold mb-4 text-blue-300">
              Goal 3: Drive Innovation
            </h2>
            <p className="text-lg text-gray-300">
              Inspire developers to push the boundaries of technology by
              providing access to cutting-edge tools, projects, and mentorship
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
