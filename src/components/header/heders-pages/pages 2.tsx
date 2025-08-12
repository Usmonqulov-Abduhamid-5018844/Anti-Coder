import React from "react";
import { NavLink } from "react-router-dom";

const Pages = () => {
  return (
    <div className="container mt-[30px] mb-[10px]">
      <div className=" rounded-[40px] bg-[#DBDBDB]/20 ">
        <ul className="flex justify-around py-[7px]">
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"zvatilny"}>Светильники</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"lustra"}>Люстры</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"lampa"}>Лампы</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"nastolny"}>Настольные лампы</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"nochnik"}>Ночники</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"podsvetka"}>Подстветка</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"ulichny"}>Уличное освещение</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> (isActive ? "text-gray-500/70" : "")} to={"mobilny"}>Мебельные установки</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Pages);