import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Tr from "./tr";

const InnerFrame = () => {
  return (
    <div className="flex flex-col items-start justify-start max-w-full text-left text-lg-9 text-groww-in-stocks-zomato-ltd-1440x810-default-gun-powder font-h3">
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[0px_6px]">
        <div className="relative leading-[20px] font-semibold">
          Fundamentals
        </div>
        <img
          className="h-5 w-5 relative min-h-[20px]"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className="box-border overflow-hidden flex flex-row items-center justify-center pt-[5px] px-0 pb-1.5 max-w-full text-sm text-lightslategray-200 border-b-[1px] border-solid border-gainsboro-100">
        <div className="w-[365px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
          <div className="w-[403px] flex flex-col items-start justify-start max-w-[110%] shrink-0">
            <div className="w-[341px] flex flex-row items-start justify-between pt-3 pb-[12.5px] pr-[12.078125px] pl-0 box-border max-w-full gap-[20px]">
              <div className="relative leading-[20px] font-medium">
                Bitcoin Price
              </div>
              <div className="relative text-smi leading-[20px] font-medium text-gray-100 text-right whitespace-nowrap">
                $16,815.46
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[3px] pl-0 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  24h Low / 24h High
                </div>
              </div>
              <div className="flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[11.828125px] pl-[50px] text-right text-smi text-gray-100 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  $16,382.07 / $16,874.12
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[35px] pl-0 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  7d Low / 7d High
                </div>
              </div>
              <div className="flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[11.828125px] pl-[50px] text-right text-smi text-gray-100 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  $16,382.07 / $16,874.12
                </div>
              </div>
            </div>
            <div className="w-96 flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px] text-right text-gray-100">
              <TextField
                className="[border:none] bg-[transparent] h-[46px] w-[148px] font-h3 font-medium text-sm text-lightslategray-200"
                placeholder="Trading Volume"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#dee2e6" },
                  "& .MuiInputBase-root": {
                    height: "46px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#768396" },
                  width: "148px",
                }}
              />
              <div className="flex-1 box-border flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[12.109375px] pl-3 min-w-[116px] border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium whitespace-nowrap">
                  $23,249,202,782
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[11px] pl-0 [row-gap:20px] text-right text-smi text-gray-100">
              <TextField
                className="[border:none] bg-[transparent] h-[46px] w-[188px] font-h3 font-medium text-sm text-lightslategray-200"
                placeholder="Market Cap Rank"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#dee2e6" },
                  "& .MuiInputBase-root": {
                    height: "46px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#768396" },
                  width: "188px",
                }}
              />
              <div className="flex-1 box-border flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[12.578125px] pl-[13px] min-w-[133px] border-t-[1px] border-solid border-gainsboro-300">
                <div className="h-5 w-[15px] relative leading-[20px] font-medium flex items-center">
                  #1
                </div>
              </div>
            </div>
            <div className="w-96 flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px] text-right text-gray-100">
              <TextField
                className="[border:none] bg-[transparent] h-[45px] w-[148px] font-h3 font-medium text-sm text-lightslategray-200"
                placeholder="Market Cap"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#dee2e6" },
                  "& .MuiInputBase-root": {
                    height: "45px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#768396" },
                  width: "148px",
                }}
              />
              <div className="flex-1 box-border flex flex-row items-start justify-end py-[12.5px] pr-[11.890625px] pl-3 min-w-[124px] border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium whitespace-nowrap">
                  $323,507,290,047
                </div>
              </div>
            </div>
            <div className="w-[388px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px]">
              <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-px pl-0 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  Market Cap Dominance
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] h-[45.5px] flex-1 font-h3 font-medium text-sm text-gray-100 min-w-[137px]"
                placeholder="38.343%"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#dee2e6" },
                  "& .MuiInputBase-root": {
                    height: "45.5px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#111827" },
                }}
              />
            </div>
            <div className="w-[380px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px]">
              <div className="flex flex-row items-start justify-start pt-[12.5px] pb-[13.015625px] pr-[11px] pl-0 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  Volume / Market Cap
                </div>
              </div>
              <div className="flex-1 box-border flex flex-row items-start justify-end pt-[12.5px] pb-[13.015625px] pr-[11.828125px] pl-3 min-w-[42px] text-right text-smi text-gray-100 border-t-[1px] border-solid border-gainsboro-300">
                <div className="relative leading-[20px] font-medium">
                  0.0718
                </div>
              </div>
            </div>
            <Tr
              thPlaceholder="All-Time High"
              prop="$69,044.77 "
              prop1="-75.6%"
              nov102021About1Year="Nov 10, 2021 (about 1 year)"
            />
            <Tr
              thPlaceholder="All-Time Low"
              prop="$67.81 "
              prop1="24729.1%"
              nov102021About1Year="Jul 06, 2013 (over 9 years)"
              propWidth="158px"
              propWidth1="121px"
              propHeight="16px"
              propColor="#0fba83"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerFrame;
