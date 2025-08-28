"use client";

import LogoButton from "@/components/common/LogoButton";
import Input from "@/components/inputs/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SignUp() {
  const [bgClass, setBgClass] = useState("auth-screen-bg-1");

  useEffect(() => {
    // Randomly select between the two background classes
    const backgrounds = ["auth-screen-bg-1", "auth-screen-bg-2"];
    const randomBg =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBgClass(randomBg);
  }, []);

  return (
    <div className="h-screen  grid grid-cols-1 lg:grid-cols-[40%_60%]">
      {/* Background Image Section */}
      <div
        className={`h-full w-full ${bgClass} max-lg:fixed inset-0 z-0 relative`}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute right-3 bottom-3 text-white/70 text-xs">
          <span>
            Image by{" "}
            <a 
              href="https://www.freepik.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Freepik
            </a>
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 flex items-center justify-center p-0 lg:p-8 bg-background/95 lg:bg-background">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8 max-md:mt-6">
            <LogoButton />
          </div>

          {/* Form Container */}
          <div className="bg-thin border border-thin-border shadow-xl shadow-thin-border/20 rounded-lg px-6 py-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">
                Create Account
              </h1>
              <p className="text-white/70 text-sm">
                Join Streamify and start your musical journey
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="Enter your full name"
                  className="px-3"
                  variant="filled"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="px-3"
                  variant="filled"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Create a strong password"
                  className="px-3"
                  variant="filled"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  className="px-3"
                  variant="filled"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3 py-2">
                <label className="cursor-pointer relative mt-1">
                  <input type="checkbox" className="peer hidden" />
                  <span className="h-4 w-4 rounded-md border-2 border-white/30 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all duration-200 hover:border-white/50"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white hidden peer-checked:block absolute"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </label>
                <span className="text-sm text-white/70 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-lime-400 transition-colors duration-200">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-lime-400 transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              {/* Sign Up Button */}
              <button className="w-full h-12 bg-gradient-to-r from-primary to-lime-500 hover:from-lime-500 hover:to-primary text-white font-medium rounded-lg shadow-lg shadow-primary/25 active:scale-95 transition-all ease-out duration-200 hover:shadow-xl hover:shadow-primary/30 mt-6">
                Create Account
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-thin-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-thin text-white/70">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Sign Up */}
              <button className="w-full py-3 rounded-lg flex items-center justify-center gap-3 border border-white/20 hover:border-white/30 hover:bg-white/5 active:scale-95 transition-all ease-out duration-200 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  className="transition-transform duration-200"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                <span className="font-medium">Continue with Google</span>
              </button>

              {/* Login Link */}
              <div className="text-center pt-4 border-t border-thin-border">
                <p className="text-sm text-white/60">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="text-primary hover:text-lime-400 font-medium transition-colors duration-200"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
