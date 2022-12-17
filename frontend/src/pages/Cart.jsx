import { useShoppingCart } from "../store/ContextStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProducts } from "../axios/Axios";
import { FormatCurrency } from "../utilities/FormatCurrency";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import data from "../data";

function Cart() {
  const { cartItems } = useShoppingCart();
  // const { data } = useQuery(["products"], getProducts);

  return (
    <div className="flex flex-col w-full h-screen">
      <h1 className="text-3xl m-10">Shopping Cart</h1>
      <div className="ml-10 flex flex-col items-start w-3/4">
        {cartItems.length < 1 && (
          <div>
            <p>
              Nothing has been added to your cart
              <Link className="ml-2 text-blue-500" to="/">
                Go back to Shop
              </Link>
            </p>
          </div>
        )}
        {cartItems.map((item, index) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="">
          {cartItems.length > 0 && (
            <p className="text-2xl mr-10">
              Total:-
              {FormatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const product = data.products.find(
                    (x) => x.id === cartItem.id
                  );
                  return total + (product?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
