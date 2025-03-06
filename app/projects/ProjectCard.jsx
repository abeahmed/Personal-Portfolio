import React from 'react'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ gitUrl, imgUrl, title, description, technologies, link}) => {
  const isSameSite = link === "/"
  return (
    <div className = "py-4 px-4 w-auto bg-primary-dark rounded-xl max-w-[400px] flex flex-col">
        <div className="h-auto w-auto rounded-xl relative" >
            <img src={imgUrl} alt={title} className="rounded-xl"></img>
        </div>
        <div className="rounded-b-xl py-6 px-4 flex flex-col flex-grow">
            <h3 className="h3 mb-2">
              {link ? 
              <a href={link} target={isSameSite ? "_self" : "_blank"} rel="noopener noreferrer" className="border-b-2 border-accent hover:text-accent hover:border-b-4 transition-all">{title}</a> : title}
            </h3>
            <p className="p">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4 mb-10">
            {technologies.map((tech, index) => (
              <span key={index} className="text-sm text-primary-dark bg-accent px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
            </div>

          <div className="flex justify-center mt-auto">
            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
              <Button variant = "outline" size="default" className="text-sm">
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
