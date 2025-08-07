import React from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <>
      <div className="input border flex outline-none w-[626px] h-[50px] rounded-[40px] overflow-hidden gap-2">
        <input
          className="w-[90%] focus:outline-none indent-6 text-[20px]"
          type="text"
        />
        <button>
          <CiSearch className="  text-[35px] my-auto" />
        </button>
      </div>
    </>
  );
};

export default React.memo(Input);
