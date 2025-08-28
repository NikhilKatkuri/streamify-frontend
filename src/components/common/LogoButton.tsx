import Image from "next/image";
import React from "react";

function LogoButton() {
  return (
    <button className="flex items-end-safe">
      <Image
        src="/images/streamify.svg"
        alt="Streamify Logo"
        height={24}
        width={24}
        className="h-8 w-8 mr-2"
      />
      <p className="font-medium text-white/90 text-xl">Streamify</p>
    </button>
  );
}

export default LogoButton;
