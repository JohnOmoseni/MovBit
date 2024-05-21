import { stats } from "@/constants";

const Stats = () => {
	return (
		<div className="grid place-items-center relative  img-stats">
			<ul className="flex-column max-sm:!items-center sm:flex-row-btwn sm:!flex-wrap gap-4 py-6 px-4 rounded-lg">
				{stats?.map((stat, idx) => (
					<li
						key={idx}
						className="max-sm:w-full flex-column max-sm:border border-white/5 rounded-md max-sm:shadow-lg !items-center relative gap-4 py-4 px-8 md:px-[4.5rem] last-of-type:after:h-0 after:absolute after:bg-border after:h-[70%] after:w-[2px] after:right-0 after:rounded-full max-lg:after:w-0"
					>
						<h3 className="text-white text-2xl">{stat.stat}</h3>
						<p className="text-sm text-center">{stat.tag}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Stats;
