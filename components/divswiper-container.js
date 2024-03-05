import { useMemo } from "react";

const DivswiperContainer = ({
  bnbpng,
  bNB,
  prop,
  profitLoss,
  svg,
  solanaSOLjpeg,
  sOL,
  prop1,
  prop2,
  svg1,
  xRPXRPpng,
  xRP,
  prop3,
  prop4,
  svg2,
  cardanoADAjpeg,
  aDA,
  prop5,
  prop6,
  svg3,
  avalancheAVAXpng,
  aVAX,
  prop7,
  prop8,
  svg4,
  propPadding,
  propPadding1,
  propWidth,
  propFlex,
  propWidth1,
  propPadding2,
  propWidth2,
  propBackgroundColor,
  propAlignSelf,
  propColor,
  propWidth3,
  propWidth4,
  propWidth5,
  propAlignSelf1,
  propWidth6,
  propWidth7,
  propRowGap,
  propWidth8,
  propWidth9,
}) => {
  const divcoinTopStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divcoinTop1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const divincreaseStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const spanh2dF2ad7ec5Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const divcoinTop2Style = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding2,
    };
  }, [propWidth1, propPadding2]);

  const divcoinTitleStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const divincrease1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const divStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      color: propColor,
      width: propWidth3,
    };
  }, [propAlignSelf, propColor, propWidth3]);

  const div1Style = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const div2Style = useMemo(() => {
    return {
      width: propWidth5,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth5, propAlignSelf1]);

  const div3Style = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const divcoinTop3Style = useMemo(() => {
    return {
      width: propWidth7,
      rowGap: propRowGap,
    };
  }, [propWidth7, propRowGap]);

  const divcoinTitle1Style = useMemo(() => {
    return {
      width: propWidth8,
    };
  }, [propWidth8]);

  const div4Style = useMemo(() => {
    return {
      width: propWidth9,
    };
  }, [propWidth9]);

  return (
    <div className="self-stretch w-[820px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full text-left text-2xs-1 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft font-h3">
      <div className="w-[387px] flex-1 overflow-x-auto flex flex-row items-start justify-start max-w-full">
        <div className="w-[165.3px] shrink-0 flex flex-col items-start justify-start py-0 pr-[6.307692050933838px] pl-0 box-border">
          <div className="self-stretch rounded-[6.31px] flex flex-col items-start justify-start py-[10.723076820373535px] pr-[11px] pl-[10.723076820373535px] border-[0.6px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.5230767726898193px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.569230556488037px]">
                    <div
                      className="w-[73px] flex flex-row items-center justify-between py-0 pr-[0.000002406193516435451px] pl-0 box-border gap-[0px] [row-gap:20px]"
                      style={divcoinTopStyle}
                    >
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <img
                            className="w-4 h-[16.4px] relative rounded-4xs-2 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={bnbpng}
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start pt-[0.6307691931724548px] px-0 pb-0">
                          <div className="relative">{bNB}</div>
                        </div>
                      </div>
                      <div className="h-[12.6px] rounded-[1.26px] bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6 flex flex-row items-center justify-center pt-[1.7346153259277344px] px-0.5 pb-[1.4192308187484741px] box-border text-5xs-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative">{prop}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                    <div className="relative leading-[15.14px] font-medium whitespace-nowrap">
                      {profitLoss}
                    </div>
                  </div>
                </div>
                <div className="w-[126px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 pr-[18.796926498413086px] pl-[18.79692268371582px]">
                    <img
                      className="self-stretch h-[37.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src={svg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[165.3px] shrink-0 flex flex-col items-start justify-start py-0 pr-[6.307692050933838px] pl-0 box-border">
          <div className="self-stretch rounded-[6.31px] flex flex-col items-start justify-start py-[10.723076820373535px] pr-[11px] pl-[10.723076820373535px] border-[0.6px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.5230767726898193px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.569230556488037px]">
                    <div
                      className="w-[71px] flex flex-row items-center justify-between py-0 pr-[0.000002406193516435451px] pl-0 box-border gap-[0px] [row-gap:20px]"
                      style={divcoinTop1Style}
                    >
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <img
                            className="w-4 h-[16.4px] relative rounded-4xs-2 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={solanaSOLjpeg}
                          />
                        </div>
                        <div className="flex flex-row items-center justify-start pt-[0.6307691931724548px] px-0 pb-0">
                          <div className="relative">{sOL}</div>
                        </div>
                      </div>
                      <div
                        className="h-[12.6px] rounded-[1.26px] bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10 flex flex-row items-center justify-center pt-[1.7346153259277344px] px-0.5 pb-[1.4192308187484741px] box-border text-5xs-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo"
                        style={divincreaseStyle}
                      >
                        <div
                          className="flex flex-col items-start justify-start"
                          style={spanh2dF2ad7ec5Style}
                        >
                          <div className="relative">{prop1}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                    <div className="relative leading-[15.14px] font-medium whitespace-nowrap">
                      {prop2}
                    </div>
                  </div>
                </div>
                <div className="w-[126px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 pr-[18.796926498413086px] pl-[18.79692268371582px]">
                    <img
                      className="self-stretch h-[37.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src={svg1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[165.3px] shrink-0 flex flex-col items-start justify-start py-0 pr-[6.307692050933838px] pl-0 box-border">
          <div className="self-stretch rounded-[6.31px] flex flex-col items-start justify-start py-[10.723076820373535px] pr-[11px] pl-[10.723076820373535px] border-[0.6px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.5230767726898193px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.569230556488037px]">
                    <div
                      className="w-[72px] flex flex-row items-center justify-between py-0 pr-[0.000004812387032870902px] pl-0 box-border gap-[0px] [row-gap:20px]"
                      style={divcoinTop2Style}
                    >
                      <div
                        className="w-10 flex flex-row items-center justify-start"
                        style={divcoinTitleStyle}
                      >
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <img
                            className="w-4 h-[16.4px] relative rounded-4xs-2 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={xRPXRPpng}
                          />
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start pt-[0.6307691931724548px] px-0 pb-0">
                          <div className="flex-1 relative">{xRP}</div>
                        </div>
                      </div>
                      <div
                        className="h-[12.6px] w-[31px] rounded-[1.26px] bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6 flex flex-row items-center justify-center pt-[1.7346153259277344px] px-0.5 pb-[1.4192308187484741px] box-border text-5xs-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock"
                        style={divincrease1Style}
                      >
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div
                            className="self-stretch h-[9px] relative flex items-center"
                            style={divStyle}
                          >
                            {prop3}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-smi-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                    <div
                      className="w-[66px] relative leading-[15.14px] font-medium flex items-center whitespace-nowrap"
                      style={div1Style}
                    >
                      {prop4}
                    </div>
                  </div>
                </div>
                <div className="w-[126px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 pr-[18.796926498413086px] pl-[18.79692268371582px]">
                    <img
                      className="self-stretch h-[37.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src={svg2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[165.3px] shrink-0 flex flex-col items-start justify-start py-0 pr-[6.307692050933838px] pl-0 box-border">
          <div className="self-stretch flex-1 rounded-[6.31px] flex flex-col items-start justify-start py-[10.723076820373535px] pr-[11px] pl-[10.723076820373535px] border-[0.6px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.5230767726898193px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.569230556488037px]">
                    <div className="w-[70px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
                      <div className="w-[41px] flex flex-row items-center justify-start">
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <img
                            className="w-4 h-[16.4px] relative rounded-4xs-2 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={cardanoADAjpeg}
                          />
                        </div>
                        <div className="h-[12.6px] flex-1 flex flex-row items-center justify-start pt-[0.6307691931724548px] px-0 pb-0 box-border">
                          <div className="self-stretch flex-1 relative flex items-center">
                            {aDA}
                          </div>
                        </div>
                      </div>
                      <div className="h-[12.6px] w-[29px] rounded-[1.26px] bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10 flex flex-row items-center justify-center pt-[1.7346153259277344px] px-0.5 pb-[1.4192308187484741px] box-border text-5xs-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div
                            className="w-6 h-[9px] relative flex items-center"
                            style={div2Style}
                          >
                            {prop5}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start text-smi-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                    <div
                      className="w-[66px] flex-1 relative leading-[15.14px] font-medium flex items-center whitespace-nowrap"
                      style={div3Style}
                    >
                      {prop6}
                    </div>
                  </div>
                </div>
                <div className="w-[126px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 pr-[18.796926498413086px] pl-[18.79692268371582px]">
                    <img
                      className="self-stretch h-[37.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src={svg3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[165.3px] shrink-0 flex flex-col items-start justify-start py-0 pr-[6.307692050933838px] pl-0 box-border">
          <div className="self-stretch flex-1 rounded-[6.31px] flex flex-col items-start justify-start py-[10.723076820373535px] pr-2.5 pl-[10.723076820373535px] border-[0.6px] border-solid border-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.5230767726898193px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.569230556488037px]">
                    <div
                      className="w-[77px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px]"
                      style={divcoinTop3Style}
                    >
                      <div
                        className="w-[46px] flex flex-row items-center justify-start"
                        style={divcoinTitle1Style}
                      >
                        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                          <img
                            className="w-4 h-[16.4px] relative rounded-4xs-2 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src={avalancheAVAXpng}
                          />
                        </div>
                        <div className="h-[12.6px] flex-1 flex flex-row items-center justify-start pt-[0.6307691931724548px] px-0 pb-0 box-border">
                          <div className="self-stretch flex-1 relative flex items-center">
                            {aVAX}
                          </div>
                        </div>
                      </div>
                      <div className="h-[12.6px] w-[31px] rounded-[1.26px] bg-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10 flex flex-row items-center justify-center pt-[1.7346153259277344px] px-0.5 pb-[1.4192308187484741px] box-border text-5xs-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="w-[26px] h-[9px] relative flex items-center">
                            {prop7}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start text-smi-6 text-tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray">
                    <div
                      className="w-[41px] flex-1 relative leading-[15.14px] font-medium flex items-center whitespace-nowrap"
                      style={div4Style}
                    >
                      {prop8}
                    </div>
                  </div>
                </div>
                <div className="w-[126px] overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 pr-[18.796926498413086px] pl-[18.79692268371582px]">
                    <img
                      className="self-stretch h-[37.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src={svg4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivswiperContainer;
