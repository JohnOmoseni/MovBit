"use client";

import React from "react";
import Main from "./Main";
import { Button } from "@/components/Button";
import Header from "@/components/movbit/Header";
import Image from "next/image";
import { clipboard, line } from "@/constants/movbit";

function Profile() {
  return (
    <>
      <Header title="My Profile" />
      <div className="flex-column mb-6 mt-10 w-full !items-center gap-4">
        <div className="grid h-[100px] w-[100px] select-none place-items-center items-center rounded-full border-4 border-white bg-background-200 p-3 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <p className="text-5xl font-semibold">O</p>
        </div>
        <div>
          <h2 className="sm:text-5xl">John Doe</h2>
          <p className="text-center text-lg font-light text-foreground-100">
            @JohnDoe
          </p>
        </div>
      </div>

      <div className="flex-row-btwn mt-[4em] gap-3 rounded-full border-t-2 border-solid border-white border-opacity-30 px-4 py-6 pr-6 shadow-md">
        <div className="relative h-[50px] w-[50px] shadow-sm">
          <Image src={clipboard} alt="" fill className="!object-contain" />
        </div>
        <div className="w-full flex-1">
          <span className="uppercase tracking-wide text-white/40">Plan</span>
          <p className="shadow-text-100 text-3xl font-semibold">Free</p>
        </div>
        <Button
          title="Change"
          className="bg-background-200 px-6 py-2.5 font-semibold"
        />
      </div>

      <Main />

      <div className="flex-row-btwn mx-auto my-[3rem] w-[95%] gap-4">
        <div className="flex-column !items-center gap-2">
          <span className="shadow-text-100 text-base font-normal tracking-wide text-foreground text-opacity-50">
            Total steps generated
          </span>
          <p className="shadow-text-100 text-center text-3xl leading-6">0</p>
        </div>
        <div className="flex-column !items-center gap-2">
          <span className="shadow-text-100 text-base font-normal tracking-wide text-foreground text-opacity-50">
            Total steps generated
          </span>
          <p className="shadow-text-100 text-center text-3xl leading-6">0</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
