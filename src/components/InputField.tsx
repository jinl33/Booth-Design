import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputFieldType = {
  className?: string;
  value?: string;
  description?: string;
  hasError?: boolean;
  label?: string;
  error?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;

  /** Style props */
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  value = "Value",
  description = "Description",
  hasError = false,
  label = "Width",
  error = "Error",
  hasLabel = true,
  hasDescription = false,
  propBottom,
  propLeft,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
    };
  }, [propBottom, propLeft]);

  return (
    <div
      className={`w-[84px] !m-[0] absolute bottom-[-40.4px] left-[-61.8px] flex flex-col items-start justify-start pt-0 pb-[2.2px] px-0 box-border gap-[4.8px] z-[1] text-left text-3xs-6 text-text-default-default font-body-small ${className}`}
      style={inputFieldStyle}
    >
      {hasLabel && (
        <div className="self-stretch relative leading-[140%]">{label}</div>
      )}
      {hasDescription && (
        <div className="self-stretch relative leading-[140%] text-text-default-secondary">
          {description}
        </div>
      )}
      <div className="self-stretch h-[25px] rounded-lg bg-background-default-default border-border-default-default border-[0.6px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[7.2px] px-[9px] min-w-[144px]">
        <div className="flex-1 relative leading-[10px]">{value}</div>
      </div>
      {hasError && (
        <div className="w-[23px] relative leading-[140%]">{error}</div>
      )}
    </div>
  );
};

export default InputField;
