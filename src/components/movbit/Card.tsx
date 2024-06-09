import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  containerClassName?: string;
};

function Card({ children, containerClassName }: Props) {
  return (
    <div
      className={twMerge(
        "movbit-card my-8 rounded-2xl px-4 pt-4 shadow-md",
        containerClassName,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
