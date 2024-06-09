"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

function Provider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMovbit =
    pathname === "/movbit" || pathname === "/movbit/portfolio" ? true : false;

  return (
    <div
      className={twJoin(
        "relative mx-auto w-full max-w-[600px] px-4 pb-[14vh] pt-6 !text-foreground sm:px-[3%] sm:pb-[16vh]",
        isMovbit ? "bg-background" : "bg-secondary",
      )}
    >
      {children}
    </div>
  );
}

export default Provider;
