
'use client'
import Image from "next/image"
import { motion } from "framer-motion"


export default function Hero1() {
    return (
        <>
        <section className="hero1 h-screen pb-44 relative">
            <div className="wrap w-screen h-full m-0 top-0 flex justify-center items-center">
                <div className="absolute top-60 md:top-72"><h1 className="txt-line text-[7rem] md:text-9xl text-black font-bold text-center leading-none">DIGITAL. <br />DELIVERED.</h1></div>
                <Image className="absolute grayscale justify-center align-middle" src="/images/hero2.png" alt="" width={900} height={500} />
                <div className="absolute top-60 md:top-72"><h1 className="txt-fill pt-[0.9rem] pl-[0.9rem] text-[7rem] md:text-9xl text-white font-bold text-center leading-none">DIGITAL. <br />DELIVERED.</h1></div>
                <motion.div whileHover={{ scale: 1.5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} drag dragConstraints={{ left: 50, right: 50, top: 10, bottom: 10 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="circle absolute top-[20.4rem] md:top-[24.2rem] right-[116px] md:right-[444px] h-8 w-8 rounded-full border-[#e14c6c] border-2 "></motion.div>
            </div>
            <div className="selogan text-center">
                <p>Our message is simple. we have time & again <br /> <span className="font-bold text-[#e14c6c]  ">DELIVERED</span> where others failed.</p>
            </div>
        </section>
        </>
    )
}