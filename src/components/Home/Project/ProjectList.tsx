
import { projectList } from "../../../assets/constant/projectList"
import { ProjectFilterTag, AdvanceFilterTag } from "../../../types/project"
import ProjectCard from "./ProjectCard"
import ProjectAdvanceFilterBar from "./ProjectAdvanceFilterBar"

function ProjectList() {
    const [allChecked, setAllChecked] = useState(true)
    const [advanceFilterTags, SetAdvanceFilterTags] = useState<AdvanceFilterTag[]>([])
    
    //以下相當於onMount的寫法
    useEffect(() => {
        initCheckGroupFromEnum()
    }, [])

    function initCheckGroupFromEnum() {
        const initCheckGroup = Object.values(ProjectFilterTag).map(value => {
            return {
                checked: true,
                value
            } as AdvanceFilterTag
        })
        SetAdvanceFilterTags(initCheckGroup)
    }

    function setAllCheckGroupCheckedValue(value:boolean){
        const nextCheckGroup:AdvanceFilterTag[] = [...advanceFilterTags]
        nextCheckGroup.forEach(checkObj=>{
            checkObj.checked = value
        })
        SetAdvanceFilterTags(nextCheckGroup)
    }

    function handleAllChecked() {
        setAllChecked(!allChecked)
        setAllCheckGroupCheckedValue(!allChecked)
    }

    function handleCheckGroupValue(checkIndex: number) {
        const nextCheckGroup = [...advanceFilterTags]
        nextCheckGroup[checkIndex].checked = !nextCheckGroup[checkIndex].checked
        SetAdvanceFilterTags(nextCheckGroup)
    }

    return (
        <div>
            <ProjectAdvanceFilterBar
                allChecked={allChecked}
                filterTags={advanceFilterTags}
                handleAllChecked={handleAllChecked}
                handleCheckGroupValue={handleCheckGroupValue}
            />
            <ul className="flex flex-wrap justify-center">
                {
                    projectList
                    .filter(project=>{  //1.根據advanceFilterTages篩選
                        const checkBoxTags = advanceFilterTags.filter(checkObj=>checkObj.checked).map(checkObj=>checkObj.value.toLocaleLowerCase())
                        return project.tags?.map(tag=>tag.toLocaleLowerCase()).some(tag=> checkBoxTags.includes(tag))
                    }).map(project => {
                        return (
                            <li
                                className="my-2 mx-2"
                                key={project.title}
                            >
                                <ProjectCard 
                                project={project} 
                                filterTags={advanceFilterTags}
                                />
                            </li>
                        )
                    }).length?"":"搜尋不到任何項目"
                }
            </ul>
        </div>
    )
}
export default ProjectList