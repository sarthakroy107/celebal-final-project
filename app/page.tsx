import dynamic from "next/dynamic";
import { Navbar } from "./navbar";

const DisplayEverything = dynamic(() => import("./display-post"), {
  ssr: false,
});

export default function Page() {
  const localPosts: string[] = JSON.parse(
    window.localStorage.getItem("posts") || "[]"
  );
  const name = window.localStorage.getItem("name");

  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <DisplayEverything />
    </main>
  );
}
