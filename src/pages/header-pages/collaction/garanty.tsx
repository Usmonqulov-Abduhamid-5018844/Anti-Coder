import React from "react";
import { NavLink } from "react-router-dom";

const Garanty = () => {
  return (
    <div className="container mx-auto mt-[-50px] px-4 md:px-6 py-10 md:py-14">
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <NavLink to="/" className="hover:underline">
              Bosh sahifa
            </NavLink>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium">Гарантии</li>
        </ol>
      </nav>

      <main className="grid gap-10 md:gap-12 md:grid-cols-[360px_1fr]">
        <header aria-labelledby="page-title" className="md:pt-2">
          <h1
            id="page-title"
            className="text-5xl md:text-6xl font-semibold leading-none text-gray-400"
          >
            Гарантии
          </h1>
        </header>

        <section
          aria-labelledby="wish-return"
          className="max-w-2xl  text-slate-800 space-y-4"
        >
          <h2 id="wish-return" className="text-xl font-semibold text-slate-900">
            Обмен и возврат по желанию покупателя
          </h2>

          <p>Все товары в магазине «NornLight» имеют гарантию.</p>
          <p>
            Она заявляется производителем и имеет определенный срок действия на
            различные группы товаров.
          </p>
          <p>
            Если ваше изделие вышло из строя в течение гарантийного срока вы
            можете обратиться к нам и получить бесплатный ремонт.
          </p>

          <p className="font-medium">Для этого нужно:</p>
          <ul className="list-disc marker:text-slate-900 pl-5 space-y-2">
            <li>
              Предоставить чек, накладную или сообщить почту или номер телефона,
              указанные при оформлении заказа.
            </li>
            <li>
              Привезти товар к нам на склад или отправить его транспортной
              компанией.
            </li>
            <li>
              После товар отправляется на экспертизу и ремонт. Если ремонт
              невозможен, мы обменяем изделие на аналогичное либо вернем деньги
              за покупку.
            </li>
          </ul>

          <p>
            Обращаем внимание, что «А-Свет» не является сервисным центром, а
            выполняет роль посредника между клиентом и поставщиком.
          </p>
          <p>
            Поэтому сроки проведения ремонта могут отличаться для товаров
            различных брендов.
          </p>
        </section>
      </main>

      <div
        aria-hidden="true"
        className="fixed inset-x-0 bottom-0 h-1.5 bg-purple-600"
      />
    </div>
  );
};

export default React.memo(Garanty);
