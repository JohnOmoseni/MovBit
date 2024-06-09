"use client";

import { Button } from "@/components/Button";
import Card from "@/components/movbit/Card";
import Header from "@/components/movbit/Header";

import { IoWalletOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";
import { options } from "@/constants/movbit";
import Image from "next/image";

function Portfolio() {
  return (
    <>
      <Header
        title="Portfolio"
        icon={<Image src={options} alt="" width={22} height={22} />}
      />

      <div className="mt-10 w-full">
        <p className="shadow-text-100 pl-1.5 font-normal capitalize text-foreground-100">
          Total balance - USD
        </p>
        <h2 className="shadow-text-100 pl-1.5 leading-7">
          <span className="text-3xl sm:text-4xl">$159</span>
          <span className="text-xl !text-foreground-100">.05</span>
        </h2>

        <div className="row-flex my-10 !justify-start gap-4">
          <Button
            icon={IoMdSwap}
            className="bg-background-300"
            title="Transfer"
          />
          <Button
            icon={IoWalletOutline}
            className="bg-background-300"
            title="Buy"
          />
        </div>
      </div>

      <div className="mx-auto mb-[12vh] mt-[3rem]">
        <h2 className="text-3xl tracking-wide">Account Details</h2>
        <Card containerClassName="my-6 px-5 sm:px-6 py-2">
          {new Array(3).fill(null).map((item, idx) => (
            <Row key={idx} />
          ))}
        </Card>
      </div>
    </>
  );
}

export default Portfolio;

const Row = () => (
  <div className="flex-row-btwn gap-4 border-b-2 border-white/20 pb-6 pt-4 last-of-type:border-none sm:py-8">
    <div className="flex-column gap-1">
      <h3 className="font-semibold tracking-wide">156,379</h3>
      <span className="text-base tracking-wide !text-foreground-100">
        Total amount of steps taken
      </span>
    </div>
    <div className="flex-column gap-1 text-end">
      <h3 className="font-semibold tracking-wide">500.45 USDT</h3>
      <span className="text-base tracking-wide !text-foreground-100">
        Amount of USDT
      </span>
    </div>
  </div>
);
