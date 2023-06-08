
import { projectList } from "../../assets/constant/projectList"
import ProjectCard from "./ProjectCard"
function ProjectList() {
    return (
        <div>
            <ul className="flex flex-col items-center">
                {
                    projectList.map(project => {
                        return (
                            <li
                            className="my-2"
                            key={project.title}
                            >
                                <ProjectCard project={project}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectList