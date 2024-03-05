import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const Tr = ({
  thPlaceholder,
  prop,
  prop1,
  nov102021About1Year,
  propWidth,
  propWidth1,
  propHeight,
  propColor,
}) => {
  const thStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divcoincontentStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const spanStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px] text-right text-sm text-gray-100 font-h3 mq450:flex-wrap">
      <TextField
        className="[border:none] bg-[transparent] h-[61px] w-[153px] font-h3 font-medium text-sm text-lightslategray-200"
        placeholder={thPlaceholder}
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#dee2e6" },
          "& .MuiInputBase-root": {
            height: "61px",
            borderRadius: "0px 0px 0px 0px",
            fontSize: "14px",
          },
          "& .MuiInputBase-input": { color: "#768396" },
          width: "153px",
        }}
        style={thStyle}
      />
      <div className="h-[61px] box-border flex flex-row items-center justify-end py-[14.5px] pr-3 pl-[52px] border-t-[1px] border-solid border-gainsboro-300">
        <div className="flex flex-col items-end justify-start gap-[4px_0px]">
          <div
            className="w-[141px] h-[11px] relative leading-[20px] font-medium flex items-center shrink-0"
            style={divcoincontentStyle}
          >
            <span className="w-full">
              <span>{prop}</span>
              <span className="text-absolute-red" style={spanStyle}>
                {prop1}
              </span>
            </span>
          </div>
          <div className="relative text-xs-2 leading-[20px]">
            {nov102021About1Year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tr;
