import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="bg-center bg-cover bg-[url('../../public/images/Shopimage.jpg')] h-screen w-full">
      <div className="h-screen w-full bg-green-300 bg-opacity-20 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-gray-50">
          <p className="text-2xl">Welcome.</p>
          <p className="text-5xl mt-5 mb-5 text-black text-center">
            Stay Comfy, Cute and <br /> Sustainable.All Day. All Year.
          </p>
          <Link
            to="#main"
            className=" w-28 p-2 border-2 border-green-900 bg-white text-green-900 duration-300 ease-in-out hover:bg-green-900 hover:text-white text-center rounded"
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
