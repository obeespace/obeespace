import Link from 'next/link';
import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const ProjectCard = (props) => {
  return (
    <div className="project-card mb-9 lg:mb-0">
      <img src={props.picture} alt="Project" className="w-full rounded-lg h-48 object-contain" />
      <h3 className="text-xl font-bold mt-4">Project Title</h3>
      <div className='flex justify-between mt-3'>
        <Link target="_blank" href={props.picturelink || '#'} className=" w-fit rounded-xl px-2 py-0.5 flex items-center gap-1 cursor-pointer">Live Link <IoMdArrowDropright/></Link>
        <Link target="_blank" href={props.githubLink || '#'} className="border border-gray-700 w-fit rounded-xl px-2 py-1 flex items-center gap-1 hover:bg-gray-700 cursor-pointer">Github Link<IoMdArrowDropright/></Link>
      </div>
    </div>
  );
};

export default ProjectCard;