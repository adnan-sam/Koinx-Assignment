import GroupComponent from "./group-component";

const Img = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full">
      <GroupComponent
        divSwiperWrapper="/rectangle-11947-1@2x.png"
        calculateYourProfits="Calculate your tax liability"
        propBackground="linear-gradient(135.73deg, #ff9865, #ef3031)"
        propFlex="1"
        propBackground1="linear-gradient(135.73deg, #ff9865, #ef3031)"
        propPadding="0px 0px 7px"
        propFlex1="1"
        propMinWidth="118px"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default Img;
