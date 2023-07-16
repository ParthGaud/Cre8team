import getProjectWithId from "@/actions/getProjectWithId"
import Project from "@/components/Project"

const ProjectWithId = async ({params} : {params : {id: string}}) => {
    const project = await getProjectWithId(params.id)
    return (
        <Project project={project} />
    )
}
export default ProjectWithId