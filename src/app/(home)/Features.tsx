"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { features } from "@/constants";
import { FeatureProps } from "@/types";
import Image from "next/image";
// import { listAnimate } from "@/lib/utils";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 35, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card = ({ title, body, idx, svg }: FeatureProps) => {
	return (
		<Tilt
			options={defaultOptions}
			style={{ alignSelf: `${idx % 2 ? "end" : "start"}` }}
		>
			<motion.div
				// variants={listAnimate}
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				custom={idx}
				className={`max-sm:min-h-[30vh] h-full border border-[#e8e8e848] self-start drop-shadow-sm py-8 sm:pt-14 px-5 sm:px-8 rounded-2xl transition-sm sm:odd:self-end flex-column gap-6 max-sm:!items-center select-none shadow-md`}
			>
				<div className="">
					<Image src={svg} alt="" className="" />
				</div>
				<h3 className="leading-5 text-xl text-primary font-medium">{title}</h3>
				<p
					className={`line-clamp-5 relative max-sm:text-center max-sm:min-w-[25ch]`}
				>
					{body}
				</p>
			</motion.div>
		</Tilt>
	);
};

function Features() {
	return (
		<div className="relative img-features">
			<h2 className="text-center">
				Why <span className="inline-block gradient-text">choose us?</span>
			</h2>
			<div className="row-flex md:w-[95%] mx-auto">
				<motion.div
					initial="hidden"
					whileInView="animate"
					className="py-10 sm:py-[4em] lg:pt-[5em] gap-8 lg:gap-12 justify-between grid mx-auto max-sm:grid-mobile-features sm:grid-cols-2 md:grid-cols-3 lg:!grid-cols-features sm:min-h-[140vh] md:min-h-[75vh]"
				>
					{features.map((item, idx) => {
						return <Card {...item} key={idx} idx={idx} />;
					})}
				</motion.div>
			</div>
		</div>
	);
}

export default Features;
