'use client'
import {motion, useScroll} from "framer-motion";
import {useEffect, useState} from "react";

export default function Navbar() {
    const {scrollY} = useScroll();
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const unsub = scrollY.on("change", (y) => {
            setRevealed(y > 1);
        })
        return () => unsub();
    }, [scrollY])
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mt-2 flex justify-between px-4 bg-transparent gap-5">
            <div
                className="relative flex items-center gap-10 justify-between rounded-full px-8 py-4 text-sm font-bold overflow-hidden transition-all duration-300 ease-in-out"
                style={{color: revealed ? "var(--color-background)" : "var(--color-foreground)"}}>

                <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{scale: 0}}
                    animate={{scale: revealed ? 1 : 0}}
                    transition={{
                        duration: 0.6,
                        ease: "circInOut"
                    }}
                    style={{
                        borderRadius: "9999px",
                        transformOrigin: "center center"
                    }}
                />

                <div className="relative z-10 flex items-center gap-10 font-bold">
                    <p className={"font-black"}>SUPA {">>"} FAST</p>
                </div>
            </div>
            <div
                className="relative flex items-center gap-10 justify-between rounded-full px-8 py-4 text-sm font-bold overflow-hidden transition-all duration-300 ease-in-out"
                style={{color: revealed ? "var(--color-background)" : "var(--color-foreground)"}}>

                <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{scale: 0}}
                    animate={{scale: revealed ? 1 : 0}}
                    transition={{
                        duration: 0.6,
                        ease: "circInOut"
                    }}
                    style={{
                        borderRadius: "9999px",
                        transformOrigin: "center center"
                    }}
                />

                <div className="relative z-10 flex items-center gap-10 font-bold">
                    <p className={"font-black"}>Not sure? <a href={"#"} className={"underline"}>Learn More!</a></p>
                    <p className={"font-black text-primary hover:underline cursor-pointer"}>HIRE US!</p>
                </div>
            </div>
        </nav>
    );
}
