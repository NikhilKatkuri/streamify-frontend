import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="mx-auto h-auto min-h-64 w-full max-w-96 flex-col rounded-lg border-2 border-white/5 p-6 max-[500px]:max-w-[95%]">
        <div className="flex h-full w-full flex-col justify-center gap-3">
          <div className="flex w-full flex-col justify-center text-center">
            <Image
              src="/Streamify.svg"
              alt="Streamify Logo"
              height={48}
              width={48}
              className="mx-auto"
            />
            <p className="mt-2 text-lg font-medium text-white">
              Create your account
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex w-full flex-col items-start">
              <p className="mb-2 font-medium">Email Address * </p>
              <input
                type="text"
                name=""
                id=""
                className="transition-150 bg-Bg-level-2/70 h-10 w-full rounded-md border border-transparent px-3 outline-0 focus:border-white/10"
              />
            </div>
            <div className="flex w-full flex-col items-start">
              <p className="mb-2 font-medium">password * </p>
              <div className="relative flex w-full items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  className="transition-150 bg-Bg-level-2/70 h-10 w-full rounded-md border border-transparent px-3 outline-0 focus:border-white/10"
                />
                <div className="absolute top-0 right-0 h-10 w-10">
                  <button></button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <p className="mb-2 font-medium">confirm password * </p>
              <div className="relative flex w-full items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  className="transition-150 bg-Bg-level-2/70 h-10 w-full rounded-md border border-transparent px-3 outline-0 focus:border-white/10"
                />
                <div className="absolute top-0 right-0 h-10 w-10">
                  <button></button>
                </div>
              </div>
            </div>
            <div className="my-4 flex w-full flex-col items-center gap-2">
              <button className="transition-150 bg-primary mt-3 flex w-full items-center justify-center rounded-md py-2">
                <span className="font-semibold text-white">Sign up</span>
              </button>
              <div className="flex w-full items-center justify-center gap-1">
                <div className="bg-Bg-level-2 h-1 w-full"></div>
                <span className="mb-1 flex-shrink-0 text-xs text-white/50">
                  or
                </span>
                <div className="bg-Bg-level-2 h-1 w-full"></div>
              </div>
              <button className="transition-150 mt-3 flex w-full items-center justify-center rounded-md border-2 border-white/10 py-2.5 hover:border-white/15">
                <span className="mr-2 font-semibold text-white">
                  {' '}
                  <Image
                    src="/icons/google.svg"
                    alt="google-svg"
                    height={24}
                    width={24}
                    className=""
                  />
                </span>
                <span>Continue with Google</span>
              </button>
            </div>
            <div className="flex w-full items-center justify-center *:text-sm">
              <p className="">Already have an account ?</p>
              <Link href="/auth" className="text-primary ml-2 hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
