import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const ProjectCard = (props) => {
  const hasGithubLink = Boolean(props.githubLink);
  const shouldPrioritizeImage = props.index < 3;

  return (
    <div className="project-card mb-9 lg:mb-0">
      <Image
        src={props.picture}
        alt={props.projectTitle}
        width={600}
        height={360}
        priority={shouldPrioritizeImage}
        loading={shouldPrioritizeImage ? "eager" : "lazy"}
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="w-full rounded-lg h-60 object-contain"
      />
      <h3 className="text-xl font-bold mt-4">{props.projectTitle}</h3>
      <div className='flex justify-between mt-3'>
        <Link target="_blank" rel="noopener noreferrer" href={props.liveLink || '#'} className=" w-fit rounded-xl px-2 py-0.5 flex items-center gap-1 cursor-pointer">Live Link <IoMdArrowDropright/></Link>
        {hasGithubLink ? (
          <Link
            target="_blank"
            rel="noopener noreferrer"
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