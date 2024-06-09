import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const btn =
  "inline-flex gap-1 flex-nowrap items-center rounded-full bg-background-200 px-6 py-2.5 text-base font-semibold shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1";

function Top() {
  return (
    <nav className="flex-row-btwn gap-4 px-2">
      <Link href="/profile" className="">
        <Avatar className="icon bg-[#222327] transition-colors transition-sm hover:scale-95 active:scale-105">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
      </Link>
      <div className={btn}>
        Claimable balance: <span> 0.00</span>
      </div>
    </nav>
  );
}

export default Top;
