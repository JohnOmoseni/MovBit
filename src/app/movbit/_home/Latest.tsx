import { Button } from "@/components/Button";
import Card from "@/components/movbit/Card";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

function Latest() {
  return (
    <Card
      containerClassName={twMerge(
        "my-[3rem] grid min-h-[50vh] shadow-sm place-items-center rounded-3xl px-8 py-10",
        "latest",
      )}
    >
      <div className="">
        <h3 className="text-center text-3xl font-semibold leading-[1.2] max-sm:px-3 sm:text-4xl">
          Read the latest health news
        </h3>
        <p className="mt-1 px-3 text-center text-lg text-foreground-100">
          Read any news from anywhere easily and you can create awesome news
        </p>

        <div className="mt-12 grid place-items-center">
          <Link href="#">
            <div className="icon learn-more w-full rounded-3xl border border-white/60 px-[3rem] py-6 text-2xl">
              Learn More
            </div>
          </Link>
          <Link href="#">
            <div className="px-8 pb-4 pt-8 text-2xl">Skip</div>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default Latest;
