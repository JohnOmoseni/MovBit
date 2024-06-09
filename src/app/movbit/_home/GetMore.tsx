import { Button } from "@/components/Button";
import Card from "@/components/movbit/Card";
import React from "react";
import { twMerge } from "tailwind-merge";

function GetMore() {
  return (
    <Card
      containerClassName={twMerge(
        "my-[3rem] rounded-3xl px-8 py-8 grid min-h-[50vh] place-items-center shadow-sm md:min-h-[50vh]",
        "get-more",
      )}
    >
      <div className="">
        <h3 className="text-center text-3xl font-semibold leading-[1.2] max-sm:px-3 sm:text-4xl">
          Get more $TREDS
        </h3>
        <p className="mt-1 text-center text-lg font-semibold leading-6 tracking-wide text-foreground-100">
          Return in 24 hrs to win again
        </p>
        <div className="my-8 grid place-items-center rounded-xl border border-white/60 px-8 py-8 shadow-sm">
          <p className="mb-3 text-xl">Added to Wallet</p>
          <h2 className="shadow-text-100 text-center text-4xl uppercase">
            10 TREDS
          </h2>
        </div>

        <div className="row-flex mx-auto mt-8 gap-1.5 rounded-full bg-foreground px-6 py-3 text-center text-base font-normal capitalize leading-6 text-black shadow-md focus:ring-2 focus:ring-ring sm:px-8">
          Spin again in:{" "}
          <span className="!text-lg font-semibold">23h:57m:06s</span>
        </div>
      </div>
    </Card>
  );
}

export default GetMore;
