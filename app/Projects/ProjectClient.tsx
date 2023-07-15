"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { Project } from "@/types";
import React, { useContext } from "react";
import ProjectItem from "@/components/ProjectItem";
import { userContext } from "../hooks/useUser";
import { useRouter } from "next/navigation";
import useProject from "../hooks/useProject";
import CreateProject from "@/components/CreateProject";

interface ProjectClientProps {
  projects: Project[] | null;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ projects }) => {
  const context = useContext(userContext)
  const router = useRouter()
  const {isOpen, onOpen} = useProject()
  if (projects == null || projects.length === 0) {
    return (
      <Container>
        <div className="flex items-center justify-center text-sm text-neutral-500 font-semibold h-[80vh]">
          No project found
        </div>
      </Container>
    );
  }

  const createProject = () => {
    if(!context?.user){
        router.push('/login')
    }
    onOpen()
  }
  return (
    <>
    <Container>
      <div className="">
        <div className="bg-blue-100 md:px-24 lg:px-40 xl:px-96 px-10">
          <h1 className="text-3xl font-semibold pt-8">
            Find and Create Projects
          </h1>
          <div className="py-5">
            <Button className="bg-blue-600 px-4 py-2  rounded-2xl text-white font-normal" onClick={createProject}>
              Create Post
            </Button>
          </div>
        </div>
        <div className="md:px-24 lg:px-40 xl:px-64 mt-8 px-10 flex flex-col gap-y-2">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
      </div>
      <div className=""></div>
    </Container>
    <CreateProject />
    </>
  );
};

export default ProjectClient;
