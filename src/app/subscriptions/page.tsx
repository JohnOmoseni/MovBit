"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import Header from "@/components/movbit/Header";
import { premium, subscription } from "@/constants/movbit";
import Benefits from "./Benefits";
import Pricing from "./Pricing";

function Subscription() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] bg-secondary px-4 pb-8 pt-6 !text-foreground sm:px-[3%]">
      <Header title="Subscriptions" />

      <div className="flex-column mt-8 w-full !items-center gap-3">
        <div className="relative h-[300px] w-[400px] min-w-[380px] px-2">
          <Image src={subscription} alt="" className="!object-contain" fill />
        </div>
        <h2 className="shadow-text-100 text-3xl font-semibold sm:text-4xl">
          Premium
        </h2>
      </div>

      <div className="mx-auto my-10 w-full gap-4 sm:mt-[3.5em]">
        <motion.ul
          initial="hidden"
          whileInView="animate"
          className="flex-column !items-center gap-4 sm:grid sm:grid-cols-2 sm:justify-between sm:gap-6"
        >
          {premium.map((item, idx) => {
            return <Pricing {...item} key={idx} idx={idx} />;
          })}
        </motion.ul>
      </div>

      <p className="my-[4em] px-3 text-center font-light leading-5 tracking-wide text-foreground-100">
        Recurring billing after the trial ends in 7 days.{" "}
        <br className="max-sm:hidden" /> you can cancel at any time.
      </p>

      <Benefits />

      <Button
        title="Get Premium"
        className="shadow-text-100 mx-auto mt-6 bg-background-200 px-8 uppercase tracking-wide"
      />
    </div>
  );
}

export default Subscription;
