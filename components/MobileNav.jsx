"use client";

import {Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';
import { useState } from 'react';
import {VisuallyHidden} from '@radix-ui/react-visually-hidden';


const links = [
    {
        name: "home",
        path: "/",
    },
   /* {
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
	{
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
	const [isOpen, setOpen] = useState(false);
	const pathname = usePathname();
  return (
	<Sheet open={isOpen} onOpenChange={setOpen}>
		<SheetTrigger>
			<FiMenu className = "text-[35px] text-accent"/>
		</SheetTrigger>
		<SheetContent className = "flex flex-col py-20">
		<VisuallyHidden><SheetTitle>Explore</SheetTitle></VisuallyHidden>
			{links.map((link, index)=> {
				return (
				<SheetClose key={index}>
					<Link href={link.path} key={index}
					onClick={() => setOpen(false)}
					className={`${link.path === pathname && 
					"text-accent border-b-2 border-accent"} capitalize nav hover:text-accent
					transition-all`}>
					{link.name}
					</Link>
				</SheetClose>

				);
  })}
		</SheetContent>
	</Sheet>
	);
}

export default MobileNav
