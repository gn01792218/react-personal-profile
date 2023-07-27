
import TheNavigator from "./TheNavigator"
import useImageAssets from "../hook/useImgAssets"
function TheHero() {
    useEffect(()=>{
        scrollHandler()
        window.addEventListener('scroll',scrollHandler)
    },[])
    function scrollHandler(){
        let bg = document.getElementById('bg') as HTMLImageElement
        let layer1 = document.getElementById('layer1') as HTMLImageElement
        let layer2 = document.getElementById('layer2') as HTMLImageElement
        let layer3 = document.getElementById('layer3') as HTMLImageElement
        let projectBtn = document.getElementById('project-btn') as HTMLImageElement
        let webTitle = document.getElementById('web-title') as HTMLImageElement
        let value = window.scrollY 
        // 所謂的視差滾動，就是根據你的scroll量，來移動你要移動的部分
        bg.style.top = value + 'px'  //滾動時被背景圖會往下移動
        layer1.style.transform = `translateY(${-value*0.7}px)`  //隨滾動量越大，越往上走
        layer2.style.transform = `translateY(${-value*0.5}px)`  //隨滾動量越大越往上走
        layer3.style.bottom = -10+'px'  //地球2隨滾動量越大越往上走
        projectBtn.style.transform = `translateY(${-value*0.5}px)`
        webTitle.style.transform = `translateY(${-value*0.5}px)`
    }
    const { getAssetsFileURL } = useImageAssets()
    return (
        <div className="overflow-hidden after:absolute after:top-[100%] after:w-full after:h-[50px] after:bg-gradient-to-b after:from-black after:to-primary-900">
            <div className='when-print-hide relative w-full h-screen text-white flex flex-col items-center overflow-hidden'>
                <section className="z-10">
                    {/* <TheNavigator /> */}
                </section>
                <img id="bg" className="absolute pointer-events-none top-0 left-0 w-full h-full object-cover" src={getAssetsFileURL('space.webp')}/>
                <img id="layer1" className="absolute bottom-[-30%] md:bottom-[-10%] xl:bottom-[-20%] pointer-events-none w-[30%] mix-blend-plus-lighter" src={getAssetsFileURL('sun.webp')}/>
                <img id="layer2" className="absolute bottom-[-60%] xl:bottom-[-160%] pointer-events-none w-full" src={getAssetsFileURL('venus.webp')}/>
                <a id="project-btn" href="#routers-view" className="btn-size absolute w-[150px] h-[50px] top-[60%] flex justify-center items-center text-2xl text-acent-200 font-bold rounded-full bg-secondary-900 px-2">個人作品集</a>
                <p id="web-title" className="hero-title absolute bottom-[-25%] sm:bottom-[-2%] xl:bottom-[8.5%] text-primary-400 font-extrabold text-5xl sm:text-8xl font-serif">Jacky Houng</p>
                <img id="layer3" className="absolute pointer-events-none" src={getAssetsFileURL('earth-hide.webp')}/>
            </div>
               {/* <div className="relative mt-5 top-[50%] w-[150px] sm:top-0 sm:w-[300px] before:absolute before:z-10 before:top-5 before:w-[200px] before:h-[200px] sm:before:w-[400px] sm:before:h-[400px] before:bg-primary-300 before:shadow-x before:rounded-full">
                 <img className="hero-img w-full absolute z-10" src={getAssetsFileURL('me_noBg.webp')} alt="Jacky Hung" />
                 <p className="hero-title absolute z-10 text-primary-400 font-extrabold  text-6xl sm:text-8xl font-serif">Frontend作品集</p>
               </div> */}
            <section className="when-print-block hidden w-full text-center">洪夢澤 (Jacky Hung) 的個人作品集</section>
        </div>
    )
}
export default TheHero