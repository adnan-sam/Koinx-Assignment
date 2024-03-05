const RealisedProfitLoss = () => {
  return (
    <footer className="self-stretch rounded-lg bg-white flex flex-col items-center justify-start py-6 px-4 gap-[24px_0px] text-left text-5xl text-gray-1 font-h3">
      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_57px] mq450:gap-[0px_57px]">
        <h2 className="m-0 w-[266px] relative text-inherit leading-[28.8px] font-semibold font-inherit flex items-center box-border pr-5">
          Trending Coins (24h)
        </h2>
        <div className="h-[19px] w-[76px] relative hidden text-right text-base text-primary-blue">
          <div className="absolute top-[0px] left-[0px] tracking-[-0.04em] font-medium hidden w-full h-full">
            View more
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] text-base">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/component-50.svg"
            />
            <div className="relative leading-[24px] font-medium">
              Ethereum(ETH)
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-2 bg-mintcream h-7 w-[84px] rounded flex flex-row items-center justify-center box-border gap-[0px_8px] hover:bg-gainsboro-400">
            <img
              className="h-2 w-[11px] relative"
              alt=""
              src="/polygon-2.svg"
            />
            <div className="relative text-base font-medium font-h3 text-mediumseagreen text-center">
              8.21%
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
            <img
              className="h-6 w-6 relative object-cover min-h-[24px]"
              alt=""
              src="/component-50-1@2x.png"
            />
            <div className="relative leading-[24px] font-medium">
              Bitcoin (BTC)
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-2 bg-mintcream h-7 rounded flex flex-row items-center justify-center box-border gap-[0px_8px] hover:bg-gainsboro-400">
            <img
              className="h-2 w-[11px] relative"
              alt=""
              src="/polygon-2-2.svg"
            />
            <div className="relative text-base font-medium font-h3 text-mediumseagreen text-center">
              5.26%
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
            <img
              className="h-6 w-6 relative object-cover min-h-[24px]"
              alt=""
              src="/component-50-2@2x.png"
            />
            <div className="relative leading-[24px] font-medium">
              Polygon (MATIC)
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-2 bg-mintcream h-7 rounded flex flex-row items-center justify-center box-border gap-[0px_8px] hover:bg-gainsboro-400">
            <img
              className="h-2 w-[11px] relative"
              alt=""
              src="/polygon-2-2.svg"
            />
            <div className="relative text-base font-medium font-h3 text-mediumseagreen text-center">
              4.32%
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default RealisedProfitLoss;
