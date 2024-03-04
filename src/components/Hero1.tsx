import Image from "next/image"
import { global } from "styled-jsx/css"

export default function Hero1() {
    return (
        <>
        <section className="hero1 h-screen pb-44 relative">
            <div className="wrap w-screen h-full m-0 top-0 flex justify-center items-center">
                <div className="absolute top-72"><h1 className="txt-line">DIGITAL. <br />DELIVERED.</h1></div>
                <Image className="absolute grayscale justify-center align-middle" src="/images/hero1.png" alt="" width={500} height={500} />
                <div className="absolute top-72"><h1 className="txt-fill">DIGITAL. <br />DELIVERED.</h1></div>
                <div className="circle absolute top-32 right-[150px] md:right-[520px] h-32 w-32 rounded-full border-[#e14c6c] border-4"></div>
            </div>
            <div className="selogan text-center">
                <p>Our message is simple. we have time & again <br /> <span className="font-bold text-[#e14c6c]  ">DELIVERED</span> where others failed.</p>
            </div>
        </section>
        </>
    )
}