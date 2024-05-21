import { Button } from "@/components/Button";
import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
	return (
		<section className="relative max-sm:px-3 min-h-[30vh] grid place-items-center">
			<div className="img-newsletter sm:w-[80%] p-[2em] sm:p-[3em] md:py-[4%] flex-column border border-slate-600 rounded-xl">
				<h2 className="w-full text-center capitalize">
					Never <span className="gradient-text">miss a step!</span>
				</h2>
				<p className="w-full pt-2 sm:pt-1 sm:text-lg px-2 text-center">
					Subscribe to our super-rare and exclusive drops & collectibles.
				</p>

				<form
					action="#"
					className="relative isolate flex-column sm:row-flex mt-12 md:mt-16 gap-2 w-[80%] md:w-[60%] mx-auto"
				>
					<div className="flex-1 w-full bg-[#6e6e6e] rounded-full px-4 py-1 pr-2 row-flex gap-2">
						<span className="icon inline-block leading-none">
							<MdOutlineEmail size={20} color="#B7B4BB" />
						</span>
						<Input
							className=" text-sm i-reset pl-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-[#B7B4BB]"
							placeholder="Enter email"
						/>
					</div>
					<Button
						title="Subscribe"
						className="tracking-tight mx-auto max-sm:mt-3 w-max px-6 py-2.5 max-sm:leading-4"
					/>
				</form>
			</div>
		</section>
	);
};
export default Newsletter;
