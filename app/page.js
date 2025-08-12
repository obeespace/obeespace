"use client"
import { motion } from "framer-motion";
import FloatingSocials from "./component/FloatingSocials";
import ProjectCard from "./component/ProjectCard";

export default function Home() {
  const projectsDetails = [
    {
      projectTitle: "Wizzy Gym",
      picture: "/project1.png",
      liveLink: "https://wizzygym.vercel.app/",
      githubLink: "https://github.com/obeespace/wizzygym"
    },
    {
      projectTitle: "Franald Concept",
      picture: "/project2.png",
      liveLink: "https://franald-concept.vercel.app/",
      githubLink: "https://github.com/obeespace/franald_concept"
    },
    {
      projectTitle: "Obeespace",
      picture: "/project3.png",
      liveLink: "https://obeespace.vercel.app/",
      githubLink: "https://github.com/obeespace/obeespace"
    }
  ]
  return (
    <motion.main initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} 
    className="w-5/6 mx-auto my-10">
      <div className="lg:flex justify-between">
        <p className="lg:w-2/6 lg:text-4xl text-3xl font-bold">Peep at our recent projects</p>
        <p className="lg:w-3/6 mt-2 lg:mt-0">The repayment of our clients trust in delivering above satisfactory results is our mantra</p>
      </div>

      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        {projectsDetails.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
      <FloatingSocials />

    </motion.main>
  );
}
