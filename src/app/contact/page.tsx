'use client';
import React from 'react'
import { Meteors } from "@/components/ui/meteors"; 

function Contact() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Meteors number={40} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-gray-200 dark:text-gray-300 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg shadow-xl p-8 backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         bg-gray-700/50 text-gray-100 placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-600 
                         focus:ring-2 focus:ring-green-500 focus:border-transparent
                         bg-gray-700/50 text-gray-100 placeholder-gray-400"
                placeholder="Type your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-700 to-blue-600 text-white font-medium py-3 px-6 rounded-lg
                       hover:from-green-800 hover:to-blue-700 transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
