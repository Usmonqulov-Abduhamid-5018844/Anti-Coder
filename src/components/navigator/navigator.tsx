import { memo, type FC } from 'react';
import vector from "../../assets/vector.svg"
import { NavLink } from 'react-router-dom';

interface Props{
    title:string
    className:any
    to:string
}

const Navigator: FC<Props> = ({title, className, to}) => {
  return (
    <div className={`p-5 h-[50px] border flex justify-center gap-2.5 text-[16px] rounded-[100px] items-center ${className}`}>
      <NavLink to={to}>{title}</NavLink>
      <img width={14}  src={vector} alt="" />
    </div>
  );
};

export default memo(Navigator);