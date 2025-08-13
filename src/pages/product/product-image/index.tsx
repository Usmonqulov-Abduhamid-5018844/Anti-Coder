import { memo } from "react";
import productImg from "../../../assets/productImg/productImg.png";

const ProductImage = () => {
  return (
    <>
      <div className="mt-[60px] grid grid-cols-3 gap-[20px]">
        {[1, 2, 3].map((_, inx) => (
          <div key={inx}>
            <img src={productImg} alt="" />
          </div>
        ))}
      </div>
      <div className="w-[108px] mt-[30px] h-[12px] mx-auto flex gap-1.5">
        <div className="w-[10px] h-[10px] rounded-[50%] bg-[#A2A2A2] cursor-pointer"></div>
        <div className="w-[10px] h-[10px] rounded-[50%] bg-[#EDEDED] cursor-pointer"></div>
        <div className="w-[10px] h-[10px] rounded-[50%] bg-[#EDEDED] cursor-pointer"></div>
      </div>
    </>
  );
};

export default memo(ProductImage);
