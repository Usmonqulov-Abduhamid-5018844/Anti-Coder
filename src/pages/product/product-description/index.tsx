import { memo } from "react";

const ProductDescription = () => {
  return (
    <div className="flex gap-[110px] pt-[60px] max-sm:flex-wrap max-sm:gap-5">
      <p className="w-[47%] font-medium text-[20px] text-[#454545] max-md:text-[17px] max-sm:w-[95%]">
        Архитектурный светильник декоративного назначения Clivo для контурной
        подсветки проемов окон, витражей, входных групп зданий. Формирует четкий
        узкий луч в виде рамки без паразитной засветки.
      </p>
      <p className="w-[53%] font-medium text-[16px] text-[#999] max-md:text-[14px] max-sm:w-full">
        Производитель оставляет за собой право вносить изменения, не ухудшающие
        качество изделия, в конструкцию отдельных деталей, узлов и параметров
        светильника без предварительного уведомления.
      </p>
    </div>
  );
};

export default memo(ProductDescription);
