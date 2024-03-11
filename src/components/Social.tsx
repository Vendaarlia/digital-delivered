import Image from "next/image"

export default function Social() {
    return (
        <>
        <section className="relative w-screen">
            <div className="wrap">
                <div className="link-txt flex justify-evenly items-center">
                    <div className="left flex justify-center items-center w-1/2 gap-9">
                        <a href="http://">GitHub</a>
                        <a href="http://">Instagram</a>
                    </div>
                    <div className="emblem">
                        <Image className="rounded-full" src="/images/badge.png" alt="" width={100} height={100} />
                    </div>
                    <div className="right flex justify-center items-center w-1/2 gap-9">
                        <a href="http://">Medium</a>
                        <a href="http://">Twitter</a>
                    </div>
                </div>
                <div className="txt flex justify-center mt-32">
                    <h3 className=" w-3/4 text-3xl font-semibold">We use cutting-edge <span className="text-[#e14c6c]"><a href="http://">technology</a></span> that work. combined with our apps & <span className="text-[#e14c6c]"><a href="http://">devivery focus</a></span>, we always set it done. </h3>
                </div>
                <div className="link-red w-3/4 flex justify-between mt-9 mb-9 m-auto hover:line-through text-[#e14c6c]">
                    <a href="http://">Why to chosse? &rarr;</a>
                    <a href="http://">Need some advice? &rarr;</a>
                </div>
            </div>
        </section>
        </>
    )
}