import { memo, type FC } from 'react';

interface Props {
    title:string
    className:any
}

const Title:FC<Props> = ({title, className}) => {
  return (
    <div className="font-bold text-[#454545]">
      <h2 className={`${className}`}>{title}</h2>
    </div>
  );
};

export default memo(Title);