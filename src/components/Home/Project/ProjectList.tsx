
import { projectList } from "../../../assets/constant/projectList"
import ProjectCard from "./ProjectCard"
import ProjectFilterBar from "./ProjectFilterBar"
function ProjectList() {
    return (
        <div>
            <ProjectFilterBar/>
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