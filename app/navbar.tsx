"use client";
import { Input } from "@/components/ui/input";
import {
  LucideBell,
  LucideHome,
  LucideIcon,
  LucidePencil,
  LucideSearch,
  LucideUserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TNavbarLink = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export function Navbar() {
  const router = useRouter();
  const name = window.localStorage.getItem("name");
  if(!name) {
    toast.error("You need to login first");
    router.push("/login");
  }
  return (
    <nav className="w-full flex justify-center items-center bg-[#262626] py-3 text-white">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg"
        alt="Quoara"
        width={120}
        height={40}
      />
      <div className="flex gap-x-4 ml-8 mr-24">
        {navbarLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <link.icon className="w-6 h-6 cursor-pointer" />
          </Link>
        ))}
      </div>
      <div className="relative">
        <LucideSearch className="w-6 h-6 cursor-pointer absolute top-1 left-1" />
        <Input className="h-8 rounded-none px-7 bg-black" placeholder="Search" />
      </div>
      <p className="ml-3 text-sm">Welcom back, <b>{name}</b></p>
      <button className="ml-5 bg-[#f52935] px-3 rounded-full py-1 font-medium text-xs">
        Try quara premium
      </button>
    </nav>
  );
}

const navbarLinks: TNavbarLink[] = [
  {
    title: "Home",
    href: "/",
    icon: LucideHome,
  },
  {
    title: "Followers",
    href: "/",
    icon: LucideUserCheck,
  },
  {
    title: "Answer",
    href: "/",
    icon: LucidePencil,
  },
  {
    title: "Notifications",
    href: "/",
    icon: LucideBell,
  },
];
