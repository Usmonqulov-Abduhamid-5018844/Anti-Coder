import React from "react";

const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h2 className="text-9xl font-extrabold text-red-500 tracking-widest">404</h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">Sahifa topilmadi</h3>
        <p className="text-gray-600 mt-2">Kechirasiz, siz izlagan sahifa mavjud emas yoki o‘chirilgan.</p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
};

export default React.memo(Index);
