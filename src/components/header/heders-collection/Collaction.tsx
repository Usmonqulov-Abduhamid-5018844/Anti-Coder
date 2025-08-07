import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Popap from "../../../pages/ui/Popap";

const Collaction = () => {
  const [isPopap, setPopap] = useState(false)
  return (
    <div className="collaction flex justify-between px-[16px] pt-[20px]">
      <ul className="flex gap-10 text-black/50">
        <li>
          <NavLink className={({isActive})=> (isActive ? "underline text-gray-800" : "")} to={"kompany"}>О компании</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> (isActive ? "underline text-gray-800" : "")} to={"dastafka"}>Доставка и оплата</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> (isActive ? "underline text-gray-800" : "")} to={"vazvrad"}>Возврат</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> (isActive ? "underline text-gray-800" : "")} to={"garanty"}>Гарантии</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> (isActive ? "underline text-gray-800" : "")} to={"kontakt"}>Контакты</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> (isActive ? "underline text-gray-800" : "")} to={"blog"}>Блог</NavLink>
        </li>
      </ul>
      <ul className="flex gap-10 text-black/50">
        <li className="text-black">
            <a href="tel:8(800)890-46-56" >8 (800) 890-46-56</a>
        </li>
        <li onClick={()=> setPopap((prv)=> !prv)}>
          Заказать звонок
        </li>
      </ul>
      {
        isPopap && (
          <Popap onClick={setPopap}/>
        )
      }
    </div>
  );
};

export default React.memo(Collaction);
