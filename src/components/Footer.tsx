"use client";

import { footerLinks } from "@/constants";
import { socialLinks } from "@/constants/socials";
import { listAnimate } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function Footer() {
  return (
    <div className="flex-column mt-8 w-full !items-center gap-2">
      <h2 className="text-shadow-300 text-4xl font-bold text-[#968E8E]">
        MovBit
      </h2>

      <div className="mb-8 mt-12 px-4 max-[400px]:w-full sm:w-[60%] md:mb-12">
        <div className="border-y border-[#968E8E] px-3 pb-6 pt-8">
          <ul className="flex-row-btwn gap-4">
            {socialLinks.map(({ src, href, name, icon: Icon }, idx) => (
              <motion.div
                variants={listAnimate}
                initial="hidden"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx}
                key={idx}
              >
                <Link
                  className="inline-block"
                  href={href}
                  title={name}
                  key={idx}
                >
                  {Icon ? (
                    <Icon color="#968E8E" size={22} className="icon" />
                  ) : (
                    (src as ReactNode)
                  )}
                </Link>
              </motion.div>
            ))}
          </ul>
        </div>

        <ul className="flex-row-btwn mt-14 gap-4 px-3 max-[360px]:flex-wrap max-[360px]:!justify-center">
          {footerLinks.map((footer, idx) => (
            <Link
              className="inline-block whitespace-pre-wrap text-center font-semibold capitalize leading-3 tracking-wide text-[#968E8E]"
              href={footer.href}
              title={footer.name}
              key={idx}
            >
              {footer.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
