
import { log } from "console"
import { projectList } from "../../../assets/constant/projectList"
import { ProjectFilterTag, Check } from "../../../types/project"
import ProjectCard from "./ProjectCard"
import ProjectFilterBar from "./ProjectFilterBar"

function ProjectList() {
    const [allChecked, setAllChecked] = useState(true)
    const [checkGroup, SetCheckGroup] = useState<Check[]>([])
    
    //以下相當於onMount的寫法
    useEffect(() => {
        initCheckGroupFromEnum()
    }, [])

    function initCheckGroupFromEnum() {
        const initCheckGroup = Object.values(ProjectFilterTag).map(value => {
            return {
                checked: true,
                value
            } as Check
        })
        SetCheckGroup(initCheckGroup)
    }

    function setAllCheckGroupCheckedValue(value:boolean){
        const nextCheckGroup:Check[] = [...checkGroup]
        nextCheckGroup.forEach(checkObj=>{
            checkObj.checked = value
        })
        SetCheckGroup(nextCheckGroup)
    }

    function handleAllChecked() {
        console.log('allChecked')
        setAllChecked(!allChecked)
        setAllCheckGroupCheckedValue(!allChecked)
    }

    function handleCheckGroupValue(checkIndex: number) {
        console.log(checkIndex)
        const nextCheckGroup = [...checkGroup]
        nextCheckGroup[checkIndex].checked = !nextCheckGroup[checkIndex].checked
        SetCheckGroup(nextCheckGroup)
    }

    return (
        <div>
            <ProjectFilterBar
                allChecked={allChecked}
                checkGroup={checkGroup}
                handleAllChecked={handleAllChecked}
                handleCheckGroupValue={handleCheckGroupValue}
            />
            <ul className="flex flex-col items-center">
                {
                    projectList.filter(project=>{
                        const checkBoxTags = checkGroup.filter(checkObj=>checkObj.checked).map(checkObj=>checkObj.value.toLocaleLowerCase())
                        return project.tags?.map(tag=>tag.toLocaleLowerCase()).some(tag=> checkBoxTags.includes(tag))
                    }).map(project => {
                        return (
                            <li
                                className="my-2"
                                key={project.title}
                            >
                                <ProjectCard project={project} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ProjectList