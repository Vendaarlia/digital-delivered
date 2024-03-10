

'use client'
import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Brand from "./Brand";

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
    <section className="wrap-nav">
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Brand />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    </section>
  );
};

