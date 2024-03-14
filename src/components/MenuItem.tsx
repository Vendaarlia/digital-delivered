import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
};

// const icons = ["🥹", "💀", "🤍"];
// <div className="icon-placeholder w-[40px] h-[40px] rounded-[50%] flex-grow-0 flex-shrink-0 mr-[20px]" style={style} >{icons[i]}</div>

const liText = [
  <a href="service" key="service">Service</a>,
  <a href="/digital" key="digital">Digital</a>,
  <a href="/delivered" key="delivered">Delivered</a>,
  <a href="/about" key="about">About</a>,
  <a href="/contact" key="contact">Contact</a>,
];

const colors = ["#e14c6c", "#e14c6c", "#e14c6c", "#e14c6c", "#e14c6c"];

interface MenuItemProps {
  i: number; // Definisikan tipe 'i' sebagai array dari index atau urutan colors array atau yanglainnya
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                };
  return (
    <motion.li className="m-0 p-0 z-[980] ml-20 list-none mb-[20px] cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1 }}
    >
      <div className="text-placeholder w-[200px] h-[60px] rounded-[5px] flex-grow text-white hover:text-black hover:bg-[#e14c6c]" style={style} >{liText[i]}</div>
    </motion.li>
  );
};
