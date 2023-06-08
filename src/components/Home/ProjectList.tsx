
import { projectList } from "../../assets/constant/projectList"
function ProjectList() {
    return (
        <div>
            個人專案成就
            <ul>
                {
                    projectList.map(project => {
                        return (
                            <li
                            key={project.title}
                            >
                                <div>
                                    {project.title}
                                    <button
                                    onClick={()=>window.open(project.demoUrl)}
                                    >Demo</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectList