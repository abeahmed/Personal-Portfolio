"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    /*{
        name: "about",
        path: "/about",
    },*/
    {
        name: "projects",
        path: "/projects",
    },
    /*{
        name: "resume",
        path: "/resume",
    },*/
]

const Nav = () => {
   const pathname = usePathname();
   console.log(pathname);
  return (
    <nav className = "flex gap-8">
        {links.map((link, index)=> {
            return (
            <Link href={link.path} key={index} className={`${link.path === pathname && 
            "text-accent border-b-2 border-accent"} nav capitalize hover:text-accent
            transition-all`}
            >
                {link.name}
            </Link>
            );
        })}
    </nav>
  )
}

export default Nav
