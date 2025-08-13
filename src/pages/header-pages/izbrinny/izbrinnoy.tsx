import React from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../lib/store"
import { toggleLike } from "../../../lib/features/likeSlice"
import { addToCart } from "../../../lib/features/cartSlice"
import { Heart, ShoppingCart } from "lucide-react"
import detailImg from "../../../assets/product-images/ProductImage 2.png"

const Izbrinnoy = () => {
  const wishlist = useSelector((state: RootState) => state.like.value)
  const dispatch = useDispatch()

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-semibold text-gray-600">Список избранного пуст...</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Избранные товары</h1>
        <span className="bg-red-500 text-white text-sm font-medium px-2 py-1 rounded-full min-w-[24px] h-6 flex items-center justify-center">
          {wishlist.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="rounded-lg overflow-hidden">
            <div className=" relative aspect-square p-4">
              <img
                src={detailImg}
                alt={product.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => dispatch(toggleLike(product))}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                title="Удалить из избранного"
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-gray-800 font-medium mb-3 leading-tight">{product.title}</h3>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  {product.oldPrice && <span className="text-gray-400 text-sm line-through">{product.oldPrice}₽</span>}
                  <span className="text-gray-800 font-bold text-lg">{product.price}₽</span>
                </div>

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
                  title="Добавить в корзину"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Izbrinnoy)
