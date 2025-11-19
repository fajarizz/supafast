import CircleButton from "@/components/circle-button";

export default function Footer() {
    return (
        <section className={"flex flex-col items-center justify-center px-6 sm:px-8 mt-20 bg-foreground text-background gap-6"}>
            <h1 className={"text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] mt-5 font-black tracking-tighter leading-10 sm:leading-[3rem] md:leading-[4.5rem] lg:leading-29 text-center"}>
                ORDER A PIZZA, AND LET’S DO THIS
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className={"flex items-center gap-3 sm:gap-5 flex-row"}>
                        <h4 className={"w-full md:max-w-1/2 text-lg sm:text-xl mt-5 font-black tracking-tighter"}>
                            SUPA {">>"} FAST
                        </h4>
                        <p>by devTstudio</p>
                    </div>
                    <p className={"w-full md:w-1/2"}>Save thousands while still getting a premium website designed by the same
                        team
                        behind $13,500+ custom builds. Our ready-made websites are fully tailored to your
                        brand—perfectly
                        blending affordability and exclusivity.</p>
                </div>
            </div>

            <div className={"mt-10 md:mt-12 lg:mt-20 md:hidden"}>
                <CircleButton/>
            </div>
            <div className={"hidden lg:block absolute right-45 mt-20"}>
                <CircleButton/>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <p className={"opacity-60 text-center w-full mb-5"}>&copy; 2025 devTstudio</p>
            </div>
        </section>
    )
}