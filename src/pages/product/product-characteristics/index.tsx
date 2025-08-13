import { memo } from "react";
import { ProductContent } from "../../../static";

const ProductCharacteristics = () => {
  return (
    <div className="w-[355px] flex flex-col gap-[60px] mt-[60px] max-sm:w-full">
      {ProductContent?.map((product) => (
        <div key={product.id} className="flex justify-between">
          <span className="font-medium text-[16px] text-[#BEBEBE]">
            {product.title}
          </span>
          <span className="font-medium text-[16px] text-[#454545]">
            {product.desc}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductCharacteristics);
