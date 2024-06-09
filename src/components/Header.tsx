"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/constants";
import LinkRow from "./LinkRow";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="nav-parent isolate overflow-hidden bg-background py-4 pl-3 pr-2 sm:px-[1.5%] md:min-h-[60px]">
      <div className="row-flex mx-auto w-[95%] gap-4 max-md:justify-between">
        <Link
          href="/"
          className="group flex transition-sm hover:scale-95 md:pl-[2%]"
        >
          <h2 className="gradient-text text-shadow-200 text-lg leading-none">
            MovBit
          </h2>
        </Link>

        <div className="md:row-flex nav-links mx-auto hidden gap-12 rounded-full px-6 py-2.5 md:gap-16">
          {navLinks?.map((link, idx) => (
            <LinkRow key={idx} {...link} idx={idx} />
          ))}
        </div>

        <div
          className="icon md:!hidden"
          onClick={() => setOpenMenu && setOpenMenu(true)}
        >
          <HiOutlineMenuAlt4 size={22} color="#D3DDFE" />
        </div>
        <AnimatePresence>
          {openMenu && <Menu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>

        {/* <Button title="Connect Wallet" className="text-sm hidden md:block" /> */}
      </div>
    </header>
  );
};

export default Header;
