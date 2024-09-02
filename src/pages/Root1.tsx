import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";

const Root1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-default-default overflow-hidden flex flex-col items-start justify-start pt-[26px] px-[21px] pb-[42px] box-border gap-[11px] leading-[normal] tracking-[normal] text-left text-2xl text-miscellaneous-floating-tab-text-unselected font-body-small">
      <div className="w-[614px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
        <b className="relative leading-[140%] mq450:text-mid mq450:leading-[24px]">
          Rigging Regulations
        </b>
        <b className="relative leading-[140%] mq450:text-mid mq450:leading-[24px]">
          Platform Height
        </b>
      </div>
      <main className="w-[1906px] flex flex-col items-start justify-start gap-[61px] max-w-full z-[1] text-left text-base text-text-default-default font-body-small gap-[15px] gap-[30px]">
        <div className="w-[221px] relative leading-[140%] hidden">
          Minimum clearance from the floor to the bottom of any hanging sign: 3m
        </div>
        <div className="w-[221px] relative text-sm leading-[20px] text-text-default-secondary hidden">
          Service lift capacity is 1500 kg
        </div>
        <FrameComponent />
        <section className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-left text-2xl text-miscellaneous-floating-tab-text-unselected font-body-small">
          <b className="relative leading-[140%] inline-block max-w-full z-[2] mq450:text-mid mq450:leading-[24px]">
            General Stand Construction Regulations
          </b>
          <FrameComponent1 />
        </section>
      </main>
    </div>
  );
};

export default Root1;
