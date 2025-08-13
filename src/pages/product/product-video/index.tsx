import { memo } from "react";
import productVideo from "../../../assets/productVideo/Rectangle 38.png";
import player from "../../../assets/productVideo/video-player.svg";

const ProductVideo = () => {
  return (
    <div className="relative mt-[60px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-[26px] rounded-[50%] bg-[white] max-md:p-[23px] max-sm:p-[20px] max-[350px]:p-[5px]">
        <img className="ml-1 max-md:w-[15px]" src={player} alt="" />
      </div>

      <div>
        <img src={productVideo} alt="" />
      </div>
    </div>
  );
};

export default memo(ProductVideo);
