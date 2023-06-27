import Experience from "../components/Home/Experience"
import HomeNavigator from "../components/Home/HomeNavigator"
import ProjectList from "../components/Home/Project/ProjectList"
import Skill from "../components/Home/Skill"
import { HomeNav } from "../types/navigator"
function Home() {
    const navs = ["Projects", "Skill", "Experience"]
    const [active, setActive] = useState(HomeNav.PROJECTS)
    const [ allCardExpand, setAllCardExpand ] = useState(false)
    const handleSetActive = (active:HomeNav)=>{
        setActive(active)
    }
    const print = async() => {
        await setAllCardExpand(true)
        await window.print()
        setAllCardExpand(false)
    }
    return (
        <div className='text-white'>
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
                        return (<ProjectList expandAllCardAccordin={allCardExpand}/>)
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