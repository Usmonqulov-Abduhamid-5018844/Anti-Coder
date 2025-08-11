import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/headers-image/Group 64.svg";
import bars from "../../../assets/headers-image/Vector.png";
import { CiHeart, CiSearch } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Seorch = () => {
  return (
    <div className="container mt-[30px] flex flex-col items-center gap-4 max-[1030px]:mt-[0px]">
      <div className="flex gap-6 items-center px-[20px]w-[100%]">
        <ul>
          <li className="hidden max-[1030px]:block text-[35px]">
            <HiOutlineBars3BottomRight />
          </li>
        </ul>
        <div>
          <NavLink to={"/"}>
            <img src={Logo} alt="img" />
          </NavLink>
        </div>
        <NavLink to={""}>
          <div className="max-[600px]:hidden">
            <button className="bg-black/70 text-white flex px-[20px] pr-[35px] py-[7px] gap-5 rounded-[30px] text-[20px] items-center">
              <img className="w-[25px] h-[21px]" src={bars} alt="" />
              <span className="pr-2">Каталог</span>
            </button>
          </div>
        </NavLink>

             <div className="input border flex outline-none w-[626px] h-[50px] rounded-[40px] overflow-hidden gap-2 max-[950px]:hidden">
                <input
                  className="w-[87%] focus:outline-none  indent-6 text-[20px]"
                  type="text"
                />
                <button className="pr-2">
                  <CiSearch className="  text-[35px] my-auto" />
                </button>
              </div>

        <div className="flex text-[30px] gap-6">
          <NavLink to={"izbriny"}>
            <div className="flex flex-col items-center">
              <CiHeart />
              <span className="text-[14px]">Избранное</span>
            </div>
          </NavLink>

          <div className="max-[1030px]:hidden">
            <NavLink to={"sravneny"}>
            <div className="flex flex-col items-center">
              <TbAntennaBars5 />
              <span className="text-[14px]">Сравнение</span>
            </div>
          </NavLink>
          </div>

          <NavLink to={"korzinki"}>
            <div className="flex flex-col items-center">
              <LiaShoppingCartSolid />
              <span className="text-[14px]">Корзина</span>
            </div>
          </NavLink>
        </div>
      </div>
            <div className="input max-[950px]:flex border hidden outline-none w-[626px] px-3 h-[50px] rounded-[40px] overflow-hidden  gap-2 ">
                <input
                  className="w-[87%] focus:outline-none  indent-6 text-[20px]"
                  type="text"
                />
                <button className="pr-2">
                  <CiSearch className="  text-[35px] my-auto" />
                </button>
              </div>
    </div>
  );
};

export default React.memo(Seorch);
