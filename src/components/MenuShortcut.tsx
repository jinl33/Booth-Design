import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MenuShortcutType = {
  className?: string;
  shortcut?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propPadding?: CSSProperties["padding"];
  propFontSize?: CSSProperties["fontSize"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const MenuShortcut: FunctionComponent<MenuShortcutType> = ({
  className = "",
  shortcut = "⇧A",
  propHeight,
  propBorderRadius,
  propPadding,
  propFontSize,
  propAlignSelf,
  propDisplay,
  propMinWidth,
}) => {
  const menuShortcutStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      borderRadius: propBorderRadius,
      padding: propPadding,
    };
  }, [propHeight, propBorderRadius, propPadding]);

  const aStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
      alignSelf: propAlignSelf,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFontSize, propAlignSelf, propDisplay, propMinWidth]);

  return (
    <div
      className={`h-2.5 rounded-8xs-8 flex flex-row items-center justify-end text-left text-3xs-6 text-text-default-default font-body-small ${className}`}
      style={menuShortcutStyle}
    >
      <div className="self-stretch relative leading-[100%]" style={aStyle}>
        {shortcut}
      </div>
    </div>
  );
};

export default MenuShortcut;
