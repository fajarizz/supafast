export default function Pricing() {
    return (
        <section className={"flex flex-col items-start justify-start px-6 sm:px-8 gap-8 sm:gap-10"}>
            <h1 className={"text-5xl md:text-7xl lg:text-[10rem] w-full text-center mt-5 font-black tracking-tighter leading-[2.75rem] md:leading-[4.5rem] lg:leading-32"}>ÀLA CARTE
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4">
                <div className="flex flex-col justify-between gap-4 bg-foreground text-background rounded-4xl overflow-hidden">
                    <div className="flex flex-col gap-4 p-6">
                        <p className={"text-2xl"}>Pureform</p>
                        <p className={"text-xl"}>$2900</p>
                        <button className={"bg-primary rounded-lg py-4"}>BUY NOW</button>
                        <p>Designed to elevate your digital product or new company, this website captures your unique
                            value
                            proposition, highlights key benefits, and engages your audience to build early momentum.
                            Easily
                            customizable ensuring a memorable first impression.</p>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/674752a7e65923f0ace8f9fc/67514c8d5d79d4f6023bb840_MacBook%20Pro%20Mockup%20with%20an%20Isometric%20Perspective%20(Mockuuups%20Studio).png"
                        alt=""/>
                </div>
                <div className="flex flex-col justify-between gap-4 bg-foreground text-background  rounded-4xl overflow-hidden">
                    <div className="flex flex-col gap-4 p-6">
                        <p className={"text-2xl"}>Blankspace</p>
                        <p className={"text-xl"}>$2900</p>
                        <button className={"bg-primary rounded-lg py-4"}>BUY NOW</button>
                        <p>Built to showcase your products and goods, offering them the best way to your users, explaining the benefits and converting them to loyal customers. Easily adaptable to your brand and content.</p>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/674752a7e65923f0ace8f9fc/67596ba654346ec8e645b107_MacBook%20Pro%20mockup%20on%20textured%20rock%20platform%20(Mockuuups%20Studio).png"
                        alt=""/>
                </div>
                <div className="flex flex-col justify-between gap-4 bg-foreground text-background  rounded-4xl overflow-hidden">
                    <div className="flex flex-col gap-4 p-6">
                        <p className={"text-2xl"}>Pureform</p>
                        <p className={"text-xl"}>$2900</p>
                        <button className={"bg-primary rounded-lg py-4"}>BUY NOW</button>
                        <p>Perfect for showcasing your work, whether it’s a portfolio of creative projects or a personal page. This website makes it easy to highlight your skills leaving a lasting impact on visitors. Fully adaptable.</p>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/674752a7e65923f0ace8f9fc/67514b2f2c07a1dcdf6253df_MacBook%20Pro%20mockup%20on%20textured%20rock%20platform%20(Mockuuups%20Studio)-1.png"
                        alt=""/>
                </div>
                <div className="flex flex-col justify-between gap-4 bg-foreground text-background  rounded-4xl overflow-hidden">
                    <div className="flex flex-col gap-4 p-6">
                        <p className={"text-2xl"}>Obsidian</p>
                        <p className={"text-xl"}>$2900</p>
                        <button className={"bg-primary rounded-lg py-4"}>BUY NOW</button>
                        <p>Tailored for studios, venues, and events like gyms, agencies, and teams. Built to present your space, services, and offerings with clarity and style, encouraging bookings and building trust with target audience.</p>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/674752a7e65923f0ace8f9fc/6781134cd11abfb83bd85099_MacBook%20Pro%20mockup%20on%20textured%20stone%20platform%20(Mockuuups%20Studio).png"
                        alt=""/>
                </div>
            </div>
        </section>
    )
}