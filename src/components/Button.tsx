"use client";

import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type BtnProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  dir?: "left" | "right";
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
  dir = "left",
}: BtnProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={twMerge(
        `row-flex bg-gradient transition-md relative min-w-[100px] cursor-pointer overflow-hidden rounded-full px-6 py-2.5 text-base leading-6 text-white transition-colors hover:rotate-1 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 active:scale-95 active:shadow-md ${
          Icon && "gap-2"
        }`,
        className,
      )}
    >
      {dir === "left" && Icon && (
        <Icon size={20} className="mt-0.5 font-semibold text-white" />
      )}
      {title}
      {dir === "right" && Icon && (
        <Icon size={20} className="mt-0.5 font-semibold text-white" />
      )}
    </button>
  );
};
