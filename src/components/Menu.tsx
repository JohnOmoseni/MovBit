"use client";

import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import MenuLinks from "./MenuLinks";
import { Dispatch, SetStateAction } from "react";
import { animateMenu } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CustomConnectButton from "./ConnectButton";

type Props = {
	setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

function Menu({ setOpenMenu }: Props) {
	return (
		<motion.div
			className="block md:hidden bg-black z-[9999] w-full fixed inset-0 h-100dvh bg-opacity-30 backdrop-blur-sm"
			variants={animateMenu}
			initial="hidden"
			animate="visible"
			exit="exit"
			onClick={() => setOpenMenu(false)}
		>
			<div
				className="menu w-[80%] max-w-[500px] isolate h-full px-[4%] absolute top-0 right-0 bg-[#060a1ad5] bg-opacity-80  backdrop-blur-sm flex-column text-white overflow-hidden"
				onClick={(e) => e.stopPropagation()}
				style={{ backgroundImage: "url(/images/bg.png)" }}
			>
				<span
					className="absolute icon top-3 right-4 p-1 transition-colors active:scale-95 hover:text-white"
					onClick={() => setOpenMenu(false)}
					title="close-menu"
				>
					<IoClose size="25" className="close-menu" fill="white" />
				</span>
				<nav className="text-xl mx-auto flex-1 flex-column gap-8 pt-[10%] ">
					{navLinks.map((link, idx) => (
						<MenuLinks key={idx} {...link} onClick={() => setOpenMenu(false)} />
					))}
				</nav>

				<CustomConnectButton />
				{/* <ConnectButton /> */}
			</div>
		</motion.div>
	);
}

export default Menu;
