"use client";
import { cn } from "@/lib/utils";
import {
  LucideArrowBigDown,
  LucideArrowBigUp,
  LucideMessageCircle,
  LucideRepeat,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { TPost } from "./data-lake";

export function Post({ id, since, text, upvotes, username, image }: TPost) {
  const [vote, setVote] = useState<"liked" | "disliked" | "none">("none");
  const [hidden, setHiddhen] = useState(true);
  return (
    <div className="w-[33rem] bg-[#262627] rounded-[2px] py-1.5">
      <div className="flex items-center gap-x-2 px-3">
        <Image
          src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          alt="Profile Picture"
          width={50}
          height={50}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-lg font-medium">{username}</p>
          <p className="text-xs text-white/70">Member since {since}</p>
        </div>
      </div>
      {hidden && text.length > 100 ? (
        <p className="px-4 py-1.5 text-sm text-white/90">
          {text.slice(0, 200) + "..."}
          <button
            onClick={() => setHiddhen(false)}
            className="text-blue-400 hover:underline"
          >
            see more
          </button>
        </p>
      ) : (
        <p className="px-4 py-1.5 text-sm text-white/90">{text}</p>
      )}
      {image && (
        <div className="p-1.5">
          <Image
            src={image}
            alt="Post Image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      )}
      <div className="flex items-center px-2 py-1">
        <div className="px-3 rounded-full border border-white/20 flex items-center gap-x-2">
          <button
            onClick={() => {
              if (vote === "liked") {
                setVote("none");
              } else {
                setVote("liked");
              }
            }}
            className="flex items-center"
          >
            <LucideArrowBigUp
              className={cn(vote === "liked" && "text-[#f52925]")}
              size={25}
            />
            <p className={cn("text-sm", vote === "liked" && "text-[#f52925]")}>
              {
                {
                  liked: upvotes + 1,
                  disliked: upvotes - 1,
                  none: upvotes,
                }[vote]
              }
            </p>
          </button>
          <div className="h-4 w-[1px] bg-white/30"></div>
          <LucideArrowBigDown
            className={cn(
              vote === "disliked" && "text-[#f52925]",
              "cursor-pointer"
            )}
            onClick={() =>
              vote === "disliked" ? setVote("none") : setVote("disliked")
            }
            size={25}
          />
        </div>
        <LucideMessageCircle size={20} className="mx-4" />
        <LucideRepeat size={20} />
      </div>
    </div>
  );
}
