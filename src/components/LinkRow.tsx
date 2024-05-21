"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinkProps } from "@/types";
import { navAnimate } from "@/lib/utils";

function LinkRow({ href, idx, name, exact, onClick }: NavLinkProps) {
	// Cast href to a string using toString() method
	const hrefAsString: string = href.toString();
	const pathname = usePathname();

	const link = `relative flex p-1 !text-sm tracking-wide whitespace-nowrap transition-sm transition-colors hover:!text-base  hover:text-shadow-100`;
	const activeLink = `${link} !title-gradient`;

	const isActive = exact
		? pathname === href
		: pathname.startsWith(hrefAsString);

	return (
		<motion.div
			variants={navAnimate}
			initial="hidden"
			animate="animate"
			viewport={{ once: true, amount: 0.2 }}
			custom={idx}
		>
			<Link
				href={href}
				className={isActive ? activeLink : link}
				onClick={onClick}
			>
				{name}
			</Link>
		</motion.div>
	);
}

export default LinkRow;
