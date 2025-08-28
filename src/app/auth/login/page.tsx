import Input from "@/components/inputs/input";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[30rem] w-full max-w-[90%] min-[500px]:max-w-96 bg-thin border border-thin-border shadow shadow-thin-border rounded-md px-4 py-5 flex flex-col gap-1 items-start">
        <div className="flex items-end-safe pb-3 border-b w-full border-thin-border ">
          <button className="flex  items-end-safe">
            <Image
              src="/images/streamify.svg"
              alt="Streamify Logo"
              height={24}
              width={24}
              className="h-8 w-8 mr-2"
            />
            <p className="font-medium text-white/90 text-xl">Streamify</p>
          </button>
        </div>
        <div className="flex flex-col gap-3 w-full py-3">
          <div className="flex flex-col gap-1">
            <h1>Email</h1>
            <Input
              placeholder="@example.com"
              className="px-3"
              variant="filled"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1>Password</h1>
            <Input
              placeholder="********"
              type="password"
              className="px-3"
              variant="filled"
            />
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
