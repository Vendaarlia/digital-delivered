import styles from "@/styles/styles.module.css"

export default function Team() {
    return (
        <>
        <section className="w-screen">
            <div className="wrap-img  mt-40 flex justify-center gap-4">
                    <div className="img-left -z-10">
                        <div className="img bg-[url('/images/redant.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Redant</h3>
                            <p>the Heretical</p>
                        </div>
                    </div>
                    <div className="img-center -z-10">
                        <div className="img bg-[url('/images/vendaarlia.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Vendaarlia</h3>
                            <p>the Developer</p>
                        </div>
                    </div>
                    <div className="img-right -z-10">
                        <div className="img bg-[url('/images/bluevils.png')] bg-cover w-[200px] h-[300px] p-5">
                            <h3 className="text-3xl font-semibold">Bluevils</h3>
                            <p>the Antagonist</p>
                        </div>
                    </div>
            </div>
            <div className="wrap-marquee w-screen border-t-2 border-b-2 border-white bg-black z-10">
                <div className={`${styles.marquee} w-full h-24 flex items-center pt-6`}>
                    <h3 className=" font-bold text-5xl">OUR TEAM <span className="text-7xl align-top text-[#e14c6c]">*</span> <span className="font-extralight">OUR TEAM</span> <span className="text-7xl align-top text-[#e14c6c]">*</span> OUR TEAM <span className="text-7xl align-top text-[#e14c6c]">*</span> <span className="font-extralight">OUR TEAM</span> <span className="text-7xl align-top text-[#e14c6c]">*</span> OUR TEAM <span className="text-7xl align-top text-[#e14c6c]">*</span> <span className="font-extralight">OUR TEAM</span> <span className="text-7xl align-top text-[#e14c6c]">*</span> OUR TEAM </h3>
                </div>
            </div>
        </section>
        </>
    )
}