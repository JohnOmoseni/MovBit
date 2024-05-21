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
		<header className="nav-parent pl-3 pr-2 py-4 sm:px-[1.5%] md:min-h-[60px] bg-background overflow-hidden isolate">
			<div className="w-[95%] mx-auto max-md:justify-between row-flex gap-4">
				<Link
					href="/"
					className="group flex transition-sm hover:scale-95 md:pl-[2%]"
				>
					<h2 className="gradient-text text-shadow-200 text-lg leading-none">
						MovBit
					</h2>
				</Link>

				<div className="hidden mx-auto md:row-flex py-2.5 px-6 rounded-full nav-links gap-12 md:gap-16">
					{navLinks?.map((link, idx) => (
						<LinkRow key={idx} {...link} idx={idx} />
					))}
				</div>

				<div
					className="md:!hidden icon"
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
