"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { features } from "@/constants";
import { FeatureProps } from "@/types";
import Image from "next/image";
// import { listAnimate } from "@/lib/utils";

export const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card = ({ title, body, idx, svg }: FeatureProps) => {
  return (
    <Tilt
      options={defaultOptions}
      style={{ alignSelf: `${idx % 2 ? "end" : "start"}` }}
    >
      <motion.div
        // variants={listAnimate}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        custom={idx}
        className={`flex-column h-full select-none gap-6 self-start rounded-2xl border border-[#e8e8e848] px-5 py-8 shadow-md drop-shadow-sm transition-sm max-sm:min-h-[30vh] max-sm:!items-center sm:px-8 sm:pt-14 sm:odd:self-end`}
      >
        <div className="">
          <Image src={svg} alt="" className="" />
        </div>
        <h3 className="text-xl font-medium leading-5">{title}</h3>
        <p
          className={`relative line-clamp-5 max-sm:min-w-[25ch] max-sm:text-center`}
        >
          {body}
        </p>
      </motion.div>
    </Tilt>
  );
};

function Features() {
  return (
    <div className="img-features relative">
      <h2 className="text-center">
        Why <span className="gradient-text inline-block">choose us?</span>
      </h2>
      <div className="row-flex mx-auto md:w-[95%]">
        <motion.div
          initial="hidden"
          whileInView="animate"
          className="max-sm:grid-mobile-features lg:!grid-cols-features mx-auto grid justify-between gap-8 py-10 sm:min-h-[140vh] sm:grid-cols-2 sm:py-[4em] md:min-h-[75vh] md:grid-cols-3 lg:gap-12 lg:pt-[5em]"
        >
          {features.map((item, idx) => {
            return <Card {...item} key={idx} idx={idx} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
