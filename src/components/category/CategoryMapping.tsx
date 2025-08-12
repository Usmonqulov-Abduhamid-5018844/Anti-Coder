import { memo, useState, useEffect } from 'react';
import { Categories } from "../../static";


const CategoryMapping = () => {
  const data = Categories;

  const [firstCount, setFirstCount] = useState(9);
  const [secondCount, setSecondCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setFirstCount(10);
        setSecondCount(1);
      } else {
        setFirstCount(9);
        setSecondCount(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`w-full flex flex-col gap-5 mt-10`}>
      <div className={`w-full grid grid-cols-3 gap-5 max-[1200px]:grid-cols-2`}>
        {data.slice(0, firstCount).map((item, index) => (
          <div key={index} className="h-[250px] flex bg-[#F2F2F2] rounded-[20px] max-[1200px]:min-w-170px]">
            <div className="w-[50%] flex justify-between flex-col p-[32px]">
              <p>{item.title}</p>
              <p>От {item.price}₽</p>
            </div>
            <div className="p-5">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-2 gap-5 max-[1200px]:grid-cols-1">
        {data.slice(firstCount, firstCount + secondCount).map((item, index) => (
          <div key={index} className="h-[250px] flex bg-[#F2F2F2] rounded-[20px]">
            <div className="w-[50%] flex justify-between flex-col p-[32px]">
              <p>{item.title}</p>
              <p>От {item.price}₽</p>
            </div>
            <div className="p-5">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CategoryMapping);
