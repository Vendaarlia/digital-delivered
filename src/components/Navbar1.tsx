import Image from "next/image"

export default function Navbar1() {
    return (
        <>
        <section className=" flex justify-center">
        <nav className=" w-3/4 h-20 sticky top-0 flex justify-between items-center">
            <div className="brand w-2/3">
                <a href="http://">
                    <Image src="/images/logo.jpg" alt="" width={40} height={40} className="rounded-full" />
                </a>
            </div>
            <ul className="flex justify-between w-full md:w-1/2 ml-8" id="navul">
                <li className="navli text-base">
                    <a href="http://">Service</a>
                </li>
                <li className="navli text-base">
                    <a href="http://">Digital</a>
                </li>
                <li className="navli text-base">
                    <a href="http://">Delivered</a>
                </li>
            </ul>
            <div>
                <button className="relative group hidden">
                    <div className="relative flex items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-white ring-0 ring-gray-200 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                        <div className="bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                        <div className="bg-black h-[1px] rounded"></div>
                        <div className="bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                    </div>
                    </div>
                </button>
            </div>
        </nav>
        </section>
        </>
    )
}