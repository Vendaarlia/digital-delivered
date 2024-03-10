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

const icons = ["🥹", "💀", "🤍"];

const liText = [
  <a href="service" key="service">service</a>,
  <a href="/digital" key="digital">digital</a>,
  <a href="/delivered" key="delivered">delivered</a>,
  <a href="/about" key="about">about</a>,
  <a href="/contact" key="contact">contact</a>,
];

const colors = ["#e14c6c", "#e14c6c", "#e14c6c", "#e14c6c", "#e14c6c"];

interface MenuItemProps {
  i: number; // Definisikan tipe 'i' sebagai array dari colors array
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                };
  return (
    <motion.li className="m-0 p-0 z-[980] list-none mb-[20px] flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1 }}
    >
      <div className="icon-placeholder w-[40px] h-[40px] rounded-[50%] flex-grow-0 flex-shrink-0 mr-[20px]" style={style} >{icons[i]}</div>
      <div className="text-placeholder w-[200px] h-[30px] rounded-[5px] flex-grow text-black hover:text-white hover:bg-[#e14c6c]" style={style} >{liText[i]}</div>
    </motion.li>
  );
};
