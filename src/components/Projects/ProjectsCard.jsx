import React from 'react';
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, github_link, domain }) => {
  return (
    <div className="w-full p-4 xl:px-8 h-auto rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 group hover:from-gray-900 hover:to-gray-800 transition duration-500">
      <div className="w-full h-60 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-over group-hover:scale-110 transition-transform duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 uppercase">{title}</h3>
            <p className="text-base font-medium text-gray-300">{domain}</p>
          </div>
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <BsGithub />
          </a>
        </div>
        <p className="text-sm text-gray-300 tracking-wide">{des}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
