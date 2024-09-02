import { FunctionComponent, useMemo, type CSSProperties } from "react";
import MenuShortcut from "./MenuShortcut";

export type MenuItemType = {
  className?: string;
  description?: string;
  hasDescription?: boolean;
  label?: string;
  hasIcon?: boolean;
  shortcut?: string;
  propHeight1?: string;
  propBorderRadius?: string;
  propPadding?: string;
  propFontSize?: string;
  propAlignSelf1?: string;
  propDisplay?: string;
  propMinWidth?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
};

const MenuItem: FunctionComponent<MenuItemType> = ({
  className = "",
  description = "Menu description.",
  hasDescription = true,
  label = "Menu Label",
  hasIcon = true,
  propHeight,
  propFlex,
  propAlignSelf,
  propColor,
  shortcut,
  propHeight1,
  propBorderRadius,
  propPadding,
  propFontSize,
  propAlignSelf1,
  propDisplay,
  propMinWidth,
}) => {
  const bodyStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const rowStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const descriptionStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`self-stretch rounded-radius-md overflow-hidden flex flex-row items-start justify-start py-space-300 px-space-400 gap-space-300 text-left text-base text-text-default-default font-body-small ${className}`}
    >
      {hasIcon && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/star.svg"
        />
      )}
      <div
        className="h-[46px] flex-1 flex flex-col items-start justify-start gap-space-100"
        style={bodyStyle}
      >
        <div
          className="self-stretch flex-1 flex flex-row items-center justify-between gap-0 [row-gap:20px]"
          style={rowStyle}
        >
          <div
            className="self-stretch w-[193px] relative leading-[140%] inline-block"
            style={labelStyle}
          >
            {label}
          </div>
          <MenuShortcut
            shortcut={shortcut}
            propHeight={propHeight1}
            propBorderRadius={propBorderRadius}
            propPadding={propPadding}
            propFontSize={propFontSize}
            propAlignSelf={propAlignSelf1}
            propDisplay={propDisplay}
            propMinWidth={propMinWidth}
          />
        </div>
        {hasDescription && (
          <div
            className="self-stretch relative text-sm leading-[140%] text-text-default-secondary"
            style={descriptionStyle}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
