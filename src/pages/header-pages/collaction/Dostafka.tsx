import React from "react";
import { NavLink } from "react-router-dom";
import Payment from "../../../assets/headers-image/paymend.svg";

const Dostafka = () => {
  return (
    <div className="container mx-auto mt-[-50px] px-4 md:px-6 py-10 md:py-14">

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <ol className="flex items-center gap-1">
          <li>
            <NavLink to="/" className="hover:text-gray-700">
              Главная
            </NavLink>
          </li>
          <li className="text-gray-400 px-1">›</li>
          <li>
            <span className="text-gray-700">Доставка и оплата</span>
          </li>
        </ol>
      </nav>

      <section className="grid gap-8 md:gap-12 md:grid-cols-[360px_1fr]">
        <header aria-labelledby="page-title" className="md:pt-2">
          <h1
            id="page-title"
            className="text-5xl md:text-6xl font-semibold leading-none text-gray-400"
          >
            Доставка
            <br className="hidden md:block" />
            и оплата
          </h1>
        </header>

        <div className="max-w-2xl text-slate-800 space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Доставка
            </h2>
            <p className="text-slate-700">
              Мы доставляем заказы по Москве и Московской области собственной
              курьерской службой. По России и странам СНГ доставка
              осуществляется транспортными компаниями.
              <a
                href="#"
                className="text-blue-700 underline underline-offset-2 ml-1"
              >
                Сроки доставки: 4–6 недель
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Курьерская доставка
            </h3>
            <p className="text-slate-700">
              Бесплатно в пределах МКАД при заказе от 5 000 ₽. При заказе от
              30 000 ₽ — бесплатная доставка до 15 км за пределы МКАД.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">Самовывоз</h3>
            <p className="text-slate-700">
              Вы можете забрать заказ самостоятельно: г. Москва, Дмитровское
              шоссе, д. 1002.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 md:mt-12 rounded-2xl overflow-hidden border border-gray-300 shadow-sm">
        <iframe
          title="Карта расположения"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.767583217729!2d69.24007301542177!3d41.2994953792726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aef84a6a0af%3A0x86f8d15a2a5d2f!2sTashkent!5e0!3m2!1sen!2s!4v1691503328709!5m2!1sen!2s"
          width="100%"
          height="430"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <section className="grid gap-8 md:gap-12 md:grid-cols-[360px_1fr] mt-10 md:mt-14">
        <div aria-hidden="true" className="hidden md:block" />

        <div className="max-w-2xl text-slate-800 space-y-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Доставка по СНГ
            </h3>
            <ul className="list-disc marker:text-slate-900 pl-5 space-y-2 text-slate-700">
              <li>
                Осуществляется транспортной компанией «Байкал Сервис».
              </li>
              <li>
                Стоимость рассчитывается с учётом габаритов, типа доставки и
                региона получателя.
              </li>
              <li>
                После оформления заказа менеджер свяжется с вами для уточнения
                сроков.
              </li>
            </ul>
          </div>

          <div className="space-y-3 ">
            <h3 className="text-lg font-semibold text-slate-900">
              Как оформить заказ
            </h3>
            <ul className="list-disc marker:text-slate-900 pl-5 space-y-2 text-slate-700">
              <li>Выберите товар и добавьте его в корзину.</li>
              <li>Заполните форму оформления заказа.</li>
              <li>
                Дождитесь звонка менеджера для подтверждения и уточнения
                деталей.
              </li>
            </ul>
          </div>

          <div className="space-y-3 ">
            <h3 className="text-lg font-semibold text-slate-900">
              Изменение даты доставки
            </h3>
            <ul className="list-disc marker:text-slate-900 pl-5 space-y-2 text-slate-700">
              <li>Возможна при согласовании с менеджером.</li>
              <li>
                Стоимость может измениться при переносе даты за пределы
                бесплатного периода.
              </li>
              <li>
                Свяжитесь с нами заранее, чтобы выбрать удобное время.
              </li>
            </ul>
          </div>

          <div className="space-y-3 ">
            <h3 className="text-lg font-semibold text-slate-900">
              Способы оплаты
            </h3>
            <ul className="list-disc marker:text-slate-900 pl-5 space-y-2 text-slate-700">
              <li>Безналичный расчёт для физических и юридических лиц.</li>
              <li>Оплата картой курьеру.</li>
              <li>Оплата картой в пункте выдачи.</li>
            </ul>
            <div className="pt-3">
              <img
                src={Payment}
                alt="Способы оплаты"
                className="h-8 md:h-9 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Dostafka);
