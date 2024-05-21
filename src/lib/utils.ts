import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const animateMenu = {
	hidden: { opacity: 0, x: "100vw" },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.1,
			duration: 0.8,
			type: "spring",
			mass: 0.3,
			ease: "easeIn",
			when: "beforeChildren",
			delayChildren: 0.2,
			staggerChildren: 0.4,
		},
	},
	exit: {
		x: "100vw",
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const linksAni = {
	hidden: { opacity: 0, x: 100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
			duration: 0.8,
		},
	},
	exit: {
		x: -100,
		opacity: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const listAnimate = {
	hidden: { opacity: 0, y: 100 },
	animate: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.1,
			duration: 0.8,
			type: "spring",
		},
	}),
};

export const navAnimate = {
	hidden: { y: 50, opacity: 0 },
	animate: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			duration: 0.8,
			type: "spring",
		},
	}),
};
