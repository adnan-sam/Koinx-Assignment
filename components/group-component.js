import { useMemo } from "react";

const GroupComponent = ({
  divSwiperWrapper,
  calculateYourProfits,
  propBackground,
  propFlex,
  propBackground1,
  propPadding,
  propFlex1,
  propMinWidth,
  propAlignSelf,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      background: propBackground,
      flex: propFlex,
    };
  }, [propBackground, propFlex]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const ethereumETHStyle = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex1,
      minWidth: propMinWidth,
    };
  }, [propPadding, propFlex1, propMinWidth]);

  const linkStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="rounded-6xs-2 [background:linear-gradient(135deg,_#79f1a4,_#0e5cad)] flex flex-row items-start justify-start pt-3 pb-[9px] pr-6 pl-[11px] box-border gap-[26px] max-w-full text-left text-lg-7 text-white font-h3"
      style={groupDivStyle}
    >
      <div
        className="h-[140.9px] w-[362px] relative rounded-6xs-2 [background:linear-gradient(135deg,_#79f1a4,_#0e5cad)] hidden max-w-full"
        style={rectangleDivStyle}
      />
      <img
        className="h-[119.4px] w-[119.4px] relative rounded-[7.46px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src={divSwiperWrapper}
      />
      <div
        className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0"
        style={ethereumETHStyle}
      >
        <div
          className="flex flex-col items-start justify-start gap-[15px_0px]"
          style={linkStyle}
        >
          <b className="w-[182px] relative leading-[140%] inline-block z-[1]">
            {calculateYourProfits}
          </b>
          <button className="cursor-pointer [border:none] py-px pr-3.5 pl-[13px] bg-white h-[30px] rounded-[7.46px] flex flex-row items-center justify-start box-border gap-[0px_2px] whitespace-nowrap z-[1] hover:bg-gainsboro-200">
            <div className="relative text-sm-1 leading-[26.13px] font-semibold font-h3 text-gray-1 text-left">
              Check Now
            </div>
            <img
              className="h-[18.7px] w-[18.7px] relative"
              alt=""
              src="/iconlylightarrow--right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
