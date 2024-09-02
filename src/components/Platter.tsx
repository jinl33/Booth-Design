import { FunctionComponent } from "react";

export type PlatterType = {
  className?: string;
};

const Platter: FunctionComponent<PlatterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl overflow-hidden flex flex-row items-start justify-start ${className}`}
    >
      <div className="h-[40.5px] flex-1 relative [backdrop-filter:blur(50px)] bg-lightgray"/>
    </div>
  );
};

export default Platter;
