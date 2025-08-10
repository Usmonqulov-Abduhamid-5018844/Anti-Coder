import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="container-lg w-full flex gap-10 rounded-[50px] max-[700px]:rounded-[0px] bg-[#F2F2F2] relative">
        <div className="container flex mb-[96px] max-[1200px]:flex-col-reverse">
          <div className="w-[50%] h-full text-[64px] flex justify-center flex-col  mt-[42px] max-[1200px]:w-[100%] max-[630px]:text-[40px]">
            <h2 className="pl-7 text-[#454545]">
              Скидка 15% <br />
              на все подвесные светильники
            </h2>
            <div className="w-[495px] max-[630px]:text-[30px] rounded-[100px] flex justify-center items-center text-white bg-[#454545] ml-[-20px] max-[1200px]:w-[280px] max-[1200px]:text-[40px] max-[1200px]:ml-0">
              до 5 февраля
            </div>
          </div>

          <div className="w-[50%] h-full pl-[135px] max-[1200px]:w-full max-[1200px]:pl-0">
            <div className=" ">
              <img className=" max-[1200px]:mx-auto" src={hero} alt="" />
            </div>
          </div>
          <div className="w-[108px] h-2.5 grid grid-cols-9 gap-[2px] absolute right-[60px] bottom-[60px] max-[1200px]:left-[50%] max-[1200px]:-translate-1/2">
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
      </div>
    </section>
  );
};

export default React.memo(Hero);
