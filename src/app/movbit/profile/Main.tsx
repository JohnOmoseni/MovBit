import { TabProps, TabsProps } from "@/types";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import TabsPanel from "./TabsPanel";
import TabContent from "./TabContent";
import Image from "next/image";
import { line } from "@/constants/movbit";

const tabIDs = ["Today", "Week", "Year"];

function Main() {
  const [activeTab, setActiveTab] = useState(tabIDs[0]);
  const [activeCard, setActiveCard] = useState(0);

  const changeTab = (id: string) => {
    id && setActiveTab(id);
  };

  return (
    <div className="relative mt-[2em] rounded-lg bg-background-200 px-6 py-6 shadow-sm sm:px-8">
      <Tabs activeTab={activeTab} changeTab={changeTab} tabIDs={tabIDs} />

      <div className="mb-6 mt-10 grid min-h-[150px] w-full place-items-center !items-stretch gap-4 overflow-hidden">
        <TabsPanel activeTab={activeTab} id={tabIDs[0]} idx={0}>
          <TabContent title="Today" />
        </TabsPanel>

        <TabsPanel activeTab={activeTab} id={tabIDs[1]} idx={1}>
          <TabContent title="Monthly" />
        </TabsPanel>

        <TabsPanel activeTab={activeTab} id={tabIDs[2]} idx={2}>
          <TabContent title="Yearly" />
        </TabsPanel>
      </div>
      <div className="relative border-t-2 border-dashed border-white/30 px-3 py-4">
        <div className="flex-row-btwn gap-4">
          {/* <div className="absolute left-0 top-0 h-1 w-full">
            <Image src={line} alt="" fill className="re" />
          </div> */}
          <span className="text-shadow-100 text-base font-semibold">12</span>
          <span className="text-shadow-100 text-base font-semibold">25</span>
          <span className="text-shadow-100 text-base font-semibold">53</span>
        </div>
      </div>
    </div>
  );
}

export default Main;

const Tabs = ({ activeTab, changeTab, tabIDs }: TabsProps) => {
  return (
    <div className="row-flex">
      <div className="mx-auto w-[96%] rounded-full border border-white/10 bg-background-100 bg-opacity-10">
        <ul
          role="tablist"
          aria-label="Tabs"
          className="row-flex !justify-between gap-x-2"
        >
          {tabIDs.map((tab, idx) => {
            return (
              <Tab
                key={idx}
                id={tabIDs[idx]}
                activeTab={activeTab}
                tab={tab}
                changeTab={changeTab}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Tab = ({ id, activeTab, tab, changeTab, className }: TabProps) => {
  return (
    <li
      id={id}
      role="tab"
      aria-selected={activeTab === id ? "true" : "false"}
      className={twMerge(
        `${
          activeTab === id ? "bg-foreground text-black" : "text-foreground-100"
        } relative cursor-pointer rounded-full px-6 py-2.5 text-center font-normal capitalize leading-5 transition-sm max-sm:text-base sm:px-10`,
        className,
      )}
      onClick={() => changeTab(id)}
    >
      {tab}
    </li>
  );
};
