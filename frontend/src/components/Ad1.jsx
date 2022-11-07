import React from "react";

function Ad1() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-green-100 h-60">
      <div className="flex flex-col justify-center items-center">
        <p>FREE SHIPPING</p>
        <p>Free shipping on all orders over $100 in North America.</p>
        <p>Learn More</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>FREE EXCHANGES </p>
        <p>
          Exchanges are on us, as many times you need to get the fit just right!
        </p>
        <p>Learn More</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>PAY IN 4 EASY INSTALLMENTS</p>
        <p>Choose Sezzle at checkout to pay in 4 interest-free installments.</p>
      </div>
    </div>
  );
}

export default Ad1;
