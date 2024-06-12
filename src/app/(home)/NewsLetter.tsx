import { Button } from "@/components/Button";
import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="relative grid min-h-[30vh] place-items-center max-sm:px-3">
      <div className="img-newsletter flex-column rounded-xl border border-slate-600 p-[2em] sm:w-[80%] sm:p-[3em] md:py-[5%] lg:w-[70%]">
        <h2 className="w-full text-center capitalize">
          Never <span className="gradient-text">miss a step!</span>
        </h2>
        <p className="w-full px-2 pt-2 text-center sm:pt-1 sm:text-lg">
          Subscribe to our super-rare and exclusive drops & collectibles.
        </p>

        <form
          action="#"
          className="flex-column sm:row-flex relative isolate mx-auto mt-12 w-[80%] gap-2 md:mt-16 md:w-[60%]"
        >
          <div className="row-flex w-full flex-1 gap-2 rounded-full bg-[#6e6e6e] px-4 py-1 pr-2">
            <span className="icon inline-block leading-none">
              <MdOutlineEmail size={20} color="#B7B4BB" />
            </span>
            <Input
              className="i-reset pl-0 text-sm text-slate-100 placeholder-[#B7B4BB] focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Enter email"
            />
          </div>
          <Button
            title="Subscribe"
            className="mx-auto w-max px-6 py-2.5 tracking-tight max-sm:mt-3 max-sm:leading-4"
          />
        </form>
      </div>
    </section>
  );
};
export default Newsletter;
