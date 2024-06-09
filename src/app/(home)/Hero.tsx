"use client";

import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  return (
    <>
      <div className="relative flex-[1] px-3 max-md:mx-auto md:pl-[6%]">
        <h1 className="relative w-full text-6xl max-md:px-2 max-md:text-center max-md:leading-[0.9] lg:text-7xl">
          Move to <br className="hidden max-sm:block" /> earn
        </h1>

        <p className="mt-8 max-w-[50ch] font-light leading-6 max-md:px-3 max-md:text-center sm:mt-12 sm:text-lg">
          Ready to energize your life and turn it into earnings? With Move to
          Earn, your steps hold real value. Simply walk, run, or exercise to
          earn. Each step matters.
        </p>

        <Link href="/movbit">
          <Button
            title="Launch App"
            icon={GoArrowUpRight}
            dir="right"
            className="mt-16 px-8 py-3.5 text-lg hover:drop-shadow-sm max-md:mx-auto md:mt-12"
          />
        </Link>
      </div>

      <div className="relative -z-10 flex h-[400px] max-h-[500px] w-full min-w-[330px] select-none justify-center md:min-w-[400px] md:flex-[1.5] lg:h-[470px]">
        <Image
          src="/images/hero.png"
          alt="hero"
          fill
          priority
          className="!object-contain"
        />
      </div>
    </>
  );
}

export default Hero;
