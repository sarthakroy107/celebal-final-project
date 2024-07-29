import { demoPosts } from "./data-lake";
import { Navbar } from "./navbar"
import { Post } from "./post";
import { Writer } from "./write-post";

export default function Page() {
  return (
    <main className="w-full min-h-screen">
      <Navbar /> 
      <div className="w-full flex flex-col items-center bg-[#181818] min-h-[93.5vh] gap-y-3 text-white p-5">
        <Writer />
      {
        demoPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))
      }
      </div>
    </main>
  );
}
