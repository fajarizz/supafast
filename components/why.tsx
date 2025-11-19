import RotatingStar from "@/components/rotating-star";
import {IconBolt} from "@tabler/icons-react";

export default function Why() {

    return (
        <section className={""}>
            <RotatingStar/>
            <div className={"flex justify-between items-start flex-col px-6 sm:px-8 "}>
                <div className={"flex flex-col md:flex-row gap-4 md:gap-8"}>
                    <h4 className={"w-full md:max-w-1/2 text-base sm:text-lg md:text-xl mt-5 font-black tracking-tighter"}>
                        We’ve redefined website creation by combining decades of design, user experience, and SEO
                        expertise
                        into high-performing, pre-built websites. Optimized for growth, conversions, and search engine
                        success, these websites are crafted for businesses ready to scale fast.
                    </h4>
                    <img
                        src="https://cdn.prod.website-files.com/67435355c84f0b8120e16102/677fdb1e84c761345e7055cf_MacBook%20Pro%20mockup%20on%20textured%20rock%20platform%20(Mockuuups%20Studio)%20(3).png"
                        alt="" className={"hidden lg:block absolute right-0 top-150"}/>
                </div>

                <div className={"flex flex-col mt-20 md:mt-30"}>
                    <h1 className={"text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] mt-5 font-black tracking-tighter leading-10 sm:leading-[3.25rem] md:leading-[5.5rem] lg:leading-29"}>SAVE TIME, SAVE MONEY. LET
                        US
                        HANDLE IT <span className={"text-primary"}>FOR YOU.</span>
                    </h1>

                    <div className={"flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"}>
                        <h2 className={" text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] mt-5 font-black tracking-tighter leading-9 sm:leading-10 md:leading-[3.25rem] lg:leading-15"}>FULLY-BUILT,
                            READY-TO-GO
                            WEBSITES THAT SHINE.
                        </h2>
                        <img
                            src="https://cdn.prod.website-files.com/67435355c84f0b8120e16102/674fb8aba33aa5af2e9193e4_WCU%20Image.png"
                            alt="" className={"w-full md:w-1/2"}/>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-8 mt-8"}>
                    <div className={"flex flex-1 justify-center items-center md:scale-100 scale-75"}>
                        <IconBolt size={"10rem"}/>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-6 md:gap-10 w-full md:w-auto"}>
                        <div className={"flex flex-col gap-4 w-full"}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                                <div className={"flex justify-start items-start font-bold text-2xl sm:text-3xl"}>1</div>
                                <div className={"flex flex-col "}>
                                    <p className={"font-bold text-xl sm:text-2xl"}>Outstanding Custom-level Design</p>
                                    <p className={"text-base sm:text-lg md:text-xl"}>Crafted by top-tier designers with the functionality of a
                                        high-end website</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className={"flex flex-col gap-4 w-full"}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                                <div className={"flex justify-start items-start font-bold text-2xl sm:text-3xl"}>2</div>
                                <div className={"flex flex-col "}>
                                    <p className={"font-bold text-xl sm:text-2xl"}>Speed to Launch</p>
                                    <p className={"text-base sm:text-lg md:text-xl"}>Go live in days, not weeks. We handle everything from start
                                        to
                                        finish.</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div className={"flex flex-col gap-4 w-full"}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                                <div className={"flex justify-start items-start font-bold text-2xl sm:text-3xl"}>3</div>
                                <div className={"flex flex-col "}>
                                    <p className={"font-bold text-xl sm:text-2xl"}>Proven Structure & Flexibility</p>
                                    <p className={"text-base sm:text-lg md:text-xl"}>Backed by real data, optimized for performance and
                                        scalability.</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
