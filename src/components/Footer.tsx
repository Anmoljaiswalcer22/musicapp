// components/Footer.tsx
"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Brand / About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">TuneFlow</h2>
          <p className="text-gray-400">
            Your go-to destination for streaming good vibes. Explore trending tracks, discover new artists, and vibe out with the music you love.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              📧 Email:{" "}
              <a href="mailto:support@tuneflow.com" className="hover:underline text-white">
                support@tuneflow.com
              </a>
            </li>
            <li>
              📍 Location: Mumbai, India
            </li>
            <li>
              ☎️ Phone: +91-987654XXXX
            </li>
          </ul>
        </div>

        {/* Social Links (Optional) */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-700">Facebook</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} TuneFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

