
import TheNavigator from "./TheNavigator"
import useImageAssets from "../hook/useImgAssets"
function TheHero() {
    const { getAssetsFileURL } = useImageAssets()
    return (
        <section>
            <div className='when-print-hide relative w-full h-[500px] text-white flex flex-col items-center
                after:absolute after:z-0 after:w-1/2 after:h-full after:right-0 after:bg-gradient-to-bl after:from-primary-400
            '>
                <section className="z-10">
                    {/* <TheNavigator /> */}
                </section>
               <div className="relative mt-5 top-[20%] w-[150px] sm:top-0 sm:w-[300px] before:absolute before:z-10 before:top-5 before:w-[200px] before:h-[200px] sm:before:w-[400px] sm:before:h-[400px] before:bg-primary-300 before:shadow-x before:rounded-full">
                 <img className="hero-img w-full absolute z-10" src={getAssetsFileURL('me_noBg.webp')} alt="Jacky Hung" />
                 <p className="hero-title absolute z-10 text-primary-400 font-extrabold  text-6xl sm:text-8xl font-serif">Front End</p>
               </div>
            </div>
                <section className="when-print-block hidden w-full text-center">洪夢澤 (Jacky Hung) 的個人作品集</section>
        </section>
    )
}
export default TheHero