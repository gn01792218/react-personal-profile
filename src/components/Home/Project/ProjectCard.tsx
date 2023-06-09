
import { Project } from "../../../types/project"
interface Props {
    project: Partial<Project>
}
function ProjectItem(props: Props) {
    const { project } = props
    return (
        <div className="w-[300px] min-h-[200px] p-1 flex flex-col justify-around items-center border-2">
            <header className="text-center">
                <p>{project.title}</p>
            </header>
            <section>
                {(() => {
                    if (project.imgs) {
                        return (
                            <div>
                                <img className="" src={project.imgs[0]} alt="" />
                            </div>
                        )
                    }
                })()}
            </section>
            <footer className="w-full flex justify-around">
                <button
                    onClick={() => window.open(project.demoUrl)}
                >Demo</button>
                <button
                    onClick={() => console.log(project)}
                >Go Detail</button>
            </footer>
        </div>
    )
}
export default ProjectItem