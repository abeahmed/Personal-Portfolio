import React from 'react'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ gitUrl, imgUrl, title, description, technologies, link}) => {
  return (
    <div className = "py-4 px-4 w-[350]">
        <div className="h-[300] w-full rounded-xl relative" 
            style={{ background: `url(${imgUrl}) center / cover` }}>
        </div>
        <div className=" bg-primary rounded-b-xl py-6 px-4">
            <h3 className="h3 text-heading mb-2">
              {link ? <a href={link} target="_blank" className="hover:text-accent">{title}</a> : title}
            </h3>
            <p>{description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs text-primary bg-accent px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
            </div>

          <div className="flex justify-center mt-4">
            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
              <Button variant = "outline" size="default" className="mb-3 text-xs">
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard
