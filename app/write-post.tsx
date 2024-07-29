"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Writer() {
  return (
    <div className="bg-[#262627] h-fit rounded-[2px] pb-3">
      <div className="flex gap-x-2 px-4 py-2 items-center">
        <Image
          src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          alt="profile"
          width={40}
          height={40}
          className="w-9 h-9 rounded-full mr-2"
        />
        <Input
          className="bg-black/50 border-white/40 h-8 placeholder:text-white/40 w-[28rem] rounded-full px-4 focus-visible:ring-0"
          placeholder="What do you want to ask or answer"
        />
      </div>
      <div className="w-full text-white/70 items-center flex justify-evenly">
        <p>Ask</p>
        <div className="h-4 w-[1px] bg-white/30"></div>
        <p>Answer</p>
        <div className="h-4 w-[1px] bg-white/30"></div>
        <p>Post</p>
      </div>
    </div>
  );
}
