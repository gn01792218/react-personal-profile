
import { projectList } from "../../../assets/constant/projectList"
import { ProjectFilterTag, FilterTag } from "../../../types/project"
import ProjectCard from "./ProjectCard"
import ProjectFilterBar from "./ProjectFilterBar"
interface Props {
    defaultExpanded:boolean
}
function ProjectList(props:Props) {
    const { defaultExpanded } = props
    const [allChecked, setAllChecked] = useState(true)
    const [filterTags, SetFilterTags] = useState<FilterTag[]>([])

    //以下相當於onMount的寫法
    useEffect(() => {
        initCheckGroupFromEnum()
    }, [])

    function initCheckGroupFromEnum() {
        const initCheckGroup = Object.values(ProjectFilterTag).map(value => {
            return {
                checked: true,
                value
            } as FilterTag
        })
        SetFilterTags(initCheckGroup)
    }

    function setAllCheckGroupCheckedValue(value:boolean){
        const nextCheckGroup:FilterTag[] = [...filterTags]
        nextCheckGroup.forEach(checkObj=>{
            checkObj.checked = value
        })
        SetFilterTags(nextCheckGroup)
    }

    function handleAllChecked() {
        setAllChecked(!allChecked)
        setAllCheckGroupCheckedValue(!allChecked)
    }

    function handleCheckGroupValue(checkIndex: number) {
        const nextCheckGroup = [...filterTags]
        nextCheckGroup[checkIndex].checked = !nextCheckGroup[checkIndex].checked
        SetFilterTags(nextCheckGroup)
    }

    return (
        <div>
            <ProjectFilterBar
                allChecked={allChecked}
                filterTags={filterTags}
                handleAllChecked={handleAllChecked}
                handleCheckGroupValue={handleCheckGroupValue}
            />
            <ul className="flex flex-wrap justify-center when-print-flexCol">
                {
                    projectList.filter(project=>{
                        const checkBoxTags = filterTags.filter(checkObj=>checkObj.checked).map(checkObj=>checkObj.value.toLocaleLowerCase())
                        return project.tags?.map(tag=>tag.toLocaleLowerCase()).some(tag=> checkBoxTags.includes(tag))
                    }).map(project => {
                        return (
                            <li
                                className="my-2 mx-2"
                                key={project.title}
                            >
                                <ProjectCard 
                                defaultExpanded={defaultExpanded}
                                project={project} 
                                filterTags={filterTags}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectList