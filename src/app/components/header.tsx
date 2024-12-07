import React from "react";
import Image from "next/image";
import { LinkButton } from "./utils/buttons";
import BugImage from "@/../public/bug.png";

export default function Header() {
  return (
    <>
      <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 backdrop-filter backdrop-blur-3xl">
        <div className="flex justify-between gap-20 h-full">
          {/* Left Section */}
          <div className="w-full flex">
            <div className="ml-32 my-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white border-opacity-20">
              <h2 className="text-xl text-white font-bold">Introducing</h2>
              <h1 className="text-5xl text-white font-extrabold tracking-wide">
                BEFORE BUG
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-300">
                Platform that can elevate your programming
                <br />
                for the{" "}
                <span className="font-bold text-blue-300 uppercase">
                  future
                </span>
              </p>
              <div className="mt-6 flex items-center gap-8">
                <h1 className="text-white text-3xl font-black">↳</h1>
                <LinkButton
                  href="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md transition duration-300"
                >
                  Get Started
                </LinkButton>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full flex">
            <div className="mx-auto my-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white border-opacity-30 hover:shadow-2xl hover:bg-opacity-20 transition ease-in-out duration-300">
              <Image
                src={BugImage}
                alt="Bug Image"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
