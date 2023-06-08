import { HomeNav } from "../../types/navigator"
interface Props{
    homeNavs:string[],
    handleActive:Function
}
function HomeNavigator(props:Props) {
    const { homeNavs, handleActive } = props
    return (
        <ul className="border-2 flex justify-center">
        {
            homeNavs.map(nav=>{
                return(
                    <li 
                    className="mr-2 cursor-pointer"
                    onClick={()=>handleActive(nav)}
                    key={nav}
                    >{nav}</li>
                )
            })
        }
        </ul>
    )
}
export default HomeNavigator