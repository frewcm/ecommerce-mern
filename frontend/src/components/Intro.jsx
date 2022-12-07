import React from "react";
import { Link } from "react-scroll";

function Intro() {
  return (
    <div className="bg-center bg-cover bg-[url('../../public/images/shopImage.webp')] h-screen w-full">
      <div className="h-screen w-full bg-green-700 bg-opacity-40 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-gray-50">
          <p className="text-2xl text-green-100">Welcome.</p>
          <p className="text-3xl lg:text-5xl mt-5 mb-5 text-green-100 text-center">
            Stay Comfy, Cute and <br /> Sustainable.All Day. All Year.
          </p>
          <Link
            to="shop"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" w-28 p-2 border-2 border-green-900 bg-white text-green-900 duration-300 ease-in-out hover:bg-green-100 hover:text-black text-center rounded"
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
