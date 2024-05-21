import { Button } from "@/components/Button";
import Link from "next/link";

const Join = () => {
	return (
		<div className="w-[95%] mx-auto my-8">
			<div className="rounded-md py-10 px-8 shadow-sm min-h-[40vh] md:min-h-[45vh] bg-gradient-to-b from-[#4A4F54] to-[#081E34] grid place-items-center !text-white">
				<h2
					className="text-center leading-[1.2] font-normal max-sm:px-3 text-3xl sm:text-4xl lg:text-[2.5rem]
					"
				>
					Join our community
				</h2>
				<Link href="#">
					<Button
						title="Get started"
						className="max-md:mx-auto mt-8 py-3 text-lg px-8 shadow-sm capitalize bg-white text-black focus:ring-2 focus:ring-slate-600 duration-400 hover:drop-shadow-lg"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Join;
