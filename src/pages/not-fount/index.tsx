import { memo } from "react"
import { NavLink } from "react-router-dom"

const Not_Found = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-[200px] md:text-[300px] font-bold text-gray-300 leading-none mb-4">404</div>
      <p className="text-gray-600 text-lg md:text-xl mb-12 text-center">Похоже, ничего не нашлось :(</p>
      <NavLink to="/">
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-base font-medium transition-colors">
        На главную
      </button>
      </NavLink>
    </div>
  )
}

export default memo(Not_Found)
