import LogoButton from "@/components/common/LogoButton";
import Input from "@/components/inputs/input";
import Link from "next/link";
import React from "react";

function Login() {
  return ( 
    <div className="h-screen w-screen flex items-center justify-center">
      {/* centered div */}
      <div className="w-full max-w-[90%] min-[500px]:max-w-96 bg-thin border border-thin-border shadow shadow-thin-border rounded-md px-4 sm:px-6 py-5 flex flex-col gap-1 items-start">
        {/* logo */}
        <div className="flex items-end-safe pb-3 border-b w-full border-thin-border ">
          <LogoButton />
        </div>
        {/* !logo */}
        {/* data:input */}
        <div className="flex flex-col gap-3 w-full py-3">
          {/* email */}
          <div className="flex flex-col gap-1">
            <h1>Email</h1>
            <Input
              placeholder="@example.com"
              className="px-3"
              variant="filled"
            />
          </div>
          {/* email */}
          {/* password */}
          <div className="flex flex-col gap-1">
            <h1>Password</h1>
            <Input
              placeholder="********"
              type="password"
              className="px-3"
              variant="filled"
            />
          </div>
          {/* password */}
          {/* auth:helpers */}
          <div className="flex items-center justify-between my-1">
            <p className="text-sm text-white/70">Forgot your password?</p>
            {/* remember me */}
            <div className="flex items-center gap-2 cursor-pointer">
              <label className="cursor-pointer relative">
                <input id="remember" type="checkbox" className="peer hidden" />
                <span
                  className="h-4 w-4 rounded-md border border-gray-500 flex items-center justify-center 
                peer-checked:bg-green-600 peer-checked:border-green-600 transition-all"
                ></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white hidden peer-checked:block absolute"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </label>
              <span className="text-sm select-none">Remember me</span>
            </div>
            {/* remember me */}
          </div>
          <div className="w-full">
            <button className="h-12 w-full cursor-pointer rounded-md bg-primary hover:bg-lime-500 text-white active:scale-[0.98] transition-all ease-in-out duration-200">
              Login
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center ">
            <div className="pb-3  w-full border-b border-thin-border">
              <p className="text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
            <button className="w-full py-3 rounded-lg flex items-center justify-center cursor-pointer  px-6 gap-2 border border-outline hover:shadow-md active:scale-[0.98] transition-all ease-in-out duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
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
              <span className="">Continue with Google</span>
            </button>
          </div>
          {/* auth:helpers */}
        </div>
        {/* !data:input */}
      </div>
    </div>
  );
}

export default Login;
