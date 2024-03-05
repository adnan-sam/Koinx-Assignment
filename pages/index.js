import TitleBox from "../components/title-box";
import Divcointopmargin from "../components/divcointopmargin";
import Divcol from "../components/divcol";
import InnerFrame from "../components/inner-frame";
import HideCoinFillC from "../components/hide-coin-fill-c";
import ChartItemContainer from "../components/chart-item-container";
import LidoStakedEtherstETHpng from "../components/lido-staked-etherst-e-t-hpng";
import Img from "../components/img";
import ComponentChartItem from "../components/component-chart-item";
import NextButton from "../components/next-button";
import RealisedProfitLoss from "../components/realised-profit-loss";

const Bitcoin = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-center justify-start gap-[18px_0px] tracking-[normal]">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border top-[0] z-[99] sticky max-w-full">
        <div className="flex-1 bg-white shadow-[0px_1px_8px_rgba(19,_40,_56,_0.08)] flex flex-row items-center justify-center p-0.5 box-border max-w-full">
          <div className="h-16 w-[411px] relative bg-white shadow-[0px_1px_8px_rgba(19,_40,_56,_0.08)] hidden max-w-full" />
          <header className="flex-1 flex flex-row items-center justify-between pt-[17px] pb-4 pr-[23px] pl-[22px] box-border max-w-full gap-[20px] z-[1]">
            <img
              className="h-[20.3px] w-[81px] relative overflow-hidden shrink-0 object-contain"
              loading="lazy"
              alt=""
              src="/1-koinx-logo@2x.png"
            />
            <img
              className="h-[27.4px] w-[27.4px] relative object-cover"
              loading="lazy"
              alt=""
              src="/menublack18dp@2x.png"
            />
          </header>
        </div>
      </div>
      <section className="ml-[498px] w-[881px] flex flex-col items-start justify-start gap-[18px_0px] max-w-[214%] shrink-0 text-left text-5xl text-gray-1 font-h3">
        <TitleBox />
        <Divcointopmargin />
        <div className="w-96 rounded-lg bg-white box-border flex flex-col items-center justify-start py-4 pr-2 pl-[9px] gap-[16px_0px] max-w-full border-[1px] border-solid border-gray-5">
          <div className="self-stretch flex flex-row items-start justify-start">
            <h2 className="m-0 w-[171px] relative text-inherit leading-[28.8px] font-semibold font-inherit flex items-center box-border pr-5">
              Performance
            </h2>
          </div>
          <Divcol />
          <InnerFrame />
        </div>
        <div className="w-96 rounded-lg bg-white box-border overflow-hidden flex flex-col items-end justify-start pt-4 px-0 pb-[15px] max-w-full border-[1px] border-solid border-gray-5">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-0 pl-2">
            <h2 className="m-0 w-[140px] relative text-inherit leading-[28.8px] font-semibold font-inherit flex items-center box-border pr-5">
              Sentiment
            </h2>
          </div>
          <HideCoinFillC />
          <div className="w-[274px] flex flex-row items-start justify-start pt-0 pb-11 pr-2.5 pl-5 box-border text-base-1 text-groww-in-stocks-zomato-ltd-1440x810-default-waterloo">
            <div className="flex-1 flex flex-col items-start justify-start relative">
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-1.5 pl-2 gap-[0px_9px] text-mini">
                <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
                  <div className="relative leading-[22px] font-medium inline-block max-w-[53.709999084472656px]">
                    Buy
                  </div>
                </div>
                <div className="h-2 flex-1 relative rounded-sm bg-groww-in-stocks-zomato-ltd-1440x810-default-persian-green" />
                <div className="relative text-[14.3px] leading-[22px] font-medium">
                  76%
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start p-2 gap-[0px_9px]">
                <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                  <div className="relative leading-[22px] font-medium inline-block max-w-[53.709999084472656px]">
                    Hold
                  </div>
                </div>
                <div className="h-2 w-[33px] relative rounded-sm bg-groww-in-stocks-zomato-ltd-1440x810-default-french-gray" />
                <div className="relative text-base-6 leading-[22px] font-medium">
                  8%
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2 relative gap-[0px_77px]">
                <div className="relative leading-[22px] font-medium inline-block max-w-[53.709999084472656px]">
                  Sell
                </div>
                <div className="h-2 w-[41px] absolute !m-[0] top-[calc(50%_-_4px)] left-[61.7px] rounded-sm bg-absolute-red" />
                <div className="relative text-base-6 leading-[22px] font-medium">
                  16%
                </div>
              </div>
              <div className="w-[156.9px] h-[120px] !m-[0] absolute top-[calc(50%_-_60px)] left-[-120px] flex flex-col items-start justify-start z-[1] text-[36.4px] text-absolute-green">
                <div className="flex-1 rounded-[59.22px] bg-mintcream flex flex-row items-center justify-center py-[32.25px] pr-[27px] pl-[29px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[0px_2px]">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-[3px]">
                      <div className="relative font-medium">76</div>
                    </div>
                    <div className="flex flex-col items-start justify-start text-base">
                      <div className="relative leading-[22px] font-medium">
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 text-lg-9 text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder">
            <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[0px_6px]">
              <div className="relative leading-[20px] font-semibold">
                Fundamentals
              </div>
              <img
                className="h-5 w-5 relative min-h-[20px]"
                alt=""
                src="/frame.svg"
              />
            </div>
          </div>
          <ChartItemContainer />
        </div>
      </section>
      <section className="w-96 rounded-lg bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-4 pb-[17px] pr-0 pl-2.5 gap-[9px_0px] max-w-full shrink-0 text-left text-lg text-gray-200 font-h3 border-[1px] border-solid border-gray-5">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[7px] px-0 text-5xl text-gray-1">
          <h2 className="m-0 w-[178px] relative text-inherit leading-[28.8px] font-semibold font-inherit flex items-center box-border pr-5">
            About Bitcoin
          </h2>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
            <b className="w-[163px] relative leading-[26px] flex items-center box-border pr-5">
              What is Bitcoin?
            </b>
            <div className="w-[363px] relative text-base leading-[160%] text-gray-1 inline-block">
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[10px_0px] max-w-full">
            <b className="w-[259px] relative leading-[26px] flex items-center box-border pr-5">
              Lorem ipsum dolor sit amet
            </b>
            <div className="w-[363px] h-[754px] relative text-base leading-[160%] text-gray-1 inline-block">
              <p className="m-0 whitespace-pre-wrap">{`Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>
          </div>
        </div>
        <LidoStakedEtherstETHpng />
        <Img />
      </section>
      <ComponentChartItem />
      <NextButton />
      <RealisedProfitLoss />
    </div>
  );
};

export default Bitcoin;
