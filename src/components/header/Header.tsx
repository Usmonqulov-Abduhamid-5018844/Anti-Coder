import React from "react";
import Collaction from "./heders-collection/Collaction";
import Pages from "./heders-pages/pages";
import Seorch from "./heders-seorch/Seorch";

const Header = () => {
  return (
    <div className="container">
      <header className=" mb-[50px]">
       <Collaction/>
       <Seorch/>
       <Pages/>
      </header>
    </div>
  );
};

export default React.memo(Header);