
import { FilterTag, Project } from "../../../types/project"
import Accordion from "../../Accordion"
interface Props {
    project: Partial<Project>,
    filterTags: FilterTag[],
    defaultExpanded:boolean
}
function ProjectItem(props: Props) {
    const { project, filterTags, defaultExpanded: expandAllAccordionItem } = props
    return (
        <div className="project-card flex flex-col w-full overflow-hidden sm:w-[450px] p-1  border-2 rounded-3xl">
            <header className="flex flex-col items-center">
                <p className="when-print-text-black">{project.title}</p>
                <ul className="w-[80%] min-h-[50px] flex flex-wrap justify-str items-center">
                    {
                        project.tags?.map(tag => {
                            return (
                                <li
                                    key={crypto.randomUUID()}
                                    className={[
                                        "px-1 cursor-pointer",
                                        filterTags.map(filterTagItem => {
                                            filterTagItem.value.toLocaleLowerCase()
                                            return filterTagItem
                                        }).some(filterTagItem => filterTagItem.value.toLocaleLowerCase().includes(tag.toLocaleLowerCase()) && filterTagItem.checked) ? "text-yellow-200" : "text-gray-400"
                                    ].join(' ')}>{tag}</li>
                            )
                        })
                    }
                </ul>
            <section>
                {(() => {
                    if (project.imgs) {
                        return (
                            <div className="flex justify-center">
                                <img className="sm:w-[80%]" src={project.imgs[0]} alt="" />
                            </div>
                        )
                    }
                })()}
            </section>
            </header>
            <footer className="w-full">
                <section className="when-print-hide w-full flex justify-around">
                    <button className="relative hover:text-acent
                    before:animate-ping before:absolute before:right-[-5px] before:top-[6px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-success
                    after:absolute after:right-[-5px] after:top-[6px] after:w-[10px] after:h-[10px] after:rounded-full after:bg-success
                    "

                        onClick={() => window.open(project.demoUrl)}
                    >Demo</button>
                    <a className="cursor-pointer"
                        href={project.repoUrl}
                        target="_blank">
                        <svg className="hover:animate-pulse hover:fill-acent" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64" fill="white">
                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                        </svg>
                    </a>
                </section>
                <section>
                    <Accordion
                        defaultExpanded={expandAllAccordionItem}
                        alwaysOpen={true}
                        accordionId={project.id as string}
                        accordionList={[
                            {
                                title: '專案特色',
                                content: project.projectFeatureDescription!
                            },
                            {
                                title: '技術說明',
                                content: project.projectTechnologyDescription!
                            },
                            {
                                title: '未來規劃',
                                content: project.projectFutureDescription!
                            }
                        ]}
                    />
                </section>
            </footer>
        </div>
    )
}
export default ProjectItem