

export default function Contact() {
    return (
        <>
        <section className="h-screen flex justify-center items-center">
            <div className="wrap h-full w-4/5 flex justify-center items-center gap-9 md:gap-20 p-9 pt-20">
                <div className="colmn h-full md:w-1/2 w-1/3 flex flex-col justify-between">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p>Garlicoin is like the deadbolt for door locks, it secure and protects you from crypto-vampires. Blockchain tech makes it nearly impossible to our advances <a className="text-[#e14c6c] hover:line-through" href="http://">Contact us! &rarr;</a></p>
                    <p>©reate 2024 by vendaarlia</p>
                </div>
                <div className="colmn h-full flex flex-col justify-between w-3/4">
                    <h1 className="w-full text-6xl text-right text-[#e14c6c]">*</h1>
                    <h5 className="text-xl  font-bold">

                        Whiterun,<br />
                        Skyrim, Tamriel.<br />
                        <br />
                        0838327382873<br />
                        digital@delivered.com <br />
                        <a className="text-[#e14c6c] hover:line-through" href="http://">GitHub &rarr;</a></h5>
                    <div className="contact w-full mt-8">
                        <form id="survey-form" action="">
                            <div className="input-wrap flex justify-end gap-2 mb-10">
                                <p className=" text-lg md:w-[20%]">Im looking for a </p>
                                <select name="dropdown" id="dropdown" className="select-style bg-transparent cursor-pointer md:w-full w-1/2 border-white border-b-[1px] " typeof="dropdown">
                                    <option disabled selected value="start"></option>
                                    <option value="designer">Designer</option>
                                    <option value="developer">Developer</option>
                                    <option value="marketing">Marketing</option>
                                </select>
                            </div>
                            <div className="input-wrap flex justify-end gap-2 mb-10">
                                <p className="text-lg md:w-[20%]">I want </p>
                                <select name="dropdown" id="dropdown" className="select-style bg-transparent cursor-pointer md:w-full w-1/2 border-white border-b-[1px] " typeof="dropdown">
                                    <option disabled selected value="start"></option>
                                    <option value="branding">Branding</option>
                                    <option value="application">Application</option>
                                    <option value="ads">Ads Champaign</option>
                                </select>
                                <p className="text-lg ml-4 w-[20%]">project</p>
                            </div>
                            <div className="input-wrap flex justify-end gap-2">
                                <p className="text-lg md:w-[25%]">My budget is </p>
                                <select name="dropdown" id="dropdown" className="select-style bg-transparent cursor-pointer md:w-full w-1/2 border-white border-b-[1px] " typeof="dropdown">
                                    <option disabled selected value="start"></option>
                                    <option value="100-500">100-1500</option>
                                    <option value="600-1000">600-1000</option>
                                    <option value="discuse">Discuse whit us</option>
                                </select>
                            </div>
                            <div className="input-wrap mt-20">
                                <button type="submit" id="submit" className="btn-submit w-full bg-[#e14c6c] hover:bg-[#ea3352] p-4">SEND THE MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}