"use client";

import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type BtnProps = {
	title: string;
	className?: string;
	type?: "button" | "submit" | "reset";
	icon?: IconType;
	disabled?: boolean;
	onClick?: () => void;
};

export const Button = ({
	title,
	className,
	type,
	icon: Icon,
	onClick,
}: BtnProps) => {
	return (
		<button
			type={type || "button"}
			onClick={onClick}
			className={twMerge(
				`py-1.5 cursor-pointer row-flex px-5 bg-gradient text-white min-w-[100px] text-sm leading-6 relative rounded-full overflow-hidden transition-md transition-colors active:scale-95 active:translate-y-[1px] active:shadow-md ${
					Icon && "gap-2"
				}`,
				className
			)}
		>
			{title}
			{Icon && <Icon size={20} className="text-white font-semibold mt-0.5" />}
		</button>
	);
};
