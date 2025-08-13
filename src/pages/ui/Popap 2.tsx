import  { memo, type Dispatch, type FC, type SetStateAction } from "react";

interface Props {
    onClick: (Dispatch<SetStateAction<boolean>>)
}

const Popap:FC<Props> = ({onClick}) => {
  return (
    <>
      <div onClick={()=> onClick((prv)=> !prv)} className="fixed bg-black/40 top-0 left-0 w-full h-screen z-40"></div>
      <div className="fixed top-1/2 left-1/2 -translate-1/2 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
          <button onClick={()=> onClick((prv)=> !prv)} className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-6">
            Заполните, <br /> и мы перезвоним
          </h2>
          <input
            type="text"
            placeholder="ФИО"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button onClick={()=> onClick((prv)=> !prv)} className="w-full py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            Весь каталог →
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Popap);
