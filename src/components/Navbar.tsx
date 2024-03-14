

'use client'
import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Brand from "./Brand";
import { visibilityChangeEvent } from "@tsparticles/engine";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 0px 40px)`,
    opacity: '1',
    transition: {
      type: "tween",
      stiffness: 90,
      restDelta: 0,
    },
  }),
  closed: {
    clipPath: "circle(30px at 0px 40px)",
    opacity: '0',
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <section className="wrap-nav top-0 w-screen h-[80px] z-[999]">
    <motion.nav className="nav w-full h-full flex items-center"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background absolute top-0 bottom-0 w-screen h-screen bg-black z-[970]" variants={sidebar} />
      <Brand />
      <div className="">
      <Navigation />
      </div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    </section>
  );
};

