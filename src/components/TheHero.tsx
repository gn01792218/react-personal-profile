
import TheNavigator from "./TheNavigator"
import useImageAssets from "../hook/useImgAssets"
function TheHero() {
    const { getAssetsFileURL } = useImageAssets()
    return (
        <div className='relative w-full h-[500px] text-white flex flex-col items-center
            after:absolute after:z-0 after:w-1/2 after:h-full after:right-0 after:bg-gradient-to-bl after:from-primary-400
        '>
            <section className="z-10">
                <TheNavigator />
            </section>
           <div className="relative w-[150px] sm:w-[300px] before:absolute before:z-10 before:top-5 before:w-[200px] before:h-[200px] sm:before:w-[400px] sm:before:h-[400px] before:bg-primary-300 before:shadow-x before:rounded-full">
             <img className=" drop-shadow-hero w-full absolute z-10" src={getAssetsFileURL('me_noBg.png')} alt="Jacky Hung" />
             <p className="hero-title absolute z-10 text-primary-400 font-extrabold left-[-40%] top-[150px] text-6xl sm:left-[-130px] sm:top-[200px] sm:text-8xl font-serif">Front End</p>
           </div>
        </div>
    )
}
export default TheHero