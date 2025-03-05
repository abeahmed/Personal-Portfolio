import Link from "next/link";
import {Button} from "./ui/button"

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-main">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-semibold">
                    A<span className="text-accent">_</span>
                </h1>
                <div className="hidden md:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Contact</Button>
                    </Link>
                </div>

                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header