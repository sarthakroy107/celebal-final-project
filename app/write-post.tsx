"use client";

import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Writer() {
  const [text, setText] = useState("");
  const router = useRouter();
  const addPostToLocalStorage = (text: string) => {
    if (!text || text.length === 0) return;
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.push(text);
    localStorage.setItem("posts", JSON.stringify(posts));
  };
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
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-black/50 border-white/40 h-10 placeholder:text-white/40 w-[28rem] rounded-full px-4 focus-visible:ring-0 text-sm text-white/30 flex items-center">
              What do you want to ask and answer?
            </button>
          </DialogTrigger>
          <DialogContent className="bg-black/50 text-white">
            <p className="text-white">Post</p>
            <Textarea
              onChange={(e) => setText(e.target.value)}
              className="bg-black/20"
              placeholder="Write your post"
            />
            <p>Image</p>
            <Input type="file" className="bg-black/20" />
            <p className="text-white/40 text-xs">
              Local storage will not support it :(
            </p>
            <DialogClose
              onClick={() => {
                addPostToLocalStorage(text);
                setText("");
                router.refresh();
              }}
              className="px-3 py-1 rounded-full bg-blue-400 text-white"
            >
              Post
            </DialogClose>
          </DialogContent>
        </Dialog>
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
