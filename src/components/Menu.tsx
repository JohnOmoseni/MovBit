"use client";

import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import MenuLinks from "./MenuLinks";
import { Dispatch, SetStateAction } from "react";
import { animateMenu } from "@/lib/utils";
// import CustomConnectButton from "./ConnectButton";

type Props = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

function Menu({ setOpenMenu }: Props) {
  return (
    <motion.div
      className="h-100dvh fixed inset-0 z-[9999] block w-full bg-black bg-opacity-30 backdrop-blur-sm md:hidden"
      variants={animateMenu}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="menu flex-column absolute right-0 top-0 isolate h-full w-[80%] max-w-[500px] overflow-hidden bg-[#060a1ad5] bg-opacity-80 px-[4%] text-white backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundImage: "url(/images/bg.png)" }}
      >
        <span
          className="icon absolute right-4 top-3 p-1 transition-colors hover:text-white active:scale-95"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <IoClose size="25" className="close-menu" fill="white" />
        </span>
        <nav className="flex-column mx-auto flex-1 gap-8 pt-[10%] text-xl">
          {navLinks.map((link, idx) => (
            <MenuLinks key={idx} {...link} onClick={() => setOpenMenu(false)} />
          ))}
        </nav>

        {/* <CustomConnectButton /> */}
      </div>
    </motion.div>
  );
}

export default Menu;
