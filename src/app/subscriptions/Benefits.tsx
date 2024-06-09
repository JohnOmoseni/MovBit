import { benefits } from "@/constants/movbit";

function Benefits() {
  return (
    <div className="my-12">
      <h3 className="text-center text-3xl">What you get from Premium</h3>

      <ul className="flex-column border-t-1 mx-auto mt-10 w-[95%] gap-2 overflow-hidden rounded-lg border-white/20 shadow-md">
        {benefits?.map((item, idx) => (
          <li
            key="idx"
            className="grid w-full place-items-center bg-background-200 px-12 py-8 text-center text-lg leading-6 text-white text-white/80 shadow-[1px_3px_20px_rgba(0_0_0_0.8)] transition-sm hover:scale-105"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Benefits;
