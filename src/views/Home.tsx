import Experience from "../components/Home/Experience"
import HomeNavigator from "../components/Home/HomeNavigator"
import ProjectList from "../components/Home/Project/ProjectList"
import Skill from "../components/Home/Skill"
import { HomeNav } from "../types/navigator"
function Home() {
    const navs = ["Projects", "Skill", "Experience"]
    const [active, setActive] = useState(HomeNav.PROJECTS)

    const handleSetActive = (active:HomeNav)=>{
        setActive(active)
    }
    return (
        <div className='text-white'>
            {/* <HomeNavigator homeNavs={navs} handleActive={handleSetActive}/> */}
            {(()=>{
                switch(active){
                    case HomeNav.PROJECTS:
                        return (<ProjectList/>)
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