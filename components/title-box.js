const TitleBox = () => {
  return (
    <div className="w-[404px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-5 pl-0 box-border gap-[18px_0px] max-w-full text-left text-sm text-gray-200 font-h3">
      <div className="flex flex-row items-end justify-start py-0 pr-px pl-0 gap-[0px_7px] text-day-gray-07">
        <div className="relative">Cryptocurrencies</div>
        <div className="h-[13px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
          <img
            className="w-2.5 h-[10.5px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="relative font-medium text-gray-1">Bitcoin</div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_30px] text-2xl">
        <div className="flex flex-row items-center justify-start gap-[0px_8px]">
          <img
            className="h-8 w-8 relative object-cover"
            loading="lazy"
            alt=""
            src="/component-52@2x.png"
          />
          <div className="h-7 overflow-hidden flex flex-row items-end justify-end">
            <h3 className="mt-[-1px] m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit">
              Bitcoin
            </h3>
          </div>
          <div className="relative text-sm leading-[19.2px] font-semibold text-slategray-300">
            BTC
          </div>
        </div>
        <button className="cursor-pointer py-2 pr-1.5 pl-2.5 bg-lightslategray-200 rounded flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-lightslategray-100 hover:bg-slategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100">
          <div className="h-8 w-20 relative rounded bg-lightslategray-200 box-border hidden border-[1px] border-solid border-lightslategray-100" />
          <div className="relative text-base leading-[16px] font-medium font-h3 text-white text-left z-[1]">
            Rank #1
          </div>
        </button>
      </div>
      <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-6 pb-9 pr-0 pl-1.5 gap-[16px_0px] max-w-full text-9xl border-[1px] border-solid border-gray-5 mq450:pt-5 mq450:pb-[23px] mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start gap-[0px_32px] mq450:flex-wrap mq450:gap-[0px_32px]">
                <div className="relative leading-[38.4px] font-semibold whitespace-nowrap">
                  $16,953.04
                </div>
                <div className="h-8 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-sm text-lightslategray-200">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[0px_12px]">
                    <button className="cursor-pointer [border:none] pt-[5px] px-2.5 pb-1 bg-mintcream rounded flex flex-row items-center justify-start gap-[0px_8px] hover:bg-gainsboro-400">
                      <img
                        className="h-2 w-[11px] relative"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <div className="relative text-base font-medium font-h3 text-mediumseagreen text-center">
                        2.51%
                      </div>
                    </button>
                    <div className="relative leading-[27px] font-medium">
                      (24H)
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-base leading-[27px] font-medium whitespace-nowrap">
                ₹ 13,42,343
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[0.8px] border-solid border-gray-5" />
            <div className="flex flex-col items-start justify-start gap-[8px_0px] text-sm">
              <div className="relative leading-[19.5px] font-semibold">
                Bitcoin Price Chart (USD)
              </div>
              <div className="w-[164px] flex flex-row items-start justify-start gap-[0px_7px] text-3xs-3 text-slategray-300">
                <div className="relative leading-[8.01px] font-medium shrink-0">
                  1H
                </div>
                <div className="relative leading-[8.01px] font-medium shrink-0">
                  24H
                </div>
                <div className="h-2 flex-1 rounded-[13.15px] bg-lavender flex flex-row items-start justify-start py-0 pr-px pl-0 box-border text-primary-darkblue">
                  <div className="mb-[-1px] relative leading-[8.01px] font-medium">
                    7D
                  </div>
                </div>
                <div className="relative text-4xs-9 leading-[8.01px] font-medium shrink-0">
                  1M
                </div>
                <div className="relative text-4xs-9 leading-[8.01px] font-medium shrink-0">
                  3M
                </div>
                <div className="relative text-4xs-9 leading-[8.01px] font-medium shrink-0">
                  6M
                </div>
                <div className="relative leading-[8.01px] font-medium shrink-0">
                  1Y
                </div>
                <div className="relative leading-[8.01px] font-medium shrink-0">
                  ALL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-[-15px] self-stretch overflow-hidden flex flex-col items-start justify-start pt-px px-0 pb-0 relative gap-[14px_0px] text-right text-8xs-5">
          <div className="w-[15px] relative hidden z-[0]">16 750</div>
          <div className="w-[341px] h-[calc(100%_-_0.4px)] absolute !m-[0] top-[0.6px] bottom-[-0.2px] left-[0px]">
            <img
              className="absolute top-[-0.5px] left-[0px] w-[340.7px] h-[164.4px]"
              alt=""
            />
            <div className="absolute top-[4px] left-[16px] w-[321px] h-[146px]">
              <img
                className="absolute top-[-0.4px] left-[0.4px] w-[320.6px] h-[145.9px] z-[1]"
                alt=""
              />
              <div className="absolute top-[-1px] left-[0px] w-full h-full">
                <img
                  className="absolute top-[0.6px] left-[0.4px] w-[320.6px] h-[145.9px] z-[2]"
                  alt=""
                />
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <img
                    className="absolute top-[0.6px] left-[4.6px] w-[281.6px] h-[145.9px] z-[3]"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="absolute top-[0.4px] left-[0.4px] w-[320.6px] h-[146.3px]"
                    alt=""
                    src="/group-1.svg"
                  />
                  <img
                    className="absolute top-[15.4px] left-[0.4px] w-[320.6px] h-[131.1px] z-[5]"
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className="absolute top-[0.6px] left-[0.4px] w-0 h-[145.9px] z-[7]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[149.5px] left-[16.4px] w-[320.6px] h-[4.1px] z-[1]"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="w-[170px] h-[9px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative z-[1]">47,000</div>
            <div className="h-2 w-0 flex flex-row items-end justify-start text-center text-6xs-6 text-darkslategray">
              <div className="self-stretch w-0 relative inline-block z-[5]" />
              <div className="h-1.5 w-0 relative text-8xs-9 text-dimgray inline-block z-[5]" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 pb-1.5 pr-px pl-0">
            <div className="relative z-[6]">46,000</div>
          </div>
          <div className="w-[311px] flex flex-col items-start justify-start gap-[19px_0px]">
            <div className="relative z-[6]">45,000</div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[19px_0px]">
              <div className="relative z-[1]">44,000</div>
              <div className="relative z-[1]">42,000</div>
              <div className="relative z-[1]">42,000</div>
            </div>
            <div className="self-stretch h-2 flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border text-center">
              <div className="self-stretch flex-1 flex flex-row items-start justify-between py-0 pr-1 pl-0 gap-[20px]">
                <div className="self-stretch w-[25px] flex flex-row items-start justify-start gap-[0px_9px] text-left text-8xs-9 text-dimgray">
                  <div className="h-1.5 w-0 relative inline-block z-[1]" />
                  <div className="relative text-8xs-5 text-gray-200 text-center z-[1]">
                    16 Dec
                  </div>
                </div>
                <div className="relative z-[1]">17 Dec</div>
                <div className="relative z-[1]">18 Dec</div>
                <div className="relative z-[1]">19 Dec</div>
                <div className="relative z-[1]">20 Dec</div>
                <div className="relative z-[1]">21 Dec</div>
                <div className="relative z-[1]">22 Dec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBox;
