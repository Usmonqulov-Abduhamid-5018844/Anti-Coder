import React from "react"

const Vazvrad = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
      <main className="grid gap-10 md:gap-12 md:grid-cols-[360px_1fr]">
        <header aria-labelledby="page-title" className="md:pt-2">
          <h1
            id="page-title"
            className="text-5xl md:text-6xl font-semibold leading-none text-gray-400"
          >
            Возврат
          </h1>
        </header>

        <div className="max-w-2xl text-slate-800">
          <section aria-labelledby="by-request" className="space-y-4">
            <h2 id="by-request" className="text-xl font-semibold text-slate-900">
              Обмен и возврат по желанию покупателя
            </h2>
            <p className="text-slate-700">
              Если товар по каким-то причинам не подошел вам, вы имеете право
              вернуть его или обменять на другой в течение 7 дней* с момента
              покупки при соблюдении следующих условий:
            </p>
            <ul className="list-disc marker:text-blue-600 pl-5 space-y-2 text-slate-700">
              <li>Товар имеет первоначальный вид, имеется товарная кондиция;</li>
              <li>
                Товар имеет полную комплектацию, включая упаковочные материалы;
              </li>
              <li>
                Товар не имеет следов подключения и не имеет признаков монтажа;
              </li>
              <li>
                Упаковка товара не имеет повреждений, присутствует первоначальный вид;
              </li>
              <li>
                Есть документы, подтверждающий покупку в нашем интернет-магазине.
              </li>
              <li>Для возврата товара необходимо привезти его к нам в офис.</li>
              <li>
                Товар из других городов можно прислать нам транспортной
                компанией, при этом услуги транспортной компании оплачиваются
                клиентом.
              </li>
              <li>
                *В течение 14 дней для отдельных брендов. При оформлении заказа
                уточните у менеджера
              </li>
            </ul>
          </section>

          <div className="h-8 md:h-10" />

          <section aria-labelledby="by-seller" className="space-y-4">
            <h2 id="by-seller" className="text-xl font-semibold text-slate-900">
              Обмен и возврат по ошибке продавца
            </h2>
            <p className="text-slate-700">
              Причины обмена или возврата по ошибке продавца:
            </p>
            <ul className="list-disc marker:text-blue-600 pl-5 space-y-2 text-slate-700">
              <li>Неполная комплектация товара</li>
              <li>Брак или дефект товара</li>
              <li>
                Если вы получили дефект, брак или неполную комплектацию товара,
                необходимо сделать фото дефекта и отправить на почту
                mail@svet.su, указав номер заказа и описав характер брака.
              </li>
              <li>
                Мы заменим бракованный товар или довезем недостающие части.
                Доставка будет осуществлена бесплатно
              </li>
            </ul>
          </section>

          <div className="h-8 md:h-10" />

          <section aria-labelledby="refunds" className="space-y-3">
            <h2
              id="refunds"
              className="text-lg font-semibold text-blue-700 underline underline-offset-2"
            >
              Возврат денежных средств
            </h2>
            <p className="text-slate-700">
              Возврат денежных средств осуществляется путем перевода на банковские
              реквизиты покупателя при наличии заявления от покупателя.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default React.memo(Vazvrad)
