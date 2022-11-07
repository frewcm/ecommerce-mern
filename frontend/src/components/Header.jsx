import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useShoppingCart } from "../store/ContextStore";
import logo from "../../public/images/e-logo.png";

function Header() {
  const { cartQuantity } = useShoppingCart();

  return (
    <header className="flex justify-between items-center h-24 w-full shadow-xl">
      <Link className="text-green-900 text-lg ml-5 lg:ml-20" to="/">
        <div className="flex flex-col items-center justify-center rounded-full">
          <img className="w-28 " src={logo} alt="logo image" />
          <p>e-shop</p>
        </div>
      </Link>

      <Link className="flex mr-24" to="/cart">
        <BsCart4 className="text-green-900" size={25} />

        <p className="bg-red-500 text-white text-xs  mb-2 text-center rounded-full w-6">
          {cartQuantity}
        </p>
      </Link>
    </header>
  );
}

export default Header;
