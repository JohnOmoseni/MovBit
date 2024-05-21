"use client";

import { linksAni } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
	name: string;
	href: string;
	onClick?: () => void;
};

function MenuLinks({ name, href, onClick }: Props) {
	return (
		<motion.span variants={linksAni} onClick={onClick}>
			{name === "Docs" ? (
				<a
					href={href}
					className="text-white"
					aria-label="Docs"
					target="_blank"
					rel="noreferrer"
				>
					Docs
				</a>
			) : (
				<Link onClick={onClick} href={`${href}`}>
					<motion.span className="">{name}</motion.span>
				</Link>
			)}
		</motion.span>
	);
}

export default MenuLinks;
