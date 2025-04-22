'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log({ email });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left side with image */}
        <div className="md:w-1/2">
          <img 
            src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Plant in glass terrarium" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with form */}
        <div className="bg-white p-8 md:w-1/2">
          {submitted ? (
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-16 w-16 text-[#15B67A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Check your email</h2>
              <p className="mt-2 text-gray-600">
                We've sent a password reset link to {email}
              </p>
              <div className="mt-8">
                <Link
                  href="/auth/login"
                  className="text-[#6FC78F] hover:underline"
                >
                  <span className="text-[#6FC78F] hover:underline">Return to sign in</span>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
                <p className="text-gray-600 mt-1 text-sm">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-4">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full text-black pl-10 pr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#6FC78F] bg-transparent"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#15B67A] hover:bg-[#15B67A] text-white font-medium py-2 rounded-md transition-colors mt-10"
                >
                  Send Reset Link
                </button>

                <div className="mt-6 text-center">
                  <Link
                    href="/auth/login"
                    className="text-black"
                  >
                    <span className="text-[#6FC78F] hover:underline">Back to sign in</span>
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 