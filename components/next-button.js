import { Button } from "@mui/material";

const NextButton = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-3.5 box-border max-w-full shrink-0 text-center text-3xl text-white font-h3">
      <div className="flex-1 rounded-2xl bg-primary-blue flex flex-col items-center justify-start pt-6 px-2.5 pb-[33px] box-border gap-[20px_0px] max-w-full mq450:pt-5 mq450:pb-[21px] mq450:box-border">
        <div className="w-[379px] h-96 relative rounded-2xl bg-primary-blue hidden max-w-full" />
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px_0px]">
          <img
            className="w-[149px] h-[139px] relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/frame-4.svg"
          />
          <h3 className="m-0 self-stretch relative text-inherit leading-[40px] font-bold font-inherit z-[1]">
            Get Started with KoinX for FREE
          </h3>
        </div>
        <div className="w-[359px] relative text-sm font-medium text-whitesmoke-100 inline-block z-[1]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
        <Button
          className="w-[241px] h-12 z-[1]"
          endIcon={
            <img
              width="20px"
              height="20px"
              src="/iconlylightarrow--right-2.svg"
            />
          }
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#0f152a",
            fontSize: "14",
            background: "#fff",
            borderRadius: "8px",
            "&:hover": { background: "#fff" },
            width: 241,
            height: 48,
          }}
        >
          Get Started for FREE
        </Button>
      </div>
    </section>
  );
};

export default NextButton;
