import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../lib/store";
import {
  increaseAmount,
  decreaseAmount,
  removeFromCart,
} from "../../../lib/features/cartSlice";

const Korzinki = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);

  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * (product.amount || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-xl font-semibold">Корзинка пустая...</h2>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h2 className="text-2xl font-bold mb-6">Корзинка</h2>

      <div className="grid gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex gap-6 border p-4 rounded-lg shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[150px] h-[150px] object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.desc}</p>
              <p className="font-bold text-[#454545] mt-2">
                {product.price * (product.amount || 1)} ₽
              </p>

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => dispatch(decreaseAmount(product.id))}
                  className="px-3 py-1 border rounded"
                >
                  -
                </button>
                <span>{product.amount}</span>
                <button
                  onClick={() => dispatch(increaseAmount(product.id))}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="ml-auto px-3 py-1 border rounded text-red-500"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right text-xl font-bold">
        Итого: {totalPrice} ₽
      </div>
    </div>
  );
};

export default React.memo(Korzinki);
