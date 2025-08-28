import { redirect } from "next/navigation";

export default function Home() {
  if (true) {
    redirect("/auth/login");
  }
  return <div></div>;
}
