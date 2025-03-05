import {Button} from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Link from 'next/link';


const Home = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-left justify-between xl:pt8 xl:pb-24">
        <div className = "text-left xl:text-left">
          <span className="text-accent">Hi, I'm</span>
          <h1 className="h1 mb-3">Abdullah Ahmed<span className="text-accent">.</span></h1>
          <h2 className="h2">Software Developer</h2>
          <p className="p max-w-[400px] mb-20 mt-10">Passionate about building impactful software and solving problems with code.</p>
          <Link href="/projects"> 
            <Button variant = "outline">Check out my work</Button>
          </Link>
        </div>
      </div>
  
  
    </div>
  )
}

export default Home;

