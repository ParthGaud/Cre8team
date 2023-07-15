import { Project } from "@/types"
import ProjectClient from "./ProjectClient"
import getProjects from "@/actions/getProjects"

const Projects = async () => {
    const projects : Project[] | null = await getProjects()
    return (
        <div>
            <ProjectClient projects={projects} />
        </div>
    )
}

export default Projects