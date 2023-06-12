export default function useImageUtil(){
    //動態獲取靜態圖檔
    function getAssetsFileURL(fileName:string){
        return new URL(`../assets/images/${fileName}`,import.meta.url).href
    }

    return {
        //methods
        getAssetsFileURL,
    }
}