"use client";

import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
	return (
		<>
			<div className="flex-[1] relative px-3 max-md:mx-auto md:pl-[6%]">
				<h1 className="w-full relative max-md:text-center max-md:px-2 max-md:leading-[0.9] text-6xl lg:text-7xl">
					Move to <br className="max-sm:block hidden" /> earn
				</h1>

				<p className="sm:text-lg font-light mt-8 sm:mt-12 max-md:px-3 max-md:text-center leading-6 max-w-[50ch]">
					Ready to energize your life and turn it into earnings? With Move to
					Earn, your steps hold real value. Simply walk, run, or exercise to
					earn. Each step matters.
				</p>

				<Link href="/launch">
					<Button
						title="Launch App"
						icon={GoArrowUpRight}
						className="max-md:mx-auto mt-16 md:mt-12 py-3.5 text-lg px-10 hover:drop-shadow-sm"
					/>
				</Link>
			</div>

			<div className="relative md:flex-[1.5] flex justify-center min-w-[330px] w-full h-[400px] md:min-w-[400px] max-h-[500px] lg:h-[500px]  -z-10">
				<div className="relative w-full  ">
					<Image
						src="/images/hero.png"
						alt="hero"
						fill
						priority
						className="object-contain"
					/>
				</div>
			</div>
		</>
	);
}

export default Hero;
