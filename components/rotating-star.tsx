'use client'

import {motion, useScroll, useTransform} from "framer-motion";
import {IconAsterisk} from "@tabler/icons-react";

export default function RotatingStar() {
    const scrollY = useScroll();

    const rotate = useTransform(scrollY.scrollY, [0, 960], [0, 360]);
    return (
        <div className="flex items-center justify-between px-8">
            <div className="flex flex-row gap-2">
                <motion.div style={{rotate}}>
                    <IconAsterisk size={42}/>
                </motion.div>
                <motion.div style={{rotate}}>
                    <IconAsterisk size={42}/>
                </motion.div>
                <motion.div style={{rotate}}>
                    <IconAsterisk size={42}/>
                </motion.div>
            </div>
        </div>
    )
}