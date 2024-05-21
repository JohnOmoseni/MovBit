import Image from "next/image";
import img1 from "@images/group-foot.png";
import img2 from "@images/group-coin.png";
import img3 from "@images/group-time.png";

const images = [img1, img2, img3];

export default function Earn() {
	return (
		<div className="relative">
			<h2 className="text-center px-2">Earn while walking</h2>
			<div className="my-6 md:my-12 mx-2 sm:w-[90%] sm:mx-auto">
				<div className="flex-row-btwn">
					<div className="relative row-flex w-[300px] lg:min-w-[220px] lg:h-[240px] select-none pointer-events-none">
						<Image
							src="/images/group-foot.png"
							alt=""
							className="max-md:!object-contain"
							width={300}
							height={100}
						/>
					</div>

					<div className="relative w-[100px] select-none pointer-events-none">
						<Image
							src="/svgs/line.svg"
							alt=""
							className="!object-contain"
							width={150}
							height={20}
						/>
					</div>

					<div className="relative row-flex w-[300px] lg:min-w-[220px] lg:h-[240px] select-none pointer-events-none">
						<Image
							src="/images/group-coin.png"
							alt=""
							className="max-md:!object-contain"
							width={300}
							height={100}
						/>
					</div>

					<div className="relative w-[100px] select-none pointer-events-none">
						<Image
							src="/svgs/line.svg"
							alt=""
							width={150}
							height={20}
							className="!object-contain"
						/>
					</div>

					<div className="relative row-flex w-[300px] lg:min-w-[220px] lg:h-[240px] select-none pointer-events-none">
						<Image
							src="/images/group-time.png"
							alt=""
							className="max-md:!object-contain"
							width={300}
							height={100}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
