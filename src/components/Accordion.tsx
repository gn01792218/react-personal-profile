
// Initialization for ES Users
import {
  Collapse,
  initTE,
} from "tw-elements";

interface Props {
    toogleId:string,
    title: string,
    content: string,
}
function Accordion(props: Props) {    
    initTE({ Collapse });
    const { toogleId, title, content } = props
    return (
        <div id="accordionFlushExample">
            <div
                className="bg-primary-300 dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id={`flush-headingOne-${toogleId}`}>
                    <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-primary-100 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-target={ `#flush-collapseOne-${toogleId}` }
                        aria-expanded="false"
                        aria-controls={ `flush-collapseOne-${toogleId}` }>
                        { title }
                        <span
                            className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id={ `flush-collapseOne-${toogleId}` }
                    className="!visible border-0"
                    data-te-collapse-item
                    data-te-collapse-show
                    aria-labelledby={`flush-headingOne-${toogleId}`}
                    data-te-parent="#accordionFlushExample">
                    <div className="px-5 py-4">
                        {
                            content.split('\n').map(line=>(<p key={crypto.randomUUID()}>{line.replace(/ /g,'\u00a0')}</p>))
                        }
                    </div>
                </div>
            </div>
            {/* <div
                className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="flush-headingTwo">
                    <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                        Accordion Item #2
                        <span
                            className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="flush-collapseTwo"
                    className="!visible hidden border-0"
                    data-te-collapse-item
                    aria-labelledby="flush-headingTwo"
                    data-te-parent="#accordionFlushExample">
                    <div className="px-5 py-4">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the
                        <code>.accordion-flush</code> className. This is the second item's
                        accordion body. Let's imagine this being filled with some actual
                        content.
                    </div>
                </div>
            </div>
            <div
                className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="flush-headingThree">
                    <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Accordion Item #3
                        <span
                            className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div
                    id="flush-collapseThree"
                    className="!visible hidden"
                    data-te-collapse-item
                    aria-labelledby="flush-headingThree"
                    data-te-parent="#accordionFlushExample">
                    <div className="px-5 py-4">
                        Placeholder content for this accordion, which is intended to
                        demonstrate the
                        <code>.accordion-flush</code> className. This is the third item's
                        accordion body. Nothing more exciting happening here in terms of
                        content, but just filling up the space to make it look, at least
                        at first glance, a bit more representative of how this would look
                        in a real-world application.
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Accordion