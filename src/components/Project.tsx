
import styles from "@/styles/styles.module.css"
import Image from "next/image"

export default function Project() {
    return (
        <>
        <section className="w-screen max-h-fit bg-[#e14c6c]">
            <div className="wrap">
                <div className="marque">
                    <div className="wrap-marquee w-screen">
                        <div className={`${styles.marquee} w-full h-14 pt-6 flex items-center`}>
                            <h3 className="font-bold text-3xl">PROJECTS <span className="text-5xl align-top text-white">*</span> <span className="font-extralight">PROJECTS</span> <span className="text-5xl align-top text-white">*</span> PROJECTS <span className="text-5xl align-top text-white">*</span> <span className="font-extralight">PROJECTS</span> <span className="text-5xl align-top text-white">*</span> PROJECTS <span className="text-5xl align-top text-white">*</span> <span className="font-extralight">PROJECTS</span> <span className="text-5xl align-top text-white">*</span> PROJECTS </h3>
                        </div>
                        <div className={`${styles.marquee} w-full h-14 pt-6 flex items-center`}>
                            <h4 className="font-bold text-3xl">PROJECTS <span className="text-5xl align-top text-white">*</span> <span className="font-extralight">PROJECTS</span> <span className="text-5xl align-top text-white">*</span> PROJECTS <span className="text-5xl align-top text-white">*</span> <span className="font-extralight">PROJECTS</span> <span className="text-5xl align-top text-white">*</span> PROJECTS <span className="text-5xl align-top text-white">*</span> <span className="font-extralight">PROJECTS</span> <span className="text-5xl align-top text-white">*</span> PROJECTS </h4>
                        </div>
                    </div>
                </div>
                <div className="pro-list pt-20 pb-20 sm:flex sm:flex-col gap-8">
                    <div className="pro pr-20 pl-20 flex justify-center ">
                        <div className="content w-3/4 flex justify-between items-center gap-10">
                            <div className="txt z-10">
                                <h1 className="text-xl font-bold">INVEST GRUP</h1>
                                <p>Invest Group is an investment platform connecting investors with lucrative investment opportunities.</p>
                            </div>
                            <div className="tumb">
                                <Image src="/images/projects/property.jpg" className="bg-white rotate-45 z-0" alt="" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="pro pr-20 pl-20 flex justify-center ">
                        <div className="content w-3/4 flex justify-between items-center gap-10">
                            <div className="txt z-10">
                                <h1 className="text-xl font-bold">NFT</h1>
                                <p>NFTs / Non-Fungible Tokens are unique digital assets stored on blockchain, representing ownership of art, music, collectibles, and more.</p>
                            </div>
                            <div className="tumb">
                                <Image src="/images/projects/nft.jpg" className="bg-white rotate-45 z-0" alt="" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="pro pr-20 pl-20 flex justify-center ">
                        <div className="content w-3/4 flex justify-between items-center gap-10">
                            <div className="txt z-10">
                                <h1 className="text-xl font-bold">LOCAL TRADE</h1>
                                <p>Local trade refers to the exchange of goods or services within a specific geographic area or community, typically conducted face-to-face.</p>
                            </div>
                            <div className="tumb">
                                <Image src="/images/projects/localtrade.jpg" className="bg-white rotate-45 z-0" alt="" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="pro pr-20 pl-20 flex justify-center ">
                        <div className="content w-3/4 flex justify-between items-center gap-10">
                            <div className="txt z-10">
                                <h1 className="text-xl font-bold">CRYPTOFLOW</h1>
                                <p>Cryptoflow is a decentralized financial utilizing blockchain technology to facilitate secure and transparent, revolutionizing global finance.</p>
                            </div>
                            <div className="tumb">
                                <Image src="/images/projects/crypto.jpg" className="bg-white rotate-45 z-0" alt="" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}