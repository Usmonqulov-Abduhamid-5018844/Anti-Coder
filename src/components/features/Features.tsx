import React from "react";
import ComponentHeader from "../componentHeader";
import Brand from "../../assets/features/Brand.png";
import Narx from "../../assets/features/narx.png";
import Dostavka from "../../assets/features/dostavka.png";
import Xil from "../../assets/features/xil.png";
import Title from "../navigator/title";
import Navigator from "../navigator/navigator";

const featuresData = [
  {
    img: Brand,
    title: "Только проверенные бренды",
    text: "Бренды, проверенные временем и качеством",
  },
  {
    img: Narx,
    title: "Самые низкие \nцены",
    text: "Ниже не будет нигде",
  },
  {
    img: Dostavka,
    title: "Быстрая доствка",
    text: "Доставляем по всей РФ за 1-10 дней",
  },
  {
    img: Xil,
    title: "Большой \nассортимент",
    text: "Более 1000 товаров",
  },
];

const Features = () => {
  return (
    <section>
      <div className="container mt-[120px] mb-20">
        <div className="max-[1200px]:hidden">
          <ComponentHeader
          title="Почему NORNLIGHT?"
          navigatorTitle="O компании"
          className="text-[40px]"
          NavigatorclassName="w-[220px]"
          to="kompany"
        />
        </div>
        <div className="min-[1200px]:hidden">
            <Title title="Почему NORNLIGHT?" className={"text-[28px]"}/>
        </div>
        <div className="w-full mt-10 grid grid-cols-4 gap-5 max-[1200px]:grid-cols-2">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="h-full border border-[#D9D9D9] pl-10 pr-10 flex flex-col gap-20"
            >
              <div className="h-[50%] w-full pt-10">
                <div className="w-[80px] h-[80px] bg-[#454545] flex items-center justify-center rounded-[10px]">
                  <img className="object-center" src={item.img} alt="" />
                </div>
              </div>
              <div className="h-[50%] mb-[47px]">
                <h2 className="text-[20px] mb-5 text-[#454545] font-bold whitespace-pre-line">
                  {item.title}
                </h2>
                <p className="text-[16px] text-[#454545]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="min-[1200px]:hidden mt-[32px]">
            <Navigator title="O компании" className="w-full " to="kompany"/>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
