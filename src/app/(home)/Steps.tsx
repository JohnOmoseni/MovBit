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
		<div className="w-full relative z-10 p-section gap-8 flex">
			<ul className="max-md:px-4 w-full mx-auto flex-column gap-12 md:gap-[8em] sm:grid grid-cols-card">
				{steps.map((item, idx) => (
					<li
						key={idx}
						className={`${
							idx % 2 === 0 ? " " : "sm:!flex-row-reverse"
						} relative flex-column max-sm:flex-col-reverse sm:row-flex lg:gap-[8em] gap-8`}
					>
						<RevealAnimate delay={0.8} className="relative">
							<div className="relative w-full h-[400px] mx-auto max-sm:min-w-[260px] sm:min-w-[300px] max-w-[400px] md:max-w-[700px]">
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
									`[mix-blend-mode:hard-light] w-[200%] h-[200%] top-[-50%] left-1/2`,
									`opacity-20`,
									`[transform:translateX(-50%)]`
								)}
							/>
						</RevealAnimate>

						<div className="max-sm:pr-4">
							<RevealAnimate delay={0.2}>
								<span className="text-sm text-shadow-300 font-bold ml-1">
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
										className="py-2.5 pl-6 pr-5"
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
