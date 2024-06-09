"use client";

import { steps } from "@/constants";
import { Button } from "@/components/Button";
import RevealAnimate from "@/components/RevealAnim";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GoArrowUpRight } from "react-icons/go";

function Steps() {
  return (
    <div className="p-section relative z-10 flex w-full gap-8">
      <ul className="flex-column grid-cols-card mx-auto w-full gap-12 max-md:px-4 sm:grid md:gap-[8em]">
        {steps.map((item, idx) => (
          <li
            key={idx}
            className={`${
              idx % 2 === 0 ? " " : "sm:!flex-row-reverse"
            } flex-column sm:row-flex relative gap-8 max-sm:flex-col-reverse lg:gap-[8em]`}
          >
            <RevealAnimate delay={0.8} className="relative">
              <div className="relative mx-auto h-[400px] w-full max-w-[400px] max-sm:min-w-[260px] sm:min-w-[300px] md:max-w-[700px]">
                <Image
                  src={item.imgSrc}
                  alt=""
                  fill
                  className="!object-contain"
                />
              </div>
              <div
                className={cn(
                  `absolute [background:radial-gradient(circle_at_center,_rgba(100,_220,_255,_0.8)_0,_rgba(100,_220,_255,_0)_50%)_no-repeat]`,
                  `left-1/2 top-[-50%] h-[200%] w-[200%] [mix-blend-mode:hard-light]`,
                  `opacity-20`,
                  `[transform:translateX(-50%)]`,
                )}
              />
            </RevealAnimate>

            <div className="max-sm:pr-4">
              <RevealAnimate delay={0.2}>
                <span className="text-shadow-300 ml-1 text-sm font-bold">
                  0{idx + 1}.
                </span>
              </RevealAnimate>
              <RevealAnimate>
                <h2 className="text-shadow-200">{item.title}</h2>
              </RevealAnimate>
              <RevealAnimate>
                <p className="mt-8">{item.body1}</p>
              </RevealAnimate>
              <RevealAnimate>
                <p className="mt-4">{item.body2}</p>
              </RevealAnimate>
              <RevealAnimate>
                <Link href={item.link} className="mt-12 block">
                  <Button
                    title="Learn more"
                    className="px-7 py-2.5"
                    icon={GoArrowUpRight}
                  />
                </Link>
              </RevealAnimate>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Steps;
