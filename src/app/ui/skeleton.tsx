const Cards = () => {
  return (
    <div className="drop-shadow-lg rounded-md max-w-sm w-4/5 lg:w-64 lg:h-80 bg-White dark:bg-DarkBlueDM">
      <div className="animate-pulse flex flex-col">
        <div className="rounded-t-md bg-slate-200 dark:bg-slate-700 h-[164.63px] w-full lg:h-[152.03px] lg:w-full"></div>
        <div className="flex flex-col p-6 gap-2">
          <div className="h-7 w-full bg-slate-200 dark:bg-slate-700 rounded-full mb-2"></div>
          <div className="flex flex-row w-full gap-1 justify-start">
            <div className="h-6 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            <div className="h-6 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          </div>
          <div className="flex flex-row w-full gap-1 justify-start">
            <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          </div>
          <div className="flex flex-row w-full gap-1 justify-start">
            <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            <div className="h-6 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-10 w-full items-center lg:flex-row lg:flex-wrap lg:justify-between">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};
