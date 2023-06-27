// Initialization for ES Users
import { AccordionItem } from "../types/component";
//控制是否折疊的初始值
//參考官網範例 : https://tailwind-elements.com/docs/standard/components/accordion/ 依據範例調整
//
interface Props {
    //By default, an accordion item will collapse when you click on another accordion item. 
    //If you want to change it, and keep the accordion items open until they are explicitly clicked on, 
    //you can delete the data-te-parent from the collapsing div.
    alwaysOpen: boolean, //控制是否保持常開，不因點到別的項目就自動收合
    //each item's expanded or not is controlled by blow key points :
    //aria-expanded、data-te-collapse-show、data-te-collapse-collapsed、css class [hidden]
    //and need to also set default toogle by javascript
    //this option can controll all item's expanded
    defaultExpanded: boolean,
    accordionId: string,
    accordionList: AccordionItem[]
}
import {
    Collapse,
    initTE,
} from "tw-elements";
function Accordion(props: Props) {
    const { accordionId, accordionList, alwaysOpen, defaultExpanded } = props
    useEffect(() => {
        initTE({ Collapse });
        initToogle()
    }, [])
    function initToogle() {
        //if default expanded is false, toogle must be true
        const collapseElementList = [].slice.call(document.querySelectorAll('[data-te-collapse-item]'))
        collapseElementList.map((collapseEl) => {
            return new Collapse(collapseEl, {
                toggle: !defaultExpanded,
            });
        });
    }
    return (
        <div id={`accordion-${accordionId}`}>
            {
                accordionList.map((item, index) => {
                    return (
                        <div
                            key={crypto.randomUUID()}
                            className="when-print-bg-light bg-primary-800 dark:bg-neutral-800">
                            <h2 className="mb-0" id={`flush-heading-${index}-${accordionId}`}>
                                <button
                                    className="when-print-text-white group relative flex justify-center w-full items-center rounded-none border-0 bg-primary-800 
                                    px-5 py-4 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] 
                                    focus:outline-none dark:bg-neutral-800 dark:text-white 
                                    [&:not([data-te-collapse-collapsed])]:bg-primary-300 
                                    [&:not([data-te-collapse-collapsed])]:text-primary-100 
                                    dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 
                                    dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 
                                    dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                    type="button"
                                    data-te-collapse-init
                                    data-te-collapse-collapsed={defaultExpanded}
                                    aria-expanded={defaultExpanded}
                                    data-te-target={`#flush-collapse-${index}-${accordionId}`}
                                    aria-controls={`flush-collapse-${index}-${accordionId}`}
                                >
                                    {item.title}
                                    <span
                                        className="ml-5 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out 
                                        group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 
                                        group-[[data-te-collapse-collapsed]]:fill-primary-900 motion-reduce:transition-none 
                                        dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1"
                                            stroke="currentColor"
                                            className="h-6 w-6 fill-acent-500">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <div
                                id={`flush-collapse-${index}-${accordionId}`}
                                className={['!visible border-0', defaultExpanded ? '' : 'hidden'].join(' ')}
                                data-te-collapse-item
                                data-te-collapse-show={defaultExpanded}
                                aria-labelledby={`flush-heading-${index}-${accordionId}`}
                                data-te-parent={alwaysOpen ? '' : `#accordion-${accordionId}`}
                            >
                                <div className="when-print-text-black text-primary-100 px-5 py-4">
                                    {
                                        item.content.split('\n').map(line => (<p key={crypto.randomUUID()}>{line.replace(/ /g, '\u00a0')}</p>))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Accordion