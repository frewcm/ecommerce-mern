import React from "react";

function Ad3() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-green-100">
      <div className="flex flex-col items-center m-36">
        <p className="text-4xl text-gray-800 mb-5 text-center">
          We believe that if we are all more connected to and respectful of
          nature, we would be happier and healthier. So we are committed to
          making socially + environmentally footwear that helps you Be Outside.
        </p>
        <p className="text-xl mb-5">Let’s stay in touch.</p>
        <button className=" w-28 p-2 border-2 border-green-900 bg-green-100 text-green-900 duration-300 ease-in-out hover:bg-green-900 hover:text-white text-center rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Ad3;
