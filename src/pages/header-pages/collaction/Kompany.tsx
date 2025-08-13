import React from "react"
import { NavLink } from "react-router-dom"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Kompany = () => {
  return (
    <div className="container mx-auto mt-[-50px] px-4 md:px-6 md:py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center gap-1">
          <li>
            <NavLink to={"/"}>
              <span className="hover:text-gray-700 cursor-default">Главная</span>
            </NavLink>
          </li>
          <li className="text-gray-400 px-1">›</li>
          <li>
            <span className="text-gray-700">О компании</span>
          </li>
        </ol>
      </nav>

      <main className="grid gap-8 md:gap-12 md:grid-cols-[360px_1fr]">
        <aside aria-labelledby="about-title" className="space-y-6 md:space-y-8">
          <h1
            id="about-title"
            className="text-5xl md:text-6xl font-semibold leading-none text-gray-400"
          >
            О компании
          </h1>

          <div className="space-y-5 md:space-y-6">
            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <div className="text-5xl md:text-6xl font-semibold text-gray-700">
                170+
              </div>
              <div className="mt-2 text-gray-500">Товаров</div>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <div className="text-5xl md:text-6xl font-semibold text-gray-700">
                1000+
              </div>
              <div className="mt-2 text-gray-500">
                Довольных покупателей
              </div>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6 md:p-8">
              <div className="text-5xl md:text-6xl font-semibold text-gray-700">
                170+
              </div>
              <div className="mt-2 text-gray-500">Товаров</div>
            </div>
          </div>
        </aside>

        <section className="max-w-2xl text-slate-800 space-y-6">
          <p className="text-slate-700">
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
          </p>
          <p className="text-slate-700">
            Покупая светильник в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
          </p>
          <p className="text-slate-700">
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
          </p>
          <p className="text-slate-700">
            Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
          </p>
        </section>
      </main>

      <div className="mt-12 md:mt-16 flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">
          Только проверенные бренды
        </h2>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Kompany)
