'use client'
import { motion } from "framer-motion";

export default function Play() {
    return (
        <>
        <section className="w-screen h-screen">
        <motion.div drag whileHover={{ scale: 1.5 }} className="boc w-20 h-20 bg-white"></motion.div>
        </section>
        </>
    )
}