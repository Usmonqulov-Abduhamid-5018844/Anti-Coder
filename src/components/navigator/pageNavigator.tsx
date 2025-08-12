import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import vector from "../../assets/vector2.png"

const PageNavigator = () => {
  return (
    <div className=" flex gap-2.5 items-center pt-[48px] pb-[15px]">
      <NavLink to={"/"}>Главная</NavLink> 
      <img width={4} src={vector} alt="" className='w-2 h-3 object-cover'/>
      <NavLink to={""}>Каталог</NavLink>
    </div>
  );
};

export default memo(PageNavigator);