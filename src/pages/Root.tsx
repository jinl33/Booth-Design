import { FunctionComponent, useCallback } from "react";
import MenuSeparator from "../components/MenuSeparator";
import MenuShortcut from "../components/MenuShortcut";
import InputField from "../components/InputField";
import TabBarIPad from "../components/TabBarIPad";

const Root: FunctionComponent = () => {
  const onBUTTONContainerClick = useCallback(() => {
    window.open("/regulations");
  }, []);

  return (
    <div className="w-full h-[483px] relative bg-background-default-default overflow-hidden leading-[normal] tracking-[normal] text-left text-xs text-background-default-default font-body-small">
      <img
        className="absolute top-[75px] left-[15px] w-[454px] h-[408px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <form className="m-0 absolute top-[18px] left-[483px] w-[189px] h-[457.8px] flex flex-col items-end justify-start gap-[19px]">
        <button className="cursor-pointer [border:none] py-[11px] pl-[9px] pr-[7px] bg-darkgray rounded-981xl flex flex-row items-start justify-start hover:bg-gray">
          <div className="h-[38px] w-[65px] relative rounded-981xl bg-darkgray hidden" />
          <a className="[text-decoration:none] relative text-xs leading-[16px] font-medium font-body-small text-background-default-default text-left inline-block min-w-[49px] z-[1]">
            EXPORT
          </a>
        </button>
        <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pl-0 pr-2">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start relative">
            <div className="self-stretch flex-1 shadow-[0px_2.4px_2.4px_-0.6px_rgba(12,_12,_13,_0.1),_0px_2.4px_2.4px_-0.6px_rgba(12,_12,_13,_0.05)] rounded-lg bg-background-default-default border-border-default-default border-[0.6px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[4.8px] px-1 pb-[5px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[4.8px] px-[9px] pb-[2.4px]">
                <div className="w-[151.8px] relative text-4xs-4 leading-[140%] font-body-small text-text-default-secondary text-left hidden">
                  Heading
                </div>
                <div className="flex-1 relative text-3xs-6 leading-[140%] font-semibold font-body-small text-text-default-default text-left">
                  LAYOUT
                </div>
              </div>
              <MenuSeparator />
              <div className="self-stretch rounded-8xs-8 overflow-hidden hidden flex-col items-start justify-start">
                <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-[9px] gap-space-300">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/star1.svg"
                  />
                  <div className="h-[27px] flex-1 flex flex-col items-start justify-start gap-space-100">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                      <div className="self-stretch w-[116px] relative text-3xs-6 leading-[140%] font-body-small text-text-default-default text-left inline-block">
                        Menu Label
                      </div>
                      <MenuShortcut
                        shortcut="⇧A"
                        propHeight="10px"
                        propBorderRadius="4.8px"
                        propPadding="unset"
                        propFontSize="9.6px"
                        propAlignSelf="stretch"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                    </div>
                    <div className="self-stretch relative text-4xs-4 leading-[140%] font-body-small text-text-default-secondary text-left">
                      Menu description.
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-[9px] gap-space-300">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/star1.svg"
                  />
                  <div className="h-[27px] flex-1 flex flex-col items-start justify-start gap-space-100">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                      <div className="self-stretch w-[116px] relative text-3xs-6 leading-[140%] font-body-small text-text-default-default text-left inline-block">
                        Menu Label
                      </div>
                      <MenuShortcut
                        shortcut="⇧A"
                        propHeight="10px"
                        propBorderRadius="4.8px"
                        propPadding="unset"
                        propFontSize="9.6px"
                        propAlignSelf="stretch"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                    </div>
                    <div className="self-stretch relative text-4xs-4 leading-[140%] font-body-small text-text-default-secondary text-left">
                      Menu description.
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-[9px] gap-space-300">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/star1.svg"
                  />
                  <div className="h-[27px] flex-1 flex flex-col items-start justify-start gap-space-100">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                      <div className="self-stretch w-[116px] relative text-3xs-6 leading-[140%] font-body-small text-text-default-default text-left inline-block">
                        Menu Label
                      </div>
                      <MenuShortcut
                        shortcut="⇧A"
                        propHeight="10px"
                        propBorderRadius="4.8px"
                        propPadding="unset"
                        propFontSize="9.6px"
                        propAlignSelf="stretch"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                    </div>
                    <div className="self-stretch relative text-4xs-4 leading-[140%] font-body-small text-text-default-secondary text-left">
                      Menu description.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-8xs-8 hidden flex-col items-center justify-center py-padding-sm px-[9px]">
                <div className="self-stretch h-[0.6px] relative bg-border-default-default" />
              </div>
              <div className="self-stretch hidden flex-col items-start justify-start">
                <div className="self-stretch rounded-lg overflow-hidden hidden flex-row items-start justify-start py-space-300 px-[9px] gap-space-300">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/star1.svg"
                  />
                  <div className="h-[27px] flex-1 flex flex-col items-start justify-start gap-space-100">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                      <div className="self-stretch w-[116px] relative text-3xs-6 leading-[140%] font-body-small text-text-default-default text-left inline-block">
                        Menu Label
                      </div>
                      <MenuShortcut
                        shortcut="⇧A"
                        propHeight="10px"
                        propBorderRadius="4.8px"
                        propPadding="unset"
                        propFontSize="9.6px"
                        propAlignSelf="stretch"
                        propDisplay="unset"
                        propMinWidth="unset"
                      />
                    </div>
                    <div className="self-stretch relative text-4xs-4 leading-[140%] font-body-small text-text-default-secondary text-left">
                      Menu description.
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg overflow-hidden hidden flex-row items-start justify-start py-space-300 px-[9px] gap-space-300">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/star1.svg"
                  />
                  <div className="h-[27px] flex-1 flex flex-col items-start justify-start gap-space-100">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                      <div className="self-stretch w-[116px] relative text-3xs-6 leading-[140%] font-body-small text-text-default-default text-left inline-block">
                        Menu Label
                      </div>
                      <MenuShortcut shortcut="⇧A" />
                    </div>
                    <div className="self-stretch relative text-4xs-4 leading-[140%] font-body-small text-text-default-secondary text-left">
                      Menu description.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[40.2px] h-[3px] absolute !m-[0] top-[30.3px] left-[10px] z-[1]"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
            <InputField
              value="Value"
              description="Description"
              hasError={false}
              label="Height"
              error="Error"
              hasLabel
              hasDescription={false}
              propBottom="160.2px"
              propLeft="16px"
            />
            <div className="!m-[0] absolute top-[133.8px] left-[77.8px] flex flex-row items-start justify-start">
              <InputField
                value="Value"
                description="Description"
                hasError={false}
                label="Width"
                error="Error"
                hasLabel
                hasDescription={false}
              />
              <div className="relative text-3xs-6 leading-[140%] font-body-small text-miscellaneous-floating-tab-text-unselected text-left inline-block min-w-[26px] z-[2]">
                width
              </div>
            </div>
            <div className="!m-[0] absolute top-[96.6px] left-[148px] flex flex-row items-start justify-start">
              <input
                className="[border:none] [outline:none] bg-border-default-default h-[61.8px] w-[149.4px] absolute !m-[0] top-[-24.6px] left-[-132px] z-[1]"
                type="text"
              />
              <div className="relative text-3xs-6 leading-[140%] font-body-small text-miscellaneous-floating-tab-text-unselected text-left inline-block min-w-[29px] z-[2]">
                height
              </div>
            </div>
            <div className="absolute !m-[0] top-[44.4px] left-[16px] text-3xs-6 leading-[14px] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-left inline-block min-w-[61.8px] z-[1]">
              Booth Area
            </div>
            <div className="w-[61.8px] absolute !m-[0] bottom-[135.4px] left-[16px] text-3xs-6 leading-[14px] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-left inline-block z-[1]">
              Module
            </div>
            <input
              className="!m-[0] w-[19.2px] h-[19.2px] absolute bottom-[104.4px] left-[58.6px] border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border z-[1]"
              type="checkbox"
            />
            <input
              className="!m-[0] w-[19.2px] h-[19.2px] absolute bottom-[64.8px] left-[58.6px] border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border z-[1]"
              type="checkbox"
            />
            <input
              className="!m-[0] w-6 h-6 absolute bottom-[102px] left-[16px] border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border z-[1]"
              type="checkbox"
            />
            <input
              className="!m-[0] w-6 h-6 absolute bottom-[62.4px] left-[16px] border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border z-[1]"
              type="checkbox"
            />
            <div className="w-[19.2px] !m-[0] absolute right-[65.4px] bottom-[104.4px] bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border flex flex-row items-start justify-start pt-[3px] pb-px pl-[3px] pr-0.5 z-[1]">
              <div className="h-[19.2px] w-[19.2px] relative bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border hidden" />
              <div className="w-[12.6px] relative text-3xs-6 leading-[140%] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-center inline-block shrink-0 min-w-[12.6px] z-[2]">
                w
              </div>
            </div>
            <div className="w-[19.2px] !m-[0] absolute right-[65.4px] bottom-[64.8px] bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border flex flex-row items-start justify-start py-0.5 pl-[3px] pr-0.5 z-[1]">
              <div className="h-[19.2px] w-[19.2px] relative bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border hidden" />
              <div className="w-[12.6px] relative text-3xs-6 leading-[140%] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-center inline-block shrink-0 min-w-[12.6px] z-[2]">
                w
              </div>
            </div>
            <div className="w-[19.2px] !m-[0] absolute right-[30.6px] bottom-[104.4px] bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border flex flex-row items-start justify-start pt-[3px] pb-px pl-[3px] pr-0.5 z-[1]">
              <div className="h-[19.2px] w-[19.2px] relative bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border hidden" />
              <div className="w-[12.6px] relative text-3xs-6 leading-[140%] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-center inline-block shrink-0 z-[2]">
                h
              </div>
            </div>
            <div className="w-[19.2px] !m-[0] absolute right-[30.6px] bottom-[64.8px] bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border flex flex-row items-start justify-start py-0.5 pl-[3px] pr-0.5 z-[1]">
              <div className="h-[19.2px] w-[19.2px] relative bg-background-default-default border-miscellaneous-floating-tab-text-unselected border-[0.6px] border-solid box-border hidden" />
              <div className="w-[12.6px] relative text-3xs-6 leading-[140%] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-center inline-block shrink-0 z-[2]">
                h
              </div>
            </div>
            <b className="w-[7.8px] h-[7.4px] absolute !m-[0] bottom-[109.3px] left-[47.2px] text-3xs-6 tracking-[-0.14px] leading-[12px] flex font-kalam text-miscellaneous-floating-tab-text-unselected text-center items-center justify-center min-w-[7.8px] z-[1]">
              x
            </b>
            <b className="w-[7.8px] h-[7.4px] absolute !m-[0] bottom-[69.7px] left-[47.2px] text-3xs-6 tracking-[-0.14px] leading-[12px] flex font-kalam text-miscellaneous-floating-tab-text-unselected text-center items-center justify-center min-w-[7.8px] z-[1]">
              x
            </b>
            <div className="w-[39px] !m-[0] absolute right-[70.8px] bottom-[9px] rounded-581xl bg-darkgray flex flex-row items-start justify-start pt-[6.6px] pb-[6.2px] pl-[5px] pr-0.5 box-border z-[1]">
              <div className="h-[22.8px] w-[39px] relative rounded-581xl bg-darkgray hidden" />
              <div className="relative text-[7.2px] leading-[10px] font-medium font-body-small text-background-default-default text-left inline-block min-w-[31px] z-[1]">
                generate
              </div>
            </div>
            <img
              className="w-[13.2px] h-[15px] absolute !m-[0] bottom-[45px] left-[21.4px] overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/more-vertical.svg"
            />
            <div className="w-[12.6px] absolute !m-[0] bottom-[106.2px] left-[78.4px] text-3xs-6 leading-[140%] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-center inline-block min-w-[12.6px] z-[1]">
              ea
            </div>
            <div className="w-[12.6px] absolute !m-[0] bottom-[67.8px] left-[78.4px] text-3xs-6 leading-[140%] font-semibold font-body-small text-miscellaneous-floating-tab-text-unselected text-center inline-block min-w-[12.6px] z-[1]">
              ea
            </div>
          </div>
        </div>
      </form>
      <div className="absolute top-[15px] left-[15px] w-[459px] h-[41px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex-1 flex flex-row items-start justify-end">
          <TabBarIPad
            showTab7={false}
            showTab6={false}
            showTab3={false}
            tab7="OPEN"
            tab1="PARTITION"
            showTab5={false}
            showSymbolTab={false}
            tab5="Label"
            symbol="􀊫"
            tab4="Label"
            showTab4={false}
            tab3="Label"
            showTab1
            tab2="OPEN"
            tab6="Label"
            showTab2
            showSidebar={false}
          />
        </div>
        <div
          className="rounded-981xl bg-darkgray flex flex-row items-start justify-start py-[11px] pl-[9px] pr-[7px] cursor-pointer mt-[-37.5px]"
          onClick={onBUTTONContainerClick}
        >
          <div className="h-[38px] w-[93px] relative rounded-981xl bg-darkgray hidden" />
          <a className="[text-decoration:none] relative leading-[16px] font-medium text-[inherit] inline-block min-w-[77px] z-[1]">
            REGULATION
          </a>
        </div>
      </div>
    </div>
  );
};

export default Root;
