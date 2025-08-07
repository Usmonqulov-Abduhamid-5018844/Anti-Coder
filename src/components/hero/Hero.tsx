import React from "react";
import hero  from "../../assets/hero.png"

const Hero = () => {
  return (
    <section>
      <div className="container-lg w-full flex gap-10 rounded-[50px] bg-[#F2F2F2] relative max-2xl:flex-col-reverse">
        <div className="w-[50%] h-full text-[64px] flex justify-center ml-[207px] flex-col max-2xl:text-2xl max-lg:w-full max-lg:h-[50%]">
          <h2 className="pl-7 text-[#454545]">Скидка 15% <br/>на все подвесные светильники</h2>
          <div className="w-[65%] rounded-[100px] flex justify-center items-center text-white bg-[#454545]">
            до 5 февраля
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <div className="w-full h-full">
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="w-[108px] h-2.5 grid grid-cols-9 gap-[2px] absolute right-[60px] bottom-[60px]">
            <div className="bg-black rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
            <div className="bg-gray-500 rounded-[50%] "></div>
          </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);