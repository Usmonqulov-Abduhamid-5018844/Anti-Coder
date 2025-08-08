import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Popap from "../../../pages/ui/Popap";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Collaction = () => {
  const [isPopap, setPopap] = useState(false);
  return (
    <div className="collaction flex justify-between px-[16px] pt-[20px]">
      <ul className="flex gap-10 text-black/50">
        <li className="hidden max-[1030px]:block text-[30px]">
          <HiOutlineBars3BottomRight />
        </li>
        <li className="max-[1030px]:hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-gray-800" : ""
            }
            to={"kompany"}
          >
            О компании
          </NavLink>
        </li>
        <li className="max-[1030px]:hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-gray-800" : ""
            }
            to={"dastafka"}
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li className="max-[1030px]:hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-gray-800" : ""
            }
            to={"vazvrad"}
          >
            Возврат
          </NavLink>
        </li>
        <li className="max-[1030px]:hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-gray-800" : ""
            }
            to={"garanty"}
          >
            Гарантии
          </NavLink>
        </li>
        <li className="max-[1030px]:hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-gray-800" : ""
            }
            to={"kontakt"}
          >
            Контакты
          </NavLink>
        </li>
        <li className="max-[1030px]:hidden">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-gray-800" : ""
            }
            to={"blog"}
          >
            Блог
          </NavLink>
        </li>
      </ul >
      <ul className="flex gap-10 text-black/50">
        <li className="text-black">
          <a href="tel:8(800)890-46-56">8 (800) 890-46-56</a>
        </li>
        <li onClick={() => setPopap((prv) => !prv)}>Заказать звонок</li>
      </ul>
      {isPopap && <Popap onClick={setPopap} />}
    </div>
  );
};

export default React.memo(Collaction);
