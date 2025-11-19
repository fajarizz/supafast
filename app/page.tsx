import Hero from "@/components/hero";
import Why from "@/components/why";
import Perks from "@/components/perks";
import Pricing from "@/components/pricing";

export default function Home() {
    return (
        <>
            <main className={"flex flex-col gap-20"}>
                <Hero/>
                <Why/>
                <Perks/>
                <Pricing />
            </main>
        </>
    );
}
