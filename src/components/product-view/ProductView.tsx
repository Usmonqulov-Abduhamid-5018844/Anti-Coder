import React from "react";
import ProductImage from "../../assets/product-images/ProductImage.png";
import ProductVector from "../../assets/product-images/ProductVector.svg";
import ProductBasket from "../../assets/product-images/ProductBasket.svg";

const ProductView = () => {
  return (
    <section>
      <div className="container mt-[120px]">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-[#454545] text-[28px] font-bold">
            Популярные товары
          </h2>

          <div className="w-[220px] h-[50px] flex border rounded-[100px] justify-center items-center gap-[23px] text-[#454545] text-[16px] font-medium cursor-pointer">
            <div>
              <p>Все товары</p>
            </div>
            <div>
              <img src={ProductVector} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-4 gap-[24px]">
          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start px-4 py-6">
            <img
              src={ProductImage}
              alt=""
              className="w-full max-w-[160px] h-auto object-contain mx-auto mb-6"
            />
            <p className="text-[16px] text-[#454545] font-medium mb-4">
              Встраиваемый <br /> светильник Novotech
            </p>
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col">
                <p className="line-through text-[#9F9F9F] text-sm">7 000₽</p>
                <p className="text-[#454545] font-bold text-[18px]">6 399₽</p>
              </div>
              <button className="bg-[#454545] rounded-full px-5 py-2 cursor-pointer">
                <img src={ProductBasket} alt="Cart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductView);
