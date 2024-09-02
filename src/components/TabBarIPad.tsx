import { FunctionComponent } from "react";
import Platter from "./Platter";

export type TabBarIPadType = {
  className?: string;
  showTab7?: boolean;
  showTab6?: boolean;
  showTab3?: boolean;
  tab7?: string;
  tab1?: string;
  showTab5?: boolean;
  showSymbolTab?: boolean;
  tab5?: string;
  symbol?: string;
  tab4?: string;
  showTab4?: boolean;
  tab3?: string;
  showTab1?: boolean;
  tab2?: string;
  tab6?: string;
  showTab2?: boolean;
  showSidebar?: boolean;
};

const TabBarIPad: FunctionComponent<TabBarIPadType> = ({
  className = "",
  showTab7 = false,
  showTab6 = false,
  showTab3 = false,
  tab7 = "OPEN BOOTH",
  tab1 = "PARTITION",
  showTab5 = false,
  showSymbolTab = false,
  tab5 = "Label",
  symbol = "􀊫",
  tab4 = "Label",
  showTab4 = false,
  tab3 = "Label",
  showTab1 = true,
  tab2 = "OPEN",
  tab6 = "Label",
  showTab2 = true,
  showSidebar = false,
}) => {
  return (
    <div
      className={`self-stretch w-[266px] flex flex-row items-start justify-start p-1 box-border relative text-center text-mini text-miscellaneous-floating-tab-text-unselected font-kalam ${className}`}
    >
      <Platter />
      {showSidebar && (
        <div className="h-[32.5px] w-14 relative z-[1] font-roboto">
          <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center">
            􀰱
          </div>
        </div>
      )}
      <div className="self-stretch flex-1 flex flex-row items-start justify-start z-[1]">
        {showTab1 && (
          <div className="h-[32.5px] flex-1 shadow-[0px_2px_16px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-background-default-default flex flex-row items-start justify-start pt-0 px-[23px] pb-[12.5px] box-border text-smi text-miscellaneous-floating-tab-text-selected">
            <a className="[text-decoration:none] self-stretch w-[80.4px] pt-[13px] relative tracking-[-0.23px] leading-[20px] font-bold text-[inherit] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
              {tab1}
            </a>
          </div>
        )}
        {showTab2 && (
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-[23px] pb-[12.5px] font-aclonica">
            <a className="[text-decoration:none] self-stretch w-[80.4px] relative tracking-[-0.23px] leading-[20px] text-[inherit] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0 top-2">
              {tab2} 
            </a>
          </div>
        )}
        {showTab3 && (
          <div className="h-[32.5px] w-[77px] relative font-roboto">
            <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              {tab3}
            </div>
          </div>
        )}
        {showTab4 && (
          <div className="h-[32.5px] w-[77px] relative">
            <b className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[20px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-5">
              {tab4}
            </b>
          </div>
        )}
        {showTab5 && (
          <div className="h-[32.5px] w-[77px] relative font-roboto">
            <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              {tab5}
            </div>
          </div>
        )}
        {showTab6 && (
          <div className="h-[32.5px] w-[77px] relative font-roboto">
            <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              {tab6}
            </div>
          </div>
        )}
        {showTab7 && (
          <div className="h-[32.5px] w-[77px] relative">
            <b className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[20px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-5">
              {tab7}
            </b>
          </div>
        )}
      </div>
      {showSymbolTab && (
        <div className="h-[32.5px] w-14 relative z-[3]">
          <b className="absolute w-full top-[0%] left-[0%] tracking-[-0.23px] leading-[20px] hidden items-center justify-center">
            {symbol}
          </b>
        </div>
      )}
    </div>
  );
};

export default TabBarIPad;
