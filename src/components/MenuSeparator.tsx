import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MenuSeparatorType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const MenuSeparator: FunctionComponent<MenuSeparatorType> = ({
  className = "",
  propPadding,
  propBorderRadius,
}) => {
  const menuSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      borderRadius: propBorderRadius,
    };
  }, [propPadding, propBorderRadius]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[4.8px] px-[9px] ${className}`}
      style={menuSeparatorStyle}
    >
      <div className="h-[0.6px] flex-1 relative bg-border-default-default" />
    </div>
  );
};

export default MenuSeparator;
