import ProjectCard from "./ProjectCard";
import PageTransition from "@/components/PageTransition";

  const projects = [
    {
      title: "paegex.com",
      description: "Web-based patient management application.",
      imgUrl: "/images/paegex.png",
      gitUrl: "https://github.com/abeahmed/paegex",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Nginx", "Gunicorn", "Cloud"],
      link: "https://paegex.com"
    },
    {
      title: "abahmed.net",
      description: "My portfolio website",
      imgUrl: "/images/portfolio.png",
      gitUrl: "https://github.com/abeahmed/portfolio-website",
      technologies: ["JavaScript", "Next.js", "TailwindCSS", "Vercel"],
      link: "/"
    },
    {
      title: "Zooplankton Abundance Predictor",
      description: "ML models predicting zooplankton abundance.",
      imgUrl: "/images/zooplankton.png",
      gitUrl: "https://github.com/abeahmed/Zooplankton-Abundance-Predictor",
      technologies: ["Python", "NumPy", "Scikit-learn", "Matplotlib", "Juptyer"]
    },
    {
      title: "Successorator",
      description: "Android-based task management application.",
      imgUrl: "/images/successorator.png",
      gitUrl: "https://github.com/abeahmed/Successorator-Android-App",
      technologies: ["Java", "Kotlin", "Android Studio", "SQLite"]
    },
    {
      title: "Field Factor",
      description: "Data-driven analysis of home-field advantage in the NFL.",
      imgUrl: "/images/nfl.png",
      gitUrl: "https://github.com/abeahmed/FieldFactor",
      technologies: ["Pandas", "Matplotlib", "Seaborn", "Jupyter"]
    },
  ];

  const Projects = () => {
    return (
      <div className = "container mx-auto h-full max-w-screen-lg">
        <h3 className="h3 text-center mb-20">My Projects:</h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
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
