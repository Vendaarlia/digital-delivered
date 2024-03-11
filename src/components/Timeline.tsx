
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"


export default function Timeline() {
    return (
        <>
        <section className="w-screen flex justify-center items-center">
            <div className="wrap border border-white m-14">
                <div className="row flex">
                    <div className="box border-white border-r-[1px] w-52 h-52 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="text-6xl font-black">1</h1>
                                    <p className="rotate-[270deg] text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                <FontAwesomeIcon className="h-12" icon={faPython} />
                            </div>
                            <p>Ranking our level of Python programming expertis.</p>
                        </div>
                    </div>
                    <div className="box w-52 h-52 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="text-6xl font-black">5</h1>
                                    <p className="rotate-[270deg] text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                {/*<FontAwesomeIcon className="h-12" icon={faPython} />*/}
                            </div>
                            <p>We tock 5th place in the ranking of the best studio.</p>
                        </div>
                    </div>
                    <div className="box w-52 h-52 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="text-6xl font-black">6</h1>
                                    <p className="rotate-[270deg] text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                {/*<FontAwesomeIcon className="h-12" icon={faPython} />*/}
                            </div>
                            <p>Rating of the developments companies of the year.</p>
                        </div>
                    </div>
                </div>
                <div className="row flex">
                    <div className="box border-white border-r-[1px] border-t-[1px] w-52 h-52 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="text-6xl font-black">2</h1>
                                    <p className="rotate-[270deg] text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                <FontAwesomeIcon className="h-12" icon={faNodeJs} />
                            </div>
                            <p>Ranking our level of Java Script programming expertis.</p>
                        </div>
                    </div>
                    <div className="box w-52 h-52 p-2 border-r-[1px] border-t-[1px] ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="text-6xl font-black">3</h1>
                                    <p className="rotate-[270deg] text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                <FontAwesomeIcon className="h-12" icon={faReact} />
                            </div>
                            <p>Ranking our level of React programming expertis.</p>
                        </div>
                    </div>
                    <div className="box w-52 h-52 p-2 ">
                        <div className="hovEff h-full hover:bg-[#e14c6c] p-2 flex flex-col justify-between">
                            <div className="big flex justify-between items-center">
                                <div className="numb flex">
                                    <h1 className="text-6xl font-black">4</h1>
                                    <p className="rotate-[270deg] text-base max-w-fit max-h-fit">PLACE</p>
                                </div>
                                {/*<FontAwesomeIcon className="h-12" icon={faReact} />*/}
                            </div>
                            <p>Our team ranks 4th in the CSI developer <a className="hover:line-through " href="">Read the news! &rarr;</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}