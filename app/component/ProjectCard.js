import Link from 'next/link';
import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const ProjectCard = (props) => {
  const hasGithubLink = Boolean(props.githubLink);

  return (
    <div className="project-card mb-9 lg:mb-0">
      <img src={props.picture} alt="Project" className="w-full rounded-lg h-60 object-contain" />
      <h3 className="text-xl font-bold mt-4">{props.projectTitle}</h3>
      <div className='flex justify-between mt-3'>
        <Link target="_blank" href={props.liveLink || '#'} className=" w-fit rounded-xl px-2 py-0.5 flex items-center gap-1 cursor-pointer">Live Link <IoMdArrowDropright/></Link>
        {hasGithubLink ? (
          <Link
            target="_blank"
            href={props.githubLink}
            className="border border-gray-700 w-fit rounded-xl px-2 py-1 flex items-center gap-1 hover:bg-gray-300 cursor-pointer"
          >
            Github Link<IoMdArrowDropright/>
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="border border-gray-400 text-gray-400 w-fit rounded-xl px-2 py-1 flex items-center gap-1 cursor-not-allowed"
          >
            Private Repo<IoMdArrowDropright/>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;