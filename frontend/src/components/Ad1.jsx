import React from "react";

function Ad1() {
  return (
    <div className="p-5 grid grid-cols-1  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 bg-green-100 ">
      <div className="h-36 flex flex-col justify-center items-center">
        <p>FREE SHIPPING</p>
        <p className="text-center mt-2">
          Free shipping on all orders over $100 in North America.
        </p>
        <p>Learn More</p>
      </div>
      <div className="h-36  flex flex-col justify-center items-center">
        <p>FREE EXCHANGES </p>
        <p className="text-center mt-2">
          Exchanges are on us, as many times you need to get the fit just right!
        </p>
        <p>Learn More</p>
      </div>
      <div className="h-36  flex flex-col justify-center items-center">
        <p>PAY IN 4 EASY INSTALLMENTS</p>
        <p className="text-center mt-2">
          Choose Sezzle at checkout to pay in 4 interest-free installments.
        </p>
      </div>
    </div>
  );
}

export default Ad1;
