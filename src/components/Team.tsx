import styles from "@/styles/styles.module.css";
import { motion } from "framer-motion";

const chilImgL = {
    initial: { rotateZ: 0 },
    animate: { rotateZ: -25, transition: { type: "spring" }}
}

const chilImgR = {
    initial: { rotateZ: 0 },
    animate: { rotateZ: 25, transition: { type: "spring" }}
}


export default function Team() {
    return (
        <>
        <section className="w-screen">
        <motion.div className="wrap-img pt-20 mt-24 max-sm:flex-col flex justify-center items-center gap-4"
            initial="initial"
            animate="initial"
            whileHover="animate"
            >
                    <motion.div className="img-left -z-10"
                            variants={chilImgL}
                            >
                        <div className="img bg-[url('/images/redant.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Redant</h3>
                            <p>the Heretical</p>
                        </div>
                    </motion.div>
                    <div className="img-center z-10">
                        <div className="img bg-[url('/images/vendaarlia.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Vendaarlia</h3>
                            <p>the Developer</p>
                        </div>
                    </div>
                    <motion.div className="img-right -z-10"
                            variants={chilImgR}
                            >
                        <div className="img bg-[url('/images/bluevils.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Bluevils</h3>
                            <p>the Antagonist</p>
                        </div>
                    </motion.div>
            </motion.div>
            <div className="wrap-marquee w-screen border-t-2 border-b-2 border-white bg-black z-10">
                <div className={`${styles.marquee} w-full h-24 flex items-center pt-6`}>
                    <h3 className=" font-bold text-5xl">OUR TEAM <span className="text-7xl align-top text-[#e14c6c]">*</span> <span className="font-extralight">OUR TEAM</span> <span className="text-7xl align-top text-[#e14c6c]">*</span> OUR TEAM <span className="text-7xl align-top text-[#e14c6c]">*</span> <span className="font-extralight">OUR TEAM</span> <span className="text-7xl align-top text-[#e14c6c]">*</span> OUR TEAM <span className="text-7xl align-top text-[#e14c6c]">*</span> <span className="font-extralight">OUR TEAM</span> <span className="text-7xl align-top text-[#e14c6c]">*</span> OUR TEAM </h3>
                </div>
            </div>
        </section>
        </>
    )
}