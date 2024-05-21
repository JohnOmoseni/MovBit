import SectionWrapper from "@/components/SectionWrapper";

import Brands from "./Brands";
import Earn from "./Earn";
import Features from "./Features";
import Stats from "./Stats";
import Steps from "./Steps";
import Newsletter from "./NewsLetter";
import FAQ from "./Faq";
import Join from "./Join";
import { cn } from "@/lib/utils";
import Hero from "./Hero";

export default function Home() {
	return (
		<>
			<div className="hero pt-[18vh] md:pt-[25vh] lg:pt-[5%] min-h-dvh flex-column md:row-flex gap-12 lg:gap-8 relative">
				<Hero />

				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(100,_220,_255,_0.8)_0,_rgba(100,_220,_255,_0)_40%)_no-repeat]`,
						`[mix-blend-mode:hard-light] w-[125%] h-[125%] top-[70%] left-1/2`,
						`opacity-20`,
						`[transform:translateX(-50%)]`
					)}
				/>
			</div>

			<Brands />

			<main className="h-full my-[3em]">
				<SectionWrapper>
					<Earn />{" "}
				</SectionWrapper>
				<SectionWrapper>
					<Features />{" "}
				</SectionWrapper>
				<SectionWrapper>
					<Stats />{" "}
				</SectionWrapper>
				<SectionWrapper>
					<Steps />{" "}
				</SectionWrapper>
				<SectionWrapper>
					<Newsletter />{" "}
				</SectionWrapper>
				<SectionWrapper>
					<FAQ />{" "}
				</SectionWrapper>
				<SectionWrapper>
					<Join />{" "}
				</SectionWrapper>
			</main>
		</>
	);
}
