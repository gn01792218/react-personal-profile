
import { FilterTag, Project } from "../../../types/project"
interface Props {
    project: Partial<Project>,
    filterTags:FilterTag[]
}
function ProjectItem(props: Props) {
    const { project, filterTags } = props
    return (
        <div className="w-[475px] h-[350px] p-1 flex flex-col justify-around items-center border-2">
            <header className="text-center">
                <p>{project.title}</p>
                <ul className="flex flex-wrap justify-between">
                {
                    project.tags?.map(tag=>{
                        return (
                            <li className={[
                                "px-1 cursor-pointer",
                                filterTags.map(filterTagItem=>{
                                    filterTagItem.value.toLocaleLowerCase()
                                    return filterTagItem
                                }).some(filterTagItem=>filterTagItem.value.toLocaleLowerCase().includes(tag.toLocaleLowerCase()) && filterTagItem.checked)?"text-yellow-200":"text-gray-400"
                            ].join(' ')}>{tag}</li>
                        )
                    })
                }
                </ul>
            </header>
            <section>
                {(() => {
                    if (project.imgs) {
                        return (
                            <div className="flex justify-center">
                                <img className="w-[80%]" src={project.imgs[0]} alt="" />
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