
import {
    Ripple,
    initTE,
} from "tw-elements";

function GoTopBtn() {
    initTE({ Ripple });
    const btn = useRef<HTMLButtonElement>(null)
    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, [])
    function scrollFunction() {
        if (
            document.documentElement.scrollTop > 500
        ) {
            btn.current!.style.display = "block"
        } else {
            btn.current!.style.display = "none"
        }
    }
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('回頂端',document.body.scrollTop,document.documentElement.scrollTop)
    }
    return (
        <button
            ref={btn}
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="hidden fixed z-[999] bottom-5 right-5 inline-block rounded-full
            bg-success-700 p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out 
            hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] 
            focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 
            active:bg-success-800 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] animate-bounce
            "
            onClick={backToTop}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-10 w-4"
                >
                
                <path
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    clipRule="evenodd" />
            </svg>
        </button>
    )
}
export default GoTopBtn