import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";

const Layout = () => {
  return (
    <>
      {/* <Header/> */}
      <main className="min-h-[500px]">
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default React.memo(Layout);
