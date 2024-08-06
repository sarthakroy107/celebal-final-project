'use client';
import { demoPosts } from "./data-lake";
import { Post } from "./post";
import { Writer } from "./write-post";

export default function DisplayPost() {
  const localPosts: string[] = JSON.parse(
    window.localStorage.getItem("posts") || "[]"
  );
  const name = window.localStorage.getItem("name");
  
  return (
    <div className="w-full flex flex-col items-center bg-[#181818] min-h-[93.5vh] gap-y-3 text-white p-5">
        <Writer />
        {localPosts.map((post, index) => (
          <Post
            key={index}
            text={post}
            id={index}
            since="today"
            upvotes={0}
            username={name || "You"}
          />
        ))}
        {demoPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
  )
}