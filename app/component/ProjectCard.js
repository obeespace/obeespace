import Image from 'next/image';
import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <Image src={props.picture} alt="Project" className="w-full h-48 object-cover" />
      <h3 className="text-xl font-bold mt-4">Project Title</h3>
      <div className='flex justify-between mt-3'>
        <p className=" w-fit rounded-xl px-2 py-0.5 flex items-center gap-1 cursor-pointer">Live Link <IoMdArrowDropright/></p>
        <p className="border border-gray-700 w-fit rounded-xl px-2 py-1 flex items-center gap-1 hover:bg-gray-700 cursor-pointer">Github Link<IoMdArrowDropright/></p>
      </div>
    </div>
  );
};

export default ProjectCard;