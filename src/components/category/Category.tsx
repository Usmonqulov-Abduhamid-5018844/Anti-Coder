import React from "react";
import ComponentHeader from "../componentHeader";
import CategoryMapping from "./CategoryMapping";
import Title from "../navigator/title";
import category1 from "../../assets/categoryImage/category1.png"
import Navigator from "../navigator/navigator";

const Category = () => {
  return (
    <section>
      <div className="container mt-20  max-[700px]:hidden">
        <ComponentHeader title="Каталог" navigatorTitle="Весь каталог" className={"text-[40px]"} NavigatorclassName={"w-[220px]"} to="category"/>
        <CategoryMapping/>
      </div>
      <div className="container mt-20 min-[700px]:hidden">
        <Title title="Каталог" className={"text-[26px]"} />
        <div className=" mt-[32px] mb-[32px]">
          <div className="w-full flex overflow-x-auto gap-2.5">
            <div className=" min-w-[170px] rounded-[20px] bg-[#F2F2F2]">
              <p className="pt-5 pl-5">Люстры</p>
              <img width={81} src={category1} alt="" className="mx-auto mt-5"/>
              <p className="pb-5 pl-5">adsfdsgd</p>
            </div>
            <div className=" min-w-[170px] rounded-[20px] bg-[#F2F2F2]">
              <p className="pt-5 pl-5">Люстры</p>
              <img width={81} src={category1} alt="" className="mx-auto mt-5"/>
              <p className="pb-5 pl-5">adsfdsgd</p>
            </div>
            <div className=" min-w-[170px] rounded-[20px] bg-[#F2F2F2]">
              <p className="pt-5 pl-5">Люстры</p>
              <img width={81} src={category1} alt="" className="mx-auto mt-5"/>
              <p className="pb-5 pl-5">adsfdsgd</p>
            </div>
            <div className=" min-w-[170px] rounded-[20px] bg-[#F2F2F2]">
              <p className="pt-5 pl-5">Люстры</p>
              <img width={81} src={category1} alt="" className="mx-auto mt-5"/>
              <p className="pb-5 pl-5">adsfdsgd</p>
            </div>
          </div>
        </div>
        <Navigator title="Весь каталог" className={"w-full"} to="category"/>
      </div>
    </section>
  );
};

export default React.memo(Category);
