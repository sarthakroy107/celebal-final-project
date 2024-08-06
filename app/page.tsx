'use client';
import dynamic from "next/dynamic";


const DisplayEverything = dynamic(() => import("./display-post"), {
  ssr: false,
});

const Navbar = dynamic(() => import("./navbar"), {
  ssr: false,
});

export default function Page() {

  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <DisplayEverything />
    </main>
  );
}
