import { Project } from "@/types";
import React from "react";
import {BiRightArrow} from 'react-icons/bi'

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="flex items-center justify-between p-8 bg-blue-100 hover:bg-blue-200 group rounded-2xl transform-gpu hover:scale-105 transition-all cursor-pointer">
        <div className="font-semibold">
            {project.title}
        </div>
        <div>
            <BiRightArrow size={30} className="group-hover:transform group-hover:translate-x-4 transition text-slate-600" />
        </div>
    </div>
  )
};
export default ProjectItem;
