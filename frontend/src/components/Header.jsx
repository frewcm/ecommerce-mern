import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center pl-20 h-24 w-full shadow-lg">
      <Link className="text-green-700 text-lg" to="/">
        ecommerce
      </Link>
    </header>
  );
}

export default Header;
