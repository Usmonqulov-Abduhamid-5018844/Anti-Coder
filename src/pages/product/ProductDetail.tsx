import React from "react";
import detailImg from "../../assets/detail.png";
import arrowup from "../../assets/arrowup.svg";
import arrowdown from "../../assets/arrowdown.svg";
import { FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { ProductContent } from "../../static";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../lib/features/likeSlice";
import { addToCart } from "../../lib/features/cartSlice";
import type { RootState } from "../../lib/store";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.like.value);

  const product = {
    id: 99,
    title: "Встраиваемый Светильник Novotech",
    desc: "Yorqin va sifatli svetilnik",
    price: 6399,
    thumbnail: detailImg,
    details: ProductContent
  };

  const isLiked = wishlist.some((item) => item.id === product.id);

  return (
    <section className="mt-[102px] pb-[127px]">
      <div className="container">
        <div className="flex max-xl:flex-col gap-[30px]">
          <div
            className="flex w-1/2 max-xl:w-[100%]"
            style={{ boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.4)" }}
          >
            <div className="flex flex-col gap-[17px] p-4 pt-[49px]">
              <div className="cursor-pointer">
                <img src={arrowup} alt="Up" className="w-5 h-5 mx-auto" />
              </div>
              <div className="flex flex-col gap-[17px]">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img key={i} width={58} src={detailImg} alt="" />
                ))}
              </div>
              <div>
                <img
                  src={arrowdown}
                  alt="Down"
                  className="w-5 h-5 mx-auto cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-center p-7 max-xl:w-[100%]">
              <img src={detailImg} alt="" />
            </div>
          </div>
          <div className="w-1/2 pl-[59px] max-xl:w-[100%] max-xl:pl-0">
            <h1 className="font-bold text-5xl text-[#454545] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
              Встраиваемый <br /> Светильник Novotech
            </h1>

            <div className="flex mt-[38px]">
              <div className="flex">
                <div className="flex flex-col">
                  <del className="font-medium text-[12px] text-[#9F9F9F]">
                    7 000₽
                  </del>
                  <span className="font-bold text-[20px] text-[#454545]">
                    6 399₽
                  </span>
                </div>
                <div
                  className="w-[220px] h-[50px] ml-[32px] bg-[#454545] text-[#ffffff] rounded-[100px] flex items-center gap-3 pl-[58px] cursor-pointer max-sm:hidden"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <FaShoppingCart />
                  <p>В корзину</p>
                </div>
              </div>

              <div className="flex items-center gap-5 ml-auto max-sm:hidden">
                <div
                  onClick={() => dispatch(toggleLike(product))}
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer border ${
                    isLiked
                      ? "border-[#454545] text-red-600"
                      : "border-[#454545] text-[#454545]"
                  }`}
                >
                  <FaHeart className="w-[20px] h-[18px]" />
                </div>

                <div className="w-[50px] h-[50px] border border-[#454545] rounded-full flex items-center justify-center cursor-pointer">
                  <HiOutlineChartBar className="w-[22px] h-[22px]" />
                </div>
              </div>

              <div className="ml-auto flex items-center sm:hidden">
                <FaBars className="w-[20px] h-[20px]" />
              </div>
            </div>

            <div className="w-full border text-[#F2F2F2] mt-10"></div>

            <div className="mt-10 grid grid-cols-2 gap-x-[50px] gap-y-[40px] max-sm:grid-cols-1">
              {ProductContent?.map((prod) => (
                <div key={prod.id} className="flex">
                  <div className="w-[271px] flex items-center justify-between border-b-2 border-b-[#F2F2F2] pb-[17px]">
                    <span className="font-medium text-[14px] text-[#999]">
                      {prod.title}
                    </span>
                    <span className="font-medium text-[16px] text-[#454545]">
                      {prod.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[78px]">
          <ul className="flex gap-[60px] text-[#999] flex-wrap">
            <li>
              <NavLink
                end
                to=""
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[black] border-b-1 border-b-[black] py-[24px]"
                      : ""
                  }`
                }
              >
                Описание
              </NavLink>
            </li>
            <li>
              <NavLink to="characteristics">Характеристики</NavLink>
            </li>
            <li>
              <NavLink to="video">Видео</NavLink>
            </li>
            <li>
              <NavLink to="gallery">Галерея</NavLink>
            </li>
          </ul>

          <div className="w-full border text-[#F2F2F2] mt-5"></div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductDetail);
