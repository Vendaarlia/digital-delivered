
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"


export default function Timeline() {
    return (
        <>
        <section className="w-screen flex justify-center items-center">
            <div className="wrap border border-white m-14">
                <div className="row flex">
                    <div className="box border-white border-r-[1px] md:w-52 md:h-52 w-32 h-32 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="md:text-6xl text-3xl font-black">1</h1>
                                    <p className="rotate-[270deg] text-[8px] ml-2 md:text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                <FontAwesomeIcon className="md:h-12 h-6" icon={faPython} />
                            </div>
                            <p className="text-[9px] md:text-base">Ranking our level of Python programming expertis.</p>
                        </div>
                    </div>
                    <div className="box md:w-52 md:h-52 w-32 h-32 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="md:text-6xl text-3xl font-black">5</h1>
                                    <p className="rotate-[270deg] text-[8px] ml-2 md:text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                {/*<FontAwesomeIcon className="h-12" icon={faPython} />*/}
                            </div>
                            <p className="text-[9px] md:text-base">We tock 5th place in the ranking of the best studio.</p>
                        </div>
                    </div>
                    <div className="box md:w-52 md:h-52 w-32 h-32 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="md:text-6xl text-3xl font-black">6</h1>
                                    <p className="rotate-[270deg] text-[8px] ml-2 md:text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                {/*<FontAwesomeIcon className="h-12" icon={faPython} />*/}
                            </div>
                            <p className="text-[9px] md:text-base">Rating of the developments companies of the year.</p>
                        </div>
                    </div>
                </div>
                <div className="row flex">
                    <div className="box border-white border-r-[1px] border-t-[1px] md:w-52 md:h-52 w-32 h-32 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="md:text-6xl text-3xl font-black">2</h1>
                                    <p className="rotate-[270deg] text-[8px] ml-2 md:text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                <FontAwesomeIcon className="md:h-12 h-6 " icon={faNodeJs} />
                            </div>
                            <p className="text-[9px] md:text-base">Ranking our level of Java Script programming.</p>
                        </div>
                    </div>
                    <div className="box md:w-52 md:h-52 w-32 h-32 p-2 border-r-[1px] border-t-[1px] ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="md:text-6xl text-3xl font-black">3</h1>
                                    <p className="rotate-[270deg] text-[8px] ml-2 md:text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                <FontAwesomeIcon className="md:h-12 h-6" icon={faReact} />
                            </div>
                            <p className="text-[9px] md:text-base">Ranking our level of React programming expertis.</p>
                        </div>
                    </div>
                    <div className="box md:w-52 md:h-52 w-32 h-32 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="md:text-6xl text-3xl font-black">4</h1>
                                    <p className="rotate-[270deg] text-[8px] ml-2 md:text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                {/*<FontAwesomeIcon className="h-12" icon={faReact} />*/}
                            </div>
                            <p className="text-[9px] md:text-base">Our team ranks 4th in the CSI developer <a className="hover:line-through " href="">Read the news! &rarr;</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}