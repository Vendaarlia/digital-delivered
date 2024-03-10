import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface MenuItemProps {
  i: number; // Definisikan tipe 'i' sebagai array dari colors array
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li className="m-0 p-0 z-[980] list-none mb-[20px] flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1 }}
    >
      <div className="icon-placeholder w-[40px] h-[40px] rounded-[50%] flex-grow-0 flex-shrink-0 mr-[20px]" style={style} />
      <div className="text-placeholder w-[200px] h-[20px] rounded-[5px] flex-grow" style={style} />
    </motion.li>
  );
};
