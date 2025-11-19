import FloatingImage from "@/components/floating-image";
import CircleButton from "@/components/circle-button";

export default function Hero() {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center lg:justify-between gap-10 p-6 sm:p-12 lg:p-24">
            <h1 className={"text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] mt-5 font-black tracking-tighter leading-9 sm:leading-[3.25rem] md:leading-[5.5rem] lg:leading-25 text-center"}>A STUNNING WEBSITE LIVE IN DAYS —
                YOU JUST ORDER THE PIZZA.
            </h1>
            <CircleButton />
            <div className="absolute right-6 top-6 hidden lg:block lg:right-30 lg:top-30">
                <FloatingImage img={"/pizza.png"}/>
            </div>
        </section>
    )
}