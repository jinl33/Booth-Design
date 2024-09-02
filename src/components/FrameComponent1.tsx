import { FunctionComponent } from "react";
import MenuSeparator from "./MenuSeparator";
import MenuItem from "./MenuItem";
import MenuShortcut from "./MenuShortcut";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-5 text-left text-sm text-text-default-secondary font-body-small mq1575:flex-wrap ${className}`}
    >
      <div className="h-[272px] flex-1 relative min-w-[295px] max-w-[301px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border w-full overflow-hidden flex flex-col items-start justify-start py-1.5 px-[7px] h-full">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100">
            <div className="w-[253px] relative leading-[140%] hidden">
              Heading
            </div>
            <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
              Stand Height Restrictions
            </div>
          </div>
          <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
          <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start text-base text-text-default-default">
            <MenuItem
              description="Maximum height of 3m"
              hasDescription
              label="Cruise Terminal Upper Level"
              hasIcon
              propHeight="unset"
              propFlex="unset"
              propAlignSelf="unset"
              propColor="#1e1e1e"
            />
            <MenuItem
              description="Maximum height of 2m"
              hasDescription
              label="Cruise Terminal Lower Level"
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
        <img
          className="absolute top-[50px] left-[22px] w-[67px] h-[5px] z-[2]"
          alt=""
          src="/vector-5.svg"
        />
      </div>
      <div className="flex-[0.9468] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-1.5 px-[7px] pb-[241px] min-w-[295px] max-w-[301px] mq450:flex-1 mq825:pt-5 mq825:pb-[157px] mq825:box-border">
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
      <div className="flex-[0.9468] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-1.5 px-[7px] pb-[146px] min-w-[295px] max-w-[301px] text-base text-text-default-default mq450:pt-5 mq450:pb-[95px] mq450:box-border mq450:flex-1">
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
      <div className="flex-[0.9468] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-1.5 px-[7px] min-w-[295px] max-w-[301px] mq450:flex-1">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100">
          <div className="w-[253px] relative leading-[140%] hidden">
            Heading
          </div>
          <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
            Wall Construction
          </div>
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start text-base text-text-default-default">
          <MenuItem
            description="Menu description."
            hasDescription={false}
            label="Must include suitable dividing walls between stands, with a minimum height related to the height regulations"
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
            hasDescription
            label="Walls exceeding the height of an adjoining stand must be decorated in a plain, neutral color with no branding."
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
      <div className="flex-[0.9468] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-1.5 px-[7px] pb-[81px] min-w-[295px] max-w-[301px] text-base text-text-default-default mq450:flex-1">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100 text-sm text-text-default-secondary">
          <div className="w-[253px] relative leading-[140%] hidden">
            Heading
          </div>
          <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
            Material Size Restrictions
          </div>
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start">
          <MenuItem
            description="Construction materials should not exceed 2.5m x 1m in size due to limited access via small passenger lifts."
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
      <div className="flex-[0.9468] shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-1.5 px-[7px] min-w-[295px] max-w-[301px] mq450:flex-1">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-space-200 px-space-400 pb-space-100">
          <div className="w-[253px] relative leading-[140%] hidden">
            Heading
          </div>
          <div className="flex-1 relative text-base leading-[140%] font-semibold text-text-default-default">
            Prohibited Actions:
          </div>
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="unset" />
        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-start">
          <MenuItem
            description="Menu description."
            hasDescription={false}
            label="No nails, hooks, screws, adhesives, or paint should be used on floors, walls, or ceilings."
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
            label="No ground penetrations are allowed."
            hasIcon
            propHeight="unset"
            propFlex="unset"
            propAlignSelf="unset"
            propColor="#757575"
          />
          <MenuItem
            description="Menu description."
            hasDescription={false}
            label="Forklifts or heavy materials are not permitted on temporary floors within the tents."
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
        </div>
        <MenuSeparator propPadding="8px 16px" propBorderRadius="8px" />
        <div className="self-stretch hidden flex-col items-start justify-start text-base text-text-default-default">
          <MenuItem
            description="Menu description."
            hasDescription={false}
            label="Menu Label"
            hasIcon
            propHeight="22px"
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
  );
};

export default FrameComponent1;
