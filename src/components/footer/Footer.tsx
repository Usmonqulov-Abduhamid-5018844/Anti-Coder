import React from "react";
import { Link } from "react-router-dom";
import Payment from "../../assets/headers-image/paymend.svg";
import Logo from "../../assets/headers-image/Group 64.svg";

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <footer className="container mt-[40px] py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-2xl">
                <Link to={"/"}><img src={Logo} alt="" /></Link>
              </div>
            </div>
            <a href="tel:8 (800) 890-46-56" className="mb-3 font-medium text-[20px]">8 (800) 890-46-56</a>

            <Link to={""}><img
              src={Payment}
              alt="Visa Mastercard Mir"
              className="mb-4 w-[222px] h-auto"
            /></Link>

            <div className="flex flex-col gap-6 text-gray-400">
              <Link to="/privacy-policy">Политика конфиденциальности</Link>
              <Link to="/user-agreement">Пользовательское соглашение</Link>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="border rounded-full px-2 py-1">VK</div>
              <div className="border rounded-full px-2 py-1">VK</div>
              <div className="border rounded-full px-2 py-1">VK</div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-base text-[18px] font-semibold mb-2">Покупателям</h4>
            <div className="flex flex-col gap-6 text-gray-600">
              <Link to="/about">О компании</Link>
              <Link to="/dostavka">Доставка и оплата</Link>
              <Link to="/vozvrat">Возврат</Link>
              <Link to="/garantii">Гарантии</Link>
              <Link to="/kontakty">Контакты</Link>
              <Link to="/blog">Блог</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-base font-semibold text-[18px] mb-2">Товары</h4>
            <div className="flex flex-col gap-6 text-gray-600">
              <Link to="/lyustry">Люстры</Link>
              <Link to="/svetilniki">Светильники</Link>
              <Link to="/bra">Бра</Link>
              <Link to="/torshery">Торшеры</Link>
              <Link to="/komplektuyushchie">Комплектующие</Link>
              <Link to="/nastolnye-lampy">Настольные лампы</Link>
            </div>
          </div>


          <div className="flex flex-col gap-6">
            <h4 className="text-base font-semibold mb-2 invisible md:visible">
              ⠀
            </h4>
            <div className="flex flex-col gap-6 text-gray-600">
              <Link to="/spoty">Споты</Link>
              <Link to="/trekovye-svetilniki">Трековые светильники</Link>
              <Link to="/ulichnye-svetilniki">Уличные светильники</Link>
              <Link to="/tehnicheskie-svetilniki">Технические светильники</Link>
              <Link to="/svetodiodnye-lenty">Светодиодные ленты</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default React.memo(Footer);
