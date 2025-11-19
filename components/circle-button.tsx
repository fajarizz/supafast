"use client";

import {motion} from "framer-motion";

export default function CircleButton() {
    return (
        <motion.button
            className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-primary overflow-hidden cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            <motion.div
                className="absolute rounded-full bg-foreground h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32"

                variants={{
                    rest: {scale: 0, opacity: 0},
                    hover: {scale: 1.4, opacity: 1}
                }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 16
                }}
            />

            <motion.span
                className="relative z-10 font-semibold tracking-wide text-background text-sm sm:text-base"
                variants={{
                    rest: {scale: 1, y: 0},
                    hover: {scale: 1.08, y: -3}
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 14
                }}
            >
                GET NOW!
            </motion.span>
        </motion.button>
    );
}
