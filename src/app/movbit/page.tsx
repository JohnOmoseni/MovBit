"use client";

import { Button } from "@/components/Button";
import Link from "next/link";
import Card from "@/components/movbit/Card";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import StepsCount from "./_home/StepsCount";
import GetMore from "./_home/GetMore";
import Latest from "./_home/Latest";
import Actions from "./_home/Actions";
import Top from "./_home/Top";

function Page() {
  return (
    <div className="relative">
      <Top />

      <Card containerClassName="mt-10 mb-12 py-8 px-6 sm:px-8">
        <div className="flex-row-btwn gap-4">
          <div className="flex-column w-full flex-1 gap-1">
            <p className="shadow-text-100 font-normal uppercase text-foreground-100">
              Total steps
            </p>
            <h2 className="shadow-text-100 inline-flex text-3xl leading-6">
              15,026
            </h2>
            <div className="row-flex mt-6 !justify-start gap-1.5">
              <span className="font-normal capitalize leading-5 !text-foreground-100">
                Earned Movbit:
              </span>
              <span className="!text-lg font-semibold">1,190.57</span>
            </div>
          </div>

          <Link href="/movbit/portfolio" className="min-w-max">
            <Button
              icon={MdOutlineKeyboardDoubleArrowRight}
              dir="right"
              className={`inline-flex min-w-[80px] gap-1 bg-background-200 font-semibold`}
              title="Portfolio"
            />
          </Link>
        </div>
      </Card>

      <Actions />
      <StepsCount />
      <GetMore />
      <Latest />
    </div>
  );
}

export default Page;
