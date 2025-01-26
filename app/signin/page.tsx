"use client";

import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign In</h1>
      <p className="text-gray-600 mb-6">
        Access your account to track expenses and manage your budget effortlessly.
      </p>
      <div className="flex flex-col gap-4">
        {/* GitHub Sign-In Button */}
        <button
          onClick={() => signIn('github')}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Sign in with GitHub
        </button>
        {/* Google Sign-In Button (example for extensibility) */}
        <button
          onClick={() => signIn('google')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Sign in with Google
        </button>
      </div>
      <p className="mt-8 text-gray-500">
        Don’t have an account? Signing in will create one automatically.
      </p>
    </div>
  );
}
