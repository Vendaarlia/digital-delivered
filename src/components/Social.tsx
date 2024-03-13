import Image from "next/image"
import { motion } from "framer-motion"


export default function Social() {
    return (
        <>
        <section className="relative w-screen">
            <div className="wrap">
                <div className="link-txt flex justify-evenly items-center">
                    <div className="left flex justify-center items-center w-1/2 gap-9">
                        <a className="hover:text-[#e14c6c] hover:underline" href="http://">GitHub</a>
                        <a className="hover:text-[#e14c6c] hover:underline" href="http://">Instagram</a>
                    </div>
                    <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 9, repeat: Infinity }}  className="emblem">
                        <Image className="rounded-full" src="/images/badge.png" alt="" width={100} height={100} />
                    </motion.div>
                    <div className="right flex justify-center items-center w-1/2 gap-9">
                        <a className="hover:text-[#e14c6c] hover:underline" href="http://">Medium</a>
                        <a className="hover:text-[#e14c6c] hover:underline" href="http://">Twitter</a>
                    </div>
                </div>
                <div className="txt flex justify-center mt-20">
                    <h3 className=" w-3/4 text-3xl font-semibold">We use cutting-edge <span className="text-[#e14c6c]"><a href="http://">technology</a></span> that work. combined with our apps & <span className="text-[#e14c6c]"><a href="http://">devivery focus</a></span>, we always set it done. </h3>
                </div>
                <div className="link-red w-3/4 flex justify-between mt-9 mb-9 m-auto  text-[#e14c6c]">
                    <a className="hover:line-through" href="http://">Why to chosse? &rarr;</a>
                    <a className="hover:line-through" href="http://">Need some advice? &rarr;</a>
                </div>
            </div>
        </section>
        </>
    )
}