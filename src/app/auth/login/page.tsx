"use client"
import LogoButton from "@/components/common/LogoButton";
import Input from "@/components/inputs/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Login() {
  const [bgClass, setBgClass] = useState("auth-welcome-screen-bg-1");
  const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      // Randomly select between the two background classes
      const backgrounds = ["auth-welcome-screen-bg-1", "auth-welcome-screen-bg-2"];
      const randomBg =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];
      setBgClass(randomBg);
      
      // Trigger fade-in animation
      setTimeout(() => setIsLoaded(true), 50);
    }, []);
  return (
    <div className={`h-screen w-screen ${bgClass} relative`}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Main Container */}
      <div className="h-full flex items-center justify-center lg:justify-between lg:px-24 relative z-10">
        
        {/* Hero Text Section - Hidden on mobile */}
        <div className={`hidden lg:flex flex-col justify-center max-w-lg transition-all duration-700 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-transparent bg-gradient-to-r from-primary to-lime-400 bg-clip-text">
                Streamify
              </span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Your ultimate music streaming platform. Discover, create, and share your favorite tunes with millions of music lovers worldwide.
            </p>
            <div className="flex items-center gap-4 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">10M+ Songs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">HD Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Offline Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className={`w-full max-w-[90%] min-[500px]:max-w-96 lg:max-w-md bg-thin/80 backdrop-blur-md border border-thin-border/50 shadow-2xl shadow-black/20 rounded-xl px-6 sm:px-8 py-7 flex flex-col gap-2 items-start transition-opacity duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* logo */}
        <div className="flex items-center pb-4 border-b w-full border-thin-border/30">
          <LogoButton />
        </div>
        
        {/* Welcome text */}
        <div className="py-2">
          <h2 className="text-2xl font-semibold text-white mb-1">Welcome back</h2>
          <p className="text-white/60 text-sm">Sign in to your account to continue</p>
        </div>
        
        {/* data:input */}
        <div className="flex flex-col gap-4 w-full py-2">
          {/* email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <Input
              placeholder="Enter your email"
              className="px-4"
              variant="filled"
            />
          </div>
          
          {/* password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white/80">Password</label>
            <Input
              placeholder="Enter your password"
              type="password"
              className="px-4"
              variant="filled"
            />
          </div>
          
          {/* auth:helpers */}
          <div className="flex items-center justify-between my-2">
            <Link href="/auth/forgot-password" className="text-sm text-primary hover:text-lime-400 transition-colors duration-200">
              Forgot password?
            </Link>
            
            {/* remember me */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <label className="cursor-pointer relative">
                <input id="remember" type="checkbox" className="peer hidden" />
                <span className="h-4 w-4 rounded-md border-2 border-white/30 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all duration-200 group-hover:border-white/50"></span>
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
              <span className="text-sm select-none text-white/70 group-hover:text-white/90 transition-colors duration-200">Remember me</span>
            </div>
          </div>
          
          {/* Login button */}
          <div className="w-full pt-2">
            <button className="h-12 w-full cursor-pointer rounded-lg bg-gradient-to-r from-primary to-lime-500 hover:from-lime-500 hover:to-primary text-white font-medium shadow-lg shadow-primary/25 active:scale-95 transition-all ease-out duration-200 hover:shadow-xl hover:shadow-primary/30">
              Sign In
            </button>
          </div>
          
          {/* Divider */}
          <div className="flex items-center gap-4 py-4">
            <div className="flex-1 h-px bg-thin-border/30"></div>
            <span className="text-sm text-white/50 px-2">or</span>
            <div className="flex-1 h-px bg-thin-border/30"></div>
          </div>
          
          {/* Social login and signup */}
          <div className="flex flex-col gap-4">
            {/* Google login */}
            <button className="w-full py-3 rounded-lg flex items-center justify-center cursor-pointer px-6 gap-3 border border-white/20 hover:border-white/30 hover:bg-white/5 active:scale-95 transition-all ease-out duration-200 group">
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
            
            {/* Sign up link */}
            <div className="text-center">
              <p className="text-sm text-white/60">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-primary hover:text-lime-400 font-medium transition-colors duration-200">
                  Sign up
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

export default Login;
