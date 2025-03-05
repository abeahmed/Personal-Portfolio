"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const pageTransition = ({ children }) => {
    const pathname = usePathname();
    return (<AnimatePresence mode="wait">

        <div key = {pathname}> 
            <motion.div 
                intial = {{opacity: 1}} 
                animate = {{
                    opacity: 0, 
                    transition: {delay: 0.2, duration: 0.4, ease: "easeInOut"},
            }}
            className = "h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
        </div>
      
    </AnimatePresence>);
};

export default pageTransition
