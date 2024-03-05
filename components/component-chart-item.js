import Divchartitemmargin from "./divchartitemmargin";
import DivswiperContainer from "./divswiper-container";

const ComponentChartItem = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-3.5 pl-[13px] box-border max-w-full shrink-0 text-left text-5xl text-gray-1 font-h3">
      <div className="flex-1 rounded-lg bg-white box-border overflow-hidden flex flex-col items-start justify-start py-4 pr-[11px] pl-[9px] max-w-full border-[1px] border-solid border-gray-5">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[16px_0px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit">
            Team
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px_0px] max-w-full text-base">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="w-[363px] h-[124px] relative leading-[160%] inline-block shrink-0">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
                arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor
                id pretium quam. Facilisis purus convallis quam augue.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] text-center text-mini">
              <Divchartitemmargin
                sandeep="/sandeep@2x.png"
                johnSmith="John Smith"
              />
              <Divchartitemmargin
                sandeep="/sandeep-1@2x.png"
                johnSmith="Elina Williams"
              />
              <Divchartitemmargin
                sandeep="/sandeep-2@2x.png"
                johnSmith="John Smith"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px_0px] max-w-full text-lg text-gray-200 mq450:gap-[34px_0px]">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="w-[388px] flex flex-col items-start justify-start max-w-[107%] shrink-0">
                  <b className="w-[464px] h-[47px] relative leading-[26px] flex items-center shrink-0 max-w-[120%]">
                    You May Also Like
                  </b>
                </div>
                <div className="self-stretch h-[101.8px] flex flex-row flex-wrap items-center justify-start relative max-w-full z-[1] mt-[-8px] text-2xs-1 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft">
                  <DivswiperContainer
                    bnbpng="/bnbpng@2x.png"
                    bNB="BNB"
                    prop="+0.52%"
                    profitLoss="$319.34"
                    svg="/202401031434svg@2x.png"
                    solanaSOLjpeg="/solana-soljpeg@2x.png"
                    sOL="SOL"
                    prop1="-2.89%"
                    prop2="$109.33"
                    svg1="/202401031436svg@2x.png"
                    xRPXRPpng="/xrp-xrppng@2x.png"
                    xRP="XRP"
                    prop3="+0.78%"
                    prop4="$0.634810"
                    svg2="/202401031435svg@2x.png"
                    cardanoADAjpeg="/cardano-adajpeg@2x.png"
                    aDA="ADA"
                    prop5="-1.57%"
                    prop6="$0.614869"
                    svg3="/202401031434svg-1@2x.png"
                    avalancheAVAXpng="/avalanche-avaxpng@2x.png"
                    aVAX="AVAX"
                    prop7="-3.78%"
                    prop8="$41.05"
                    svg4="/202401031437svg@2x.png"
                  />
                  <div className="h-[27.5%] !m-[0] absolute top-[36.25%] right-[-11.5px] bottom-[36.25%] flex flex-row items-center justify-center py-[5px] px-0 box-border z-[1]">
                    <div className="overflow-hidden flex flex-col items-start justify-start">
                      <div className="overflow-hidden flex flex-col items-center justify-center">
                        <img
                          className="w-[34px] h-[34px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/e0d847asvg.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[27.5%] !m-[0] absolute top-[36.25%] bottom-[36.25%] left-[-18.5px] flex flex-row items-center justify-center py-[5px] px-0 box-border opacity-[0.35] z-[1]">
                    <div className="overflow-hidden flex flex-col items-start justify-start">
                      <div className="overflow-hidden flex flex-col items-center justify-center">
                        <div className="w-[34px] h-[34px] relative overflow-hidden shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="w-[388px] flex flex-col items-start justify-start max-w-[107%] shrink-0">
                  <b className="w-[464px] h-[47px] relative leading-[26px] flex items-center shrink-0 max-w-[120%]">
                    You May Also Like
                  </b>
                </div>
                <div className="self-stretch h-[101.6px] flex flex-row flex-wrap items-center justify-start relative max-w-full z-[1] mt-[-8px]">
                  <DivswiperContainer
                    bnbpng="/bitcoin-btcpng@2x.png"
                    bNB="BTC"
                    prop="+0.10%"
                    profitLoss="$45,332.83"
                    svg="/202401031434svg-2@2x.png"
                    solanaSOLjpeg="/ethereumethpng@2x.png"
                    sOL="ETH"
                    prop1="-0.21%"
                    prop2="$2,375.15"
                    svg1="/202401031435svg-1@2x.png"
                    xRPXRPpng="/lidostakedether-stethpng@2x.png"
                    xRP="stETH"
                    prop3="-0.34%"
                    prop4="$2,371.72"
                    svg2="/202401031437svg-1@2x.png"
                    cardanoADAjpeg="/uniswap-unipng@2x.png"
                    aDA="UNI"
                    prop5="-4.02%"
                    prop6="$7.3192"
                    svg3="/202401031437svg-2@2x.png"
                    avalancheAVAXpng="/centrifuge-cfgjpeg@2x.png"
                    aVAX="CFG"
                    prop7="-1.76%"
                    prop8="$0.773600"
                    svg4="/202401031437svg-3@2x.png"
                    propPadding="unset"
                    propPadding1="unset"
                    propWidth="30px"
                    propFlex="1"
                    propWidth1="80px"
                    propPadding2="unset"
                    propWidth2="49px"
                    propBackgroundColor="rgba(238, 104, 85, 0.1)"
                    propAlignSelf="unset"
                    propColor="#e96975"
                    propWidth3="26px"
                    propWidth4="59px"
                    propWidth5="unset"
                    propAlignSelf1="stretch"
                    propWidth6="47px"
                    propWidth7="70.5px"
                    propRowGap="unset"
                    propWidth8="41px"
                    propWidth9="67px"
                  />
                  <div className="h-[33.46%] !m-[0] absolute top-[32.68%] right-[-15px] bottom-[33.86%] flex flex-row items-center justify-center py-[5px] px-0 box-border z-[1]">
                    <div className="overflow-hidden flex flex-col items-start justify-start">
                      <div className="overflow-hidden flex flex-col items-center justify-center">
                        <img
                          className="w-[34px] h-[34px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/e0d847asvg.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentChartItem;
