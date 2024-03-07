import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">CodeWithMarish</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;








{/**OLD NAV BAR THAT WORK BUT NOT FUNCTION */}
{/*import Image from "next/image"

export default function Navbar() {
    return (
        <>
        <section className=" flex justify-center">
        <nav className=" w-3/4 h-20 sticky top-0 flex justify-between items-center">
            <div className="brand ">
                <a href="http://">
                    <Image src="/images/logo.jpg" alt="" width={40} height={40} className="rounded-full" />
                </a>
            </div>
            <ul className="hidden" id="navul">
                <li className="navli">
                    <a href="http://">Service</a>
                </li>
                <li className="navli">
                    <a href="http://">Digital</a>
                </li>
                <li className="navli">
                    <a href="http://">Delivered</a>
                </li>
            </ul>
            <div>
      <button className="relative group">
        <div className="relative flex items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-white ring-0 ring-gray-200 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
            <div className="bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
            <div className="bg-black h-[1px] rounded"></div>
            <div className="bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
          </div>
        </div>
      </button>
    </div>
        </nav>
        </section>
        </>
    )
}*/}