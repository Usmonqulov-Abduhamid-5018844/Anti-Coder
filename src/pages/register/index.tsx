import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Вы успешно зарегистрировались!");
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <Toaster reverseOrder={false} />
      <section className="flex items-center justify-center min-h-screen bg-[#F2F2F2] px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#454545] text-center">
            Регистрация
          </h1>
          <p className="text-[#A2A2A2] text-center mt-2 text-sm sm:text-base">
            Заполните данные, чтобы создать аккаунт
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-[#454545] mb-1">
                Полное имя
              </label>
              <input
                type="text"
                placeholder="Введите полное имя"
                className="w-full px-4 py-3 rounded-lg border border-[#A2A2A2] focus:outline-none focus:ring-2 focus:ring-[#454545] placeholder-[#A2A2A2]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#454545] mb-1">
                Электронная почта
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-[#A2A2A2] focus:outline-none focus:ring-2 focus:ring-[#454545] placeholder-[#A2A2A2]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#454545] mb-1">
                Пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  className="w-full px-4 py-3 rounded-lg border border-[#A2A2A2] focus:outline-none focus:ring-2 focus:ring-[#454545] placeholder-[#A2A2A2]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A2A2A2] hover:text-[#454545] transition"
                >
                  {showPassword ? "Скрыть" : "Показать"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#454545] text-white font-medium rounded-lg hover:opacity-90 transition flex justify-center items-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Зарегистрироваться"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-[#A2A2A2] mt-5">
            Уже есть аккаунт?{" "}
            <a
              href="/login"
              className="text-[#454545] font-medium hover:underline"
            >
              Войти
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
