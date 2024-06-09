import Image from "next/image";
import { notes } from "@/constants/movbit";
import { IoWalletOutline } from "react-icons/io5";

function Actions() {
  return (
    <div className="row-flex my-12 gap-6 pl-2">
      <div className="flex-column !items-center gap-1">
        <span className="clip-circle grid h-[80px] w-[80px] place-items-center rounded-[50%] bg-background-300">
          <IoWalletOutline size={25} className="icon" color="" />
        </span>
        <p className="mt-2 text-base font-semibold">Buy</p>
      </div>

      <div className="flex-column !items-center gap-1">
        <span className="clip-circle grid h-[80px] w-[80px] place-items-center rounded-[50%] bg-background-300">
          <Image src={notes} alt="" width={25} height={25} className="" />
        </span>
        <p className="mt-2 text-base font-semibold">Grow</p>
      </div>
    </div>
  );
}

export default Actions;
