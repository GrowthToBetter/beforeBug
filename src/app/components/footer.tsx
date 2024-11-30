import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-lg border-t border-white border-opacity-20">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and About */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-blue-300">Before Bug</h1>
            <p className="text-gray-300 mt-2">
              Empowering developers to innovate, collaborate, and grow in the
              ever-evolving tech landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 text-gray-300">
              <li className="hover:text-blue-300">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="/goals">Our Goals</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="/contact">Contact</a>
              </li>
              <li className="hover:text-blue-300">
                <a href="/login">Get Started</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <Link href="#" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-400">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <FaGithub size={24} />
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-300">
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white border-opacity-20 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Before Bug. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
