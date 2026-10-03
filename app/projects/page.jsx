import ProjectCard from "./ProjectCard";
import PageTransition from "@/components/PageTransition";

  const projects = [
    {
      title: "Confra",
      description: "Event management and analytics platform, streamlining event hosting and attendee tracking for organizers.",
      imgUrl: "/images/Confra.png",
      gitUrl: "https://github.com/abeahmed/Confra",
      technologies: ["Node.js", "MongoDB", "Express.js", "React", "TailwindCSS", "Axios"],
    },
    {
      title: "Paegex",
      description: "Patient management system, with secure data storage, and simplified appointment scheduling for healthcare providers.",
      imgUrl: "/images/paegex.png",
      gitUrl: "https://github.com/abeahmed/paegex.com",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Nginx", "Gunicorn", "Cloud"],
    }
  ];

  const Projects = () => {
    return (
      <div className = "container mx-auto h-full max-w-screen-lg py-8">

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {projects.map((project, index) => (
                <ProjectCard key={index}
                  title={project.title} 
                  description={project.description} 
                  imgUrl={project.imgUrl} 
                  gitUrl={project.gitUrl}
                  technologies={project.technologies}
                  link = {project.link}
                />
            ))}
       
          </div>
      </div>
    );
  }

export default Projects;
