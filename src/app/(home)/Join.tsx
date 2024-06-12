import { Button } from "@/components/Button";
import Link from "next/link";

const Join = () => {
  return (
    <div className="mx-auto my-8 w-[90%]">
      <div className="grid min-h-[40vh] place-items-center rounded-md bg-gradient-to-b from-[#4A4F54] to-[#081E34] px-8 py-10 !text-white shadow-sm md:min-h-[45vh]">
        <h2 className="text-center text-3xl font-normal leading-[1.2] max-sm:px-3 sm:text-4xl lg:text-[2.5rem]">
          Join our community
        </h2>
        <Link href="#">
          <Button
            title="Get started"
            className="duration-400 mt-8 bg-white px-8 py-3 text-lg capitalize text-black shadow-sm hover:drop-shadow-lg focus:ring-2 focus:ring-slate-600 max-md:mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default Join;
