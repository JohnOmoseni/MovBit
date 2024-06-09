"use client";

import Link from "next/link";
import React from "react";
import { footer } from "@/constants/movbit";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

function Footer() {
  const pathname = usePathname();

  const isProfile =
    pathname === "/movbit/profile" || pathname === "/subscriptions"
      ? true
      : false;
  return (
    <div
      style={{ zIndex: 999 }}
      className={twMerge(
        "absolute bottom-3.5 left-4 right-4 grid min-h-[10vh] rounded-lg px-6 py-3 shadow-md sm:left-[3%] sm:right-[3%]",
        isProfile ? "movbit-profile" : "movbit-footer",
      )}
    >
      <div className="flex-row-btwn gap-4">
        {footer?.map(
          ({ href, title, icon: IconOutline, iconFill: IconFill }, idx) => {
            const isActive = pathname === href;
            return (
              <Link
                href={href}
                className="flex-column !items-center gap-1"
                key={idx}
              >
                <span>
                  {isActive ? (
                    <IconFill size={20} className="icon !text-secondary-100" />
                  ) : (
                    <IconOutline
                      size={20}
                      className="icon !text-foreground-100"
                    />
                  )}
                </span>
                <p
                  className={`${isActive ? "font-semibold tracking-wide text-secondary-100" : "font-light text-foreground-100"} shadow-text-100 text-base transition-sm`}
                >
                  {title}
                </p>
              </Link>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Footer;
