import ProjectCard from "./component/ProjectCard";

export default function Home() {
  return (
    <main className="w-5/6 mx-auto my-10">
      <div className="flex justify-between">
        <p className="w-2/6 text-4xl font-bold">Peep at our recent projects</p>
        <p className="w-3/6">The repayment of our clients trust in delivering above satisfactory results is our mantra</p>
      </div>

      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}
