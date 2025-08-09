"use client"

import React from "react"
import { NavLink } from "react-router-dom"

const Kontakt = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto container mt-[-40px] md:px-6 pt-6 md:pt-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
              <ol className="flex items-center gap-1">
                <li>
                  <NavLink to={"/"}><span className="hover:text-gray-700 cursor-default">Главная</span></NavLink>
                </li>
                <li className="text-gray-400 px-1">›</li>
                <li>
                  <span className="text-gray-700">Контакты</span>
                </li>
              </ol>
            </nav>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Контакты
            </h1>
          </div>

          <div className="w-full md:w-auto text-gray-700">
            <div className="text-xl md:text-2xl font-semibold text-gray-900 text-left md:text-right">
              8 (800) 890-46-56
            </div>
            <div className="mt-2 text-sm md:text-base text-gray-600 text-left md:text-right leading-relaxed">
              <div>Пн-Пт: 10:00 до 19:00</div>
              <div>Сб-Вс: заказ через корзину</div>
              <div>Телефоны:</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-6">
        <div className="relative mt-6 md:mt-8 rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
          <iframe
            title="Карта расположения"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.767583217729!2d69.24007301542177!3d41.2994953792726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aef84a6a0af%3A0x86f8d15a2a5d2f!2sTashkent!5e0!3m2!1sen!2s!4v1691503328709!5m2!1sen!2s"
            width="100%"
            height="560"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map"
          />

          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-10 w-[94%] md:w-[90%]">
            <div className="pointer-events-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 md:px-8 py-6 md:py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-center">
                <div className="space-y-2">
                  <div className="text-gray-900 text-base md:text-lg font-semibold">Адрес магазина</div>
                  <div className="text-gray-600 text-sm md:text-base">г. Москва, Дмитровское шоссе д.100с2</div>
                </div>

                <div className="space-y-2">
                  <div className="text-gray-900 text-base md:text-lg font-semibold">Почта</div>
                  <div className="text-gray-600 text-sm md:text-base break-all">NORNLIGHT@mail.ru</div>
                </div>

                <div className="space-y-2">
                  <div className="text-gray-900 text-base md:text-lg font-semibold">Телефон</div>
                  <a
                    href="tel:+78008904656"
                    className="text-gray-700 text-sm md:text-base hover:text-gray-900"
                  >
                    8 (800) 890-46-56
                  </a>
                </div>

                <div className="flex md:justify-end">
                  <button
                    type="button"
                    onClick={() => alert("Заявка отправлена")}
                    className="rounded-full px-6 md:px-8 h-11 md:h-12 text-base bg-neutral-800 hover:bg-neutral-900 text-white shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                  >
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Kontakt)
