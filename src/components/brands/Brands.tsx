import React from "react";
import brandArteLogo from "../../assets/brandArteLogo.svg";
import brandDivinareLogo from "../../assets/brandDivinareLogo.svg";
import brandOdeonLightLogo from "../../assets/brandOdeonLightLogo.svg";

const Brands = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-xl font-bold text-[#454545] mb-6">
          Только проверенные бренды
        </h2>

        <div className="flex gap-5 overflow-x-auto no-scrollbar">
          <div className="w-[310px] h-[112px] border border-[#D9D9D9] flex items-center justify-center">
            <img src={brandArteLogo} alt="" className="h-[70px]" />
          </div>
          <div className="w-[310px] h-[112px] border border-[#D9D9D9] flex items-center justify-center">
            <img src={brandDivinareLogo} alt="" className="h-[70px]" />
          </div>
          <div className="w-[310px] h-[112px] border border-[#D9D9D9] flex items-center justify-center">
            <img src={brandOdeonLightLogo} alt="" className="h-[70px]" />
          </div>
          <div className="w-[310px] h-[112px] border border-[#D9D9D9] flex items-center justify-center">
            <img src={brandArteLogo} alt="" className="h-[70px]" />
          </div>
          <div className="w-[310px] h-[112px] border border-[#D9D9D9] flex items-center justify-center">
            <img src={brandDivinareLogo} alt="" className="h-[70px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands);
