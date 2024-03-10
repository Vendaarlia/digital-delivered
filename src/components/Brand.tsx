import Image from "next/image";

export default function Brand() {
    return (
        <>
        <div className="brand absolute w-[50px] h-[50px] top-[18px] left-[18px]">
                <a href="http://">
                    <Image src="/images/logo.jpg" alt="" width={40} height={40} className="rounded-full" />
                </a>
            </div>
        </>
    )
}