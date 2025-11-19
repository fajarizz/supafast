'use client'

import {motion} from "framer-motion";

export default function FloatingImage({img}: { img: string }) {
    return (
        <motion.img
            src={img}
            alt={""}
            className="w-28 sm:w-36 md:w-44 lg:w-50"
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}>
        </motion.img>
    )
}