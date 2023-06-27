import { FilterTag } from "../../../types/project"
interface Props {
    allChecked: boolean,
    filterTags: FilterTag[],
    handleAllChecked: Function,
    handleCheckGroupValue: Function
}
function ProjectFilterBar(props: Props) {
    const { allChecked, filterTags, handleAllChecked, handleCheckGroupValue } = props
    const [isShowFilter, setIsShowFilter] = useState(false)
    return (
        <div className="w-full flex when-print-hide">
            <section className="w-[64px]">
                <img className={[
                    "cursor-pointer",
                    isShowFilter ? "opacity-100" : "opacity-50"
                ].join(" ")}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApUlEQVR4nO3YwQ3DIAxAUQ/gObIB2Yq5skRir9JN3EtVRVUPCBFat/9JPiJhGYyFCACk5kUPXzWeUfSQTPy8+UfIN4gq0RLvEli22/AQEqhUIKYeofSXuJWvur8ksDcvBgD0sKJ2br1W1CSTKY9fNE6jPdEzwQoJVCoQU4/QldJPsJa9jQLAuL/QdC3QszxC8eGfuOWqaZQENirwJ5f4Z9soAMhIdzSHp20ncDSUAAAAAElFTkSuQmCC"
                    onClick={() => setIsShowFilter(!isShowFilter)}
                >
                </img>
            </section>
            <section className={isShowFilter ? "block" : "hidden"}>
                <div>
                    <div>
                        <input
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-primary-500 
                            before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none 
                            after:bg-acent-800 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                            checked:bg-primary-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none 
                            checked:after:bg-acent checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] 
                            checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                            dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            id="all"
                            checked={allChecked}
                            onChange={() => handleAllChecked()}
                        />
                        <label
                            className="inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="all"
                        >所有專案</label>
                    </div>
                </div>
                {
                    filterTags.map((checkObj, index) => {
                        return (
                            <div key={checkObj.value}>
                                <input
                                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-primary-500 
                                    before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] 
                                    after:bg-success-800 after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none 
                                    after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                                    checked:bg-primary-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none 
                                    checked:after:bg-success-500 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] 
                                    checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                                    dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    role="switch"
                                    id={checkObj.value}
                                    checked={checkObj.checked}
                                    value={checkObj.value}
                                    onChange={() => handleCheckGroupValue(index)}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor={checkObj.value}
                                >{checkObj.value}</label>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
export default ProjectFilterBar