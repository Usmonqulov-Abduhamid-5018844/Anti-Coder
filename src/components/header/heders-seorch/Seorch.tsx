import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/headers-image/Group 64.svg";
import bars from "../../../assets/headers-image/Vector.png";
import Input from "./Input";
import { CiHeart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Seorch = () => {
  return (
    <div className="container mt-[30px]">
      <div className="flex gap-6 items-center">
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt="img" />
          </NavLink>
        </div>
        <NavLink to={""}>
          <div>
            <button className="bg-black/70 text-white flex px-[20px] pr-[35px] py-[7px] gap-5 rounded-[30px] text-[20px] items-center">
              <img className="w-[25px] h-[21px]" src={bars} alt="" />
              <span className="pr-2">Каталог</span>
            </button>
          </div>
        </NavLink>

        <Input />

        <div className="flex text-[30px] gap-6">
          <NavLink to={"izbriny"}>
            <div className="flex flex-col items-center">
              <CiHeart />
              <span className="text-[14px]">Избранное</span>
            </div>
          </NavLink>

          <NavLink to={"sravneny"}>
            <div className="flex flex-col items-center">
              <TbAntennaBars5 />
              <span className="text-[14px]">Сравнение</span>
            </div>
          </NavLink>

          <NavLink to={"korzinki"}>
            <div className="flex flex-col items-center">
              <LiaShoppingCartSolid />
              <span className="text-[14px]">Корзина</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Seorch);
