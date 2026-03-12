import FloatingSocials from "./component/FloatingSocials";
import ProjectCard from "./component/ProjectCard";
import AnimatedMain from "./component/AnimatedMain";

export const metadata = {
  title: "Projects",
  description:
    "Recent projects delivered by Obeespace across healthcare, SaaS, e-commerce, and business operations.",
  alternates: {
    canonical: "/",
  },
};

const projectsDetails = [
  {
    projectTitle: "Psalm23Care",
    picture: "/project10.jpg",
    liveLink: "https://www.psalm23careservices.com/",
  },
  {
    projectTitle: "Forward Falls",
    picture: "/project9.jpg",
    liveLink: "https://www.forwardfalls.com",
  },
  {
    projectTitle: "eineos",
    picture: "/project5.jpg",
    liveLink: "https://www.iponigeria.com/",
  },
  {
    projectTitle: "Skyline Innovations",
    picture: "/project6.jpg",
    liveLink: "https://skyline-pied-ten.vercel.app/",
  },
  {
    projectTitle: "Nzeoma Solar Solutions",
    picture: "/project7.jpg",
    liveLink: "https://nzeoma.vercel.app/",
  },
  {
    projectTitle: "Desko Smart Lock",
    picture: "/project4.PNG",
    liveLink: "https://www.deskosecure.com/",
  },
  {
    projectTitle: "Wizzy Gym",
    picture: "/project1.png",
    liveLink: "https://wizzygym.vercel.app/",
    githubLink: "https://github.com/obeespace/wizzygym",
  },
  {
    projectTitle: "Everything Chic",
    picture: "/project8alt.jpg",
    liveLink: "https://everything-chic.vercel.app",
  },
  {
    projectTitle: "Franald Concept",
    picture: "/project2.png",
    liveLink: "https://franald-concept.vercel.app/",
    githubLink: "https://github.com/obeespace/franald_concept",
  },
  {
    projectTitle: "Obeespace",
    picture: "/project3.png",
    liveLink: "https://obeespace.com/",
    githubLink: "https://github.com/obeespace/obeespace",
  },
];

export default function Home() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Obeespace Projects",
    itemListElement: projectsDetails.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.projectTitle,
      url: project.liveLink,
    })),
  };

  return (
    <AnimatedMain
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-5/6 mx-auto my-10"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="lg:flex justify-between">
        <p className="lg:w-2/6 lg:text-4xl text-3xl font-bold">Peep at our recent projects</p>
        <p className="lg:w-3/6 mt-2 lg:mt-0">
          The repayment of our clients trust in delivering above satisfactory
          results is our mantra
        </p>
      </div>

      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        {projectsDetails.map((project, index) => (
          <ProjectCard key={project.projectTitle} index={index} {...project} />
        ))}
      </div>
      <FloatingSocials />
    </AnimatedMain>
  );
}
