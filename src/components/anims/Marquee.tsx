import React, { useEffect, useRef, useState } from "react";
import logo1 from "@svgs/brand1.svg";
import logo2 from "@svgs/brand2.svg";
import logo3 from "@svgs/brand3.svg";
import logo4 from "@svgs/brand4.svg";

import { cn } from "@/lib/utils";
import Image from "next/image";

const images = [logo1, logo2, logo3, logo4];

const Marquee = () => {
  const [start, setStart] = useState(false);
  const direction = "left";
  const speed = "fast" as string;
  const pauseOnHover = true;
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef?.current) {
      if (direction === "left") {
        containerRef?.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef?.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 my-[5em] w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex-row-btwn w-max min-w-full shrink-0 flex-nowrap gap-16 py-4 max-sm:gap-8",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {images.map((img, idx) => (
          <li
            className="relative h-[50px] w-[150px] min-w-min flex-shrink-0"
            key={idx}
          >
            <Image src={img} className="!object-contain" alt="" fill />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
