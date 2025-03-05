import {Button} from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Link from 'next/link';


const Home = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-left justify-between xl:pt8 xl:pb-24">
        <div className = "text-left xl:text-left">
          <span className="text-accent">Hi, I'm</span>
          <h1 className="h1 text-heading">Abdullah Ahmed.</h1>
          <h1>Software Developer</h1>
          <p className="max-w-[500px] mb-9">I'm passionate about software and love to code</p>
          <Link href="/projects"> 
            <Button variant = "outline">Check out my work</Button>
          </Link>
        </div>
      </div>
  
  
    </div>
  )
}

export default Home;

