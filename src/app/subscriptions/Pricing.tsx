import { defaultOptions } from "@/app/(home)/Features";
import { listAnimate } from "@/lib/utils";
import { PricingProps } from "@/types";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

function Pricing({ tag, desc, yearlyPrice, price, idx }: PricingProps) {
  const bgColor =
    tag === "yearly"
      ? "linear-gradient(135deg, #3B2667 0%, #BC78EC 100%)"
      : "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)";

  return (
    <Tilt options={defaultOptions}>
      <motion.li
        variants={listAnimate}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        custom={idx}
        style={{ background: bgColor }}
        className={`flex-column h-full w-full min-w-[310px] !items-center gap-1.5 overflow-hidden rounded-2xl border border-white/30 px-6 py-8 shadow-lg drop-shadow-md transition-sm max-sm:max-w-[400px] sm:min-w-[250px] sm:px-8 sm:pt-10`}
      >
        <p className="text-lg font-medium leading-5">Yearly</p>
        <span className="text-center text-base font-light tracking-wide text-foreground-100">
          {desc}
        </span>
        <h3 className="relative my-3 text-center text-2xl font-semibold leading-7">
          {price} USDT
          <br /> {tag === "yearly" ? "per year" : "per month"}
        </h3>

        <span className="text-center text-base font-semibold tracking-wide text-foreground-100">
          <span className={`${tag === "yearly" && "!line-through"}`}>
            {yearlyPrice} USDT per year
          </span>
        </span>
      </motion.li>
    </Tilt>
  );
}

export default Pricing;
