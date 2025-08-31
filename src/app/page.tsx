import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-10 w-10">
        <Image
          src="/Streamify.svg"
          alt="Streamify Logo"
          height={36}
          width={36}
          className="max-h-10 max-w-10 animate-pulse"
        />
      </div>
    </div>
  );
}
