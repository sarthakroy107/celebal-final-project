"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!name) {
      toast.error("Name is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    window.localStorage.setItem("name", name);
    router.push("/");
  };
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-black">
      <div className="w-96 bg-white/15 space-y-7 text-white min-h-12 px-8 py-5">
        <h1 className="text-3xl text-center">First Login</h1>
        <div>
          <h2>Name</h2>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
            className="w-full text-black"
          />
        </div>
        <div>
          <h2>Password</h2>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Secure password"
            className="w-full text-black"
          />
        </div>
        <Button onClick={handleLogin} className="w-full mt-4 bg-[#f52935]">
          Login
        </Button>
      </div>
    </main>
  );
}
