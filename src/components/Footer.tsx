"use client";

import { footerLinks } from "@/constants";
import { socialLinks } from "@/constants/socials";
import { listAnimate } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function Footer() {
	return (
		<div className="w-full flex-column !items-center gap-2 mt-8">
			<h2 className="text-[#968E8E]  text-4xl font-bold text-shadow-300">
				MovBit
			</h2>

			<div className="max-[400px]:w-full px-4 sm:w-[60%] mt-12 mb-8 md:mb-12">
				<div className="pt-8 pb-6 px-3 border-y border-[#968E8E]">
					<ul className="flex-row-btwn gap-4">
						{socialLinks.map(({ src, href, name, icon: Icon }, idx) => (
							<motion.div
								variants={listAnimate}
								initial="hidden"
								whileInView="animate"
								viewport={{ once: true, amount: 0.2 }}
								custom={idx}
								key={idx}
							>
								<Link
									className="inline-block"
									href={href}
									title={name}
									key={idx}
								>
									{Icon ? (
										<Icon color="#968E8E" size={22} className="icon" />
									) : (
										(src as ReactNode)
									)}
								</Link>
							</motion.div>
						))}
					</ul>
				</div>

				<ul className="mt-14 px-3 flex-row-btwn gap-4 max-[360px]:flex-wrap max-[360px]:!justify-start">
					{footerLinks.map((footer, idx) => (
						<Link
							className="capitalize inline-block whitespace-pre-wrap font-semibold tracking-wide text-[#968E8E]"
							href={footer.href}
							title={footer.name}
							key={idx}
						>
							{footer.name}
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Footer;
