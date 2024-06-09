import Card from "@/components/movbit/Card";

function StepsCount() {
  return (
    <Card containerClassName="my-8 px-8 py-6">
      <div className="flex-row-btwn gap-4">
        <div className="flex-column w-full gap-1">
          <p className="shadow-text-100 text-base font-semibold capitalize text-foreground-100">
            Current step
          </p>
          <h2 className="text-shadow-100 inline-flex text-3xl font-semibold">
            <span className="!text-foreground-100">200</span>
            <span className="">/5000</span>
          </h2>
        </div>
        <div className="flex-column w-full !items-end gap-1">
          <p className="shadow-text-100 text-end text-base font-semibold capitalize text-foreground-100">
            Daily countdown
          </p>
          <p className="text-shadow-100 font-semibold">10h:30m:49s</p>
        </div>
      </div>
    </Card>
  );
}

export default StepsCount;
