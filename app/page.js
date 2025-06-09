import FloatingSocials from "./component/FloatingSocials";
import ProjectCard from "./component/ProjectCard";

export default function Home() {
  return (
    <main className="w-5/6 mx-auto my-10">
      <div className="lg:flex justify-between">
        <p className="lg:w-2/6 lg:text-4xl text-3xl font-bold">Peep at our recent projects</p>
        <p className="lg:w-3/6 mt-2 lg:mt-0">The repayment of our clients trust in delivering above satisfactory results is our mantra</p>
      </div>

      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        <ProjectCard picture="/project1.png" picturelink="https://wizzygym.vercel.app/" githubLink="https://github.com/obeespace/wizzygym" />
        <ProjectCard picture="/project2.png" picturelink="https://franald-concept.vercel.app/" githubLink="https://github.com/obeespace/franald_concept" />
        <ProjectCard picture="/project3.png" picturelink="https://obeespace.vercel.app/" githubLink="https://github.com/obeespace/obeespace" />
      </div>
      <FloatingSocials />

    </main>
  );
}
