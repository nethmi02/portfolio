'use client';

import { motion } from 'framer-motion';

export default function Reveal({
    children,
    delay = 0,
    yOffset = 50,
    duration = 0.5,
    className = ""
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
