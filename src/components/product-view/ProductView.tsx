import React from "react";
import ProductImage from "../../assets/ProductImage.png";
import ProductVector from "../../assets/ProductVector.svg";
import ProductBasket from "../../assets/ProductBasket.svg";

const ProductView = () => {
  return (
    <section className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#454545]">Популярные товары</h2>
        <button className="flex items-center gap-2 text-gray-600 hover:text-black">
          Все товары
          <img src={ProductVector} alt="" />
        </button>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>

        <div className="p-4 flex flex-col items-center relative">
          <img src={ProductImage} alt="" className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-center text-sm font-medium mb-1">Встраиваемый <br /> светильник Novotech</h3>
          <div className="flex flex-col items-center mb-2">
            <span className="line-through text-gray-400 text-xs">7 000₽</span>
            <span className="text-lg font-semibold">6 399₽</span>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img src={ProductBasket} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductView);
