import { FunctionComponent } from "react";
import MenuSeparator from "./MenuSeparator";
import MenuItem from "./MenuItem";
import MenuShortcut from "./MenuShortcut";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1313px] flex flex-row items-start justify-between max-w-full gap-5 text-left text-sm text-text-default-secondary font-body-small mq1250:flex-wrap ${className}`}
    >
      <div className="w-[301px] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1.5 px-[7px] pb-[79px]">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100">
          <div className="w-[253px] relative leading-[140%] hidden">
            Heading
          </div>
          <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
            Rigging Restrictions
          </div>
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start text-base text-text-default-default">
          <MenuItem
            description="Rigging is not allowed at Expand North Star 2024"
            hasDescription
            label="Not Permitted"
            hasIcon
            propHeight="unset"
            propFlex="unset"
            propAlignSelf="unset"
            propColor="#1e1e1e"
          />
          <MenuItem
            description="Maximum height for hanging signs from the floor: 6m"
            hasDescription
            label="Height Regulations for Hanging Signs"
            hasIcon
            propHeight="unset"
            propFlex="unset"
            propAlignSelf="unset"
            propColor="#1e1e1e"
          />
          <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-space-400 gap-space-300">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/star.svg"
            />
            <div className="h-[46px] flex-1 flex flex-col items-start justify-start gap-space-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                <div className="self-stretch w-[193px] relative leading-[140%] inline-block">
                  Menu Label
                </div>
                <MenuShortcut
                  shortcut="⇧A"
                  propHeight="16px"
                  propBorderRadius="8px"
                  propPadding="unset"
                  propFontSize="16px"
                  propAlignSelf="stretch"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
              <div className="self-stretch relative text-sm leading-[140%] text-text-default-secondary">
                Menu description.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[17px] rounded-lg hidden flex-col items-center justify-center py-padding-sm px-padding-lg box-border">
          <div className="self-stretch h-px relative bg-border-default-default hidden" />
        </div>
        <div className="self-stretch hidden flex-col items-start justify-start">
          <MenuItem
            description="Menu description."
            hasDescription
            label="Menu Label"
            hasIcon
            propHeight="46px"
            propFlex="1"
            propAlignSelf="stretch"
            propColor="#757575"
            shortcut="⇧A"
            propHeight1="16px"
            propBorderRadius="8px"
            propPadding="unset"
            propFontSize="16px"
            propAlignSelf1="stretch"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <MenuItem
            description="Menu description."
            hasDescription
            label="Menu Label"
            hasIcon
            propHeight="46px"
            propFlex="1"
            propAlignSelf="stretch"
            propColor="#757575"
            shortcut="⇧A"
            propHeight1="16px"
            propBorderRadius="8px"
            propPadding="unset"
            propFontSize="16px"
            propAlignSelf1="stretch"
            propDisplay="unset"
            propMinWidth="unset"
          />
        </div>
      </div>
      <div className="w-[409px] flex flex-col items-start justify-start max-w-full">
        <div className="w-[301px] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-1.5 px-[7px] pb-[241px] mq825:pt-5 mq825:pb-[157px] mq825:box-border">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100">
            <div className="w-[253px] relative leading-[140%] hidden">
              Heading
            </div>
            <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
              Floor Load Capacity
            </div>
          </div>
          <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
          <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start text-base text-text-default-default">
            <MenuItem
              description="300kg/sqm"
              hasDescription
              label="Tent"
              hasIcon
              propHeight="unset"
              propFlex="unset"
              propAlignSelf="unset"
              propColor="#757575"
            />
            <MenuItem
              description="250kg/sqm"
              hasDescription
              label="Cruise Terminal Upper Level"
              hasIcon
              propHeight="unset"
              propFlex="unset"
              propAlignSelf="unset"
              propColor="#757575"
            />
            <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-space-400 gap-space-300">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/star.svg"
              />
              <div className="h-[46px] flex-1 flex flex-col items-start justify-start gap-space-100">
                <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                  <div className="self-stretch w-[193px] relative leading-[140%] inline-block">
                    Menu Label
                  </div>
                  <MenuShortcut
                    shortcut="⇧A"
                    propHeight="16px"
                    propBorderRadius="8px"
                    propPadding="unset"
                    propFontSize="16px"
                    propAlignSelf="stretch"
                    propDisplay="unset"
                    propMinWidth="unset"
                  />
                </div>
                <div className="self-stretch relative text-sm leading-[140%] text-text-default-secondary">
                  Menu description.
                </div>
              </div>
            </div>
          </div>
          <MenuSeparator propPadding="8px 16px" propBorderRadius="8px" />
          <div className="self-stretch hidden flex-col items-start justify-start">
            <MenuItem
              description="Menu description."
              hasDescription
              label="Menu Label"
              hasIcon
              propHeight="46px"
              propFlex="1"
              propAlignSelf="stretch"
              propColor="#757575"
              shortcut="⇧A"
              propHeight1="16px"
              propBorderRadius="8px"
              propPadding="unset"
              propFontSize="16px"
              propAlignSelf1="stretch"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <MenuItem
              description="Menu description."
              hasDescription
              label="Menu Label"
              hasIcon
              propHeight="46px"
              propFlex="1"
              propAlignSelf="stretch"
              propColor="#757575"
              shortcut="⇧A"
              propHeight1="16px"
              propBorderRadius="8px"
              propPadding="unset"
              propFontSize="16px"
              propAlignSelf1="stretch"
              propDisplay="unset"
              propMinWidth="unset"
            />
          </div>
        </div>
      </div>
      <div className="w-[301px] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-1.5 px-[7px] pb-[146px] text-base text-text-default-default mq450:pt-5 mq450:pb-[95px] mq450:box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100 text-sm text-text-default-secondary">
          <div className="w-[253px] relative leading-[140%] hidden">
            Heading
          </div>
          <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
            Floor Covering
          </div>
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start">
          <MenuItem
            description="Menu description."
            hasDescription={false}
            label={`All "Space Only" stands must cover the entire stand area with a suitable floor covering`}
            hasIcon
            propHeight="unset"
            propFlex="unset"
            propAlignSelf="unset"
            propColor="#757575"
            shortcut="⇧A"
            propHeight1="unset"
            propBorderRadius="8px"
            propPadding="20px 0px"
            propFontSize="16px"
            propAlignSelf1="unset"
            propDisplay="inline-block"
            propMinWidth="28px"
          />
          <MenuItem
            description="Menu description."
            hasDescription={false}
            label="Contractors must protect the venue's floor during construction to prevent damage"
            hasIcon
            propHeight="unset"
            propFlex="unset"
            propAlignSelf="unset"
            propColor="#757575"
            shortcut="⇧A"
            propHeight1="unset"
            propBorderRadius="8px"
            propPadding="20px 0px"
            propFontSize="16px"
            propAlignSelf1="unset"
            propDisplay="inline-block"
            propMinWidth="28px"
          />
          <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-space-400 gap-space-300">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/star.svg"
            />
            <div className="h-[46px] flex-1 flex flex-col items-start justify-start gap-space-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                <div className="self-stretch w-[193px] relative leading-[140%] inline-block">
                  Menu Label
                </div>
                <MenuShortcut
                  shortcut="⇧A"
                  propHeight="16px"
                  propBorderRadius="8px"
                  propPadding="unset"
                  propFontSize="16px"
                  propAlignSelf="stretch"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
              <div className="self-stretch relative text-sm leading-[140%] text-text-default-secondary">
                Menu description.
              </div>
            </div>
          </div>
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="8px" />
        <div className="self-stretch hidden flex-col items-start justify-start">
          <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-space-400 gap-space-300">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/star.svg"
            />
            <div className="h-[46px] w-[221px] hidden flex-col items-start justify-start gap-space-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                <div className="self-stretch w-[193px] relative leading-[140%] inline-block">
                  Menu Label
                </div>
                <MenuShortcut
                  shortcut="⇧A"
                  propHeight="16px"
                  propBorderRadius="8px"
                  propPadding="unset"
                  propFontSize="16px"
                  propAlignSelf="stretch"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
              <div className="self-stretch relative text-sm leading-[140%] text-text-default-secondary">
                Menu description.
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-radius-md overflow-hidden hidden flex-row items-start justify-start py-space-300 px-space-400 gap-space-300">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/star.svg"
            />
            <div className="h-[46px] flex-1 flex flex-col items-start justify-start gap-space-100">
              <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                <div className="self-stretch w-[193px] relative leading-[140%] inline-block">
                  Menu Label
                </div>
                <MenuShortcut
                  shortcut="⇧A"
                  propHeight="16px"
                  propBorderRadius="8px"
                  propPadding="unset"
                  propFontSize="16px"
                  propAlignSelf="stretch"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
              </div>
              <div className="self-stretch relative text-sm leading-[140%] text-text-default-secondary">
                Menu description.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
