export default function Perks() {
    return (
        <section className={"flex flex-col items-start justify-start px-6 sm:px-8 gap-6 sm:gap-10"}>
            <h3 className={"w-full md:w-2/3 text-lg sm:text-xl md:text-2xl mt-5 font-bold tracking-tighter leading-7 sm:leading-8 md:leading-10"}>Rather than spending $12K+ on
                a
                custom site and weeks of back-and-forth with designers and agencies, you can pick a finished website
                from our collection, give us your content, and launch it in a matter of days.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
                <div className="flex flex-col">
                    <p className={"font-bold"}>1</p>
                    <p className={"font-bold text-xl sm:text-2xl"}>Choose Your Website</p>
                    <p className={"text-base sm:text-lg md:text-xl"}>Browse our collection of pre-built designs tailored for your
                        niche—restaurants, agencies, e-commerce, and more.</p>
                </div>
                <div className="flex flex-col">
                    <p className={"font-bold"}>2</p>
                    <p className={"font-bold text-xl sm:text-2xl"}>Provide Your Content</p>
                    <p className={"text-base sm:text-lg md:text-xl"}>Send us your branding, images, and text. We’ll handle all the details—no
                        need to worry about layouts or technicalities.</p>
                </div>
                <div className="flex flex-col">
                    <p className={"font-bold"}>3</p>
                    <p className={"font-bold text-xl sm:text-2xl"}>Launch in Days</p>
                    <p className={"text-base sm:text-lg md:text-xl"}>Your website goes live in days, perfectly optimized to attract customers
                        and grow your business, ready to rock and roll.</p>
                </div>
            </div>
        </section>
    )
}