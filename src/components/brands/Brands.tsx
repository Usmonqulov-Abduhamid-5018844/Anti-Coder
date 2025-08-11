import React from "react";
import brandArteLogo from "../../assets/brand-images/brandArteLogo.svg";
import brandDivinareLogo from "../../assets/brand-images/brandDivinareLogo.svg";
import brandOdeonLightLogo from "../../assets/brand-images/brandOdeonLightLogo.svg";
import brandArrowLeft from "../../assets/brand-images/brandArrowLeft.svg";
import brandArrowRight from "../../assets/brand-images/brandArrowRight.svg"

const Brands = () => {
  return (
    <section>
      <div className="container mt-[60px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-[#454545] text-[28px] font-bold text-center">
            Только проверенные бренды
          </h2>
          <div className="flex items-center gap-2.5">
            <img
              src={brandArrowLeft}
              alt=""
              className="w-8 h-8"
            />
            <img
              src={brandArrowRight}
              alt=""
              className="w-8 h-8"
            />
          </div>
        </div>

        <div className=" scrolbar mt-[32px] flex items-center gap-4 overflow-auto custom-scroll">
          <img src={brandArteLogo} alt="" />
          <img src={brandDivinareLogo} alt="" />
          <img src={brandOdeonLightLogo} alt="" />
          <img src={brandArteLogo} alt="" />
          <img src={brandDivinareLogo} alt="" />
          <img src={brandOdeonLightLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands);
