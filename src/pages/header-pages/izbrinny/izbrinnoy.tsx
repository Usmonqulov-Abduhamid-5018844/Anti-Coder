import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../lib/store";
import { toggleLike } from "../../../lib/features/likeSlice";
import { FaHeart } from "react-icons/fa";

const Izbrinnoy = () => {
  const wishlist = useSelector((state: RootState) => state.like.value);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-xl font-semibold">Список избранного пуст...</h2>
      </div>
    );
  }

  return (
    <div className="container py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {wishlist.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition relative"
        >
          <button
            onClick={() => dispatch(toggleLike(product))}
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer border  absolute top-3 right-3 text-xl"
            title="Удалить из избранного"
          >
            <FaHeart className="w-[20px] h-[18px] border-[#454545] text-red-500 hover:text-red-200" />
          </button>

          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[100%] h-[450px] object-cover rounded-md mb-4"
          />

          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-500 mb-2">{product.desc}</p>
          <p className="text-[#454545] font-bold mb-4">{product.price} ₽</p>

          <ul className="border-t pt-3 space-y-2">
            {product.details.map((d) => (
              <li
                key={d.id}
                className="flex justify-between text-sm text-gray-600"
              >
                <span>{d.title}</span>
                <span className="font-medium">{d.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Izbrinnoy);
