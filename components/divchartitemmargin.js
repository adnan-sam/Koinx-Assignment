const Divchartitemmargin = ({ sandeep, johnSmith }) => {
  return (
    <div className="self-stretch rounded-[7.46px] bg-www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude flex flex-col items-center justify-start p-[11.194828987121582px] gap-[16px_0px] text-center text-mini text-gray-1 font-h3">
      <div className="h-[155px] flex flex-col items-center justify-start gap-[13.19px_0px]">
        <img
          className="w-[96.4px] flex-1 relative rounded-[6.68px] max-h-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={sandeep}
        />
        <div className="flex flex-col items-center justify-start py-0 px-[15px] gap-[4.12px_0px]">
          <div className="relative font-semibold">{johnSmith}</div>
          <div className="relative text-xs font-medium text-day-gray-06">
            Designation here
          </div>
        </div>
      </div>
      <div className="w-[340px] h-[198px] relative text-sm leading-[160%] text-left inline-block">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
};

export default Divchartitemmargin;
