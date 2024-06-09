"use client";

import { IoChevronBackOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
};

function Header({ title, icon }: Props) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleClick = () => {};

  return (
    <header className="">
      <nav className="flex-row-btwn gap-4">
        <span
          className="hover:text-foreground-200 icon transition-colors transition-sm hover:scale-95 active:scale-105"
          onClick={handleGoBack}
        >
          <IoChevronBackOutline size={22} className="text-foreground" />
        </span>

        <h3 className="shadow-text-100 flex-1 text-center text-2xl text-foreground">
          {title}
        </h3>

        <span
          className="hover:text-foreground-200 icon transition-sm hover:scale-95 active:scale-105"
          onClick={handleClick}
        >
          {icon ? icon : <FaGear size={22} className="text-foreground" />}
        </span>
      </nav>
    </header>
  );
}

export default Header;
