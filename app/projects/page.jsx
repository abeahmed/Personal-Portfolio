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
      title: "paegex.com",
      description: "Patient management system, with secure data storage, and simplified appointment scheduling for healthcare providers.",
      imgUrl: "/images/paegex.png",
      gitUrl: "https://github.com/abeahmed/paegex.com",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Nginx", "Gunicorn", "Cloud"],
      link: "https://paegex.com"
    },
    {
      title: "Zooplankton Abundance Predictor",
      description: "Machine learning models predicting zooplankton abundance, and their impact on ecosystem health.",
      imgUrl: "/images/zooplankton.png",
      gitUrl: "https://github.com/abeahmed/Zooplankton-Abundance-Predictor",
      technologies: ["Python", "NumPy", "Scikit-learn", "Matplotlib", "Juptyer"]
    },
    {
      title: "abahmed.tech",
      description: "Responsive developer portfolio built with Next.js, featuring optimized performance and modern UI design patterns",
      imgUrl: "/images/portfolio.png",
      gitUrl: "https://github.com/abeahmed/portfolio-website",
      technologies: ["JavaScript", "Next.js", "TailwindCSS", "Vercel"],
      link: "/"
    },
    {
      title: "Successorator",
      description: "Native Android productivity app with SQLite integration, designed to streamline daily task management and goal tracking",
      imgUrl: "/images/successorator.png",
      gitUrl: "https://github.com/abeahmed/Successorator-Android-App",
      technologies: ["Java", "Kotlin", "Android Studio", "SQLite"]
    },
    {
      title: "Field Factor",
      description: "Statistical analysis of NFL home-field advantage using Python data science tools to identify key performance factors.",
      imgUrl: "/images/nfl.png",
      gitUrl: "https://github.com/abeahmed/FieldFactor",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"]
    },
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
