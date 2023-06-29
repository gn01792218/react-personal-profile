import Experience from "../components/Home/Experience"
import HomeNavigator from "../components/Home/HomeNavigator"
import GoTopBtn from "../components/GoTopBtn" 
import ProjectList from "../components/Home/Project/ProjectList"
import Skill from "../components/Home/Skill"
import { HomeNav } from "../types/navigator"
function Home() {
    const navs = ["Projects", "Skill", "Experience"]
    const [active, setActive] = useState(HomeNav.PROJECTS)
    const [ defaultExpanded, setDefaultExpand ] = useState(false)
    const handleSetActive = (active:HomeNav)=>{
        setActive(active)
    }
    const print = async() => {
        await setDefaultExpand(true)
        await window.print()
        setDefaultExpand(false)
    }
    return (
        <div className='text-white'>
            <GoTopBtn/>
                <div className="print-btn"
                 onClick={print}
                >
                    <span className="transition-all duration-500">友</span>
                    善列印
                </div>
            {/* <HomeNavigator homeNavs={navs} handleActive={handleSetActive}/> */}
            {(()=>{
                switch(active){
                    case HomeNav.PROJECTS:
                        return (<ProjectList defaultExpanded={defaultExpanded}/>)
                    case HomeNav.SKILL:
                        return (<Skill/>)
                    case HomeNav.EXPERIENCE:
                        return (<Experience/>)
                }
            })()}
        </div>
    )
}
export default Home