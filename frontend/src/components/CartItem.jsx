import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../axios/Axios";
import { useShoppingCart } from "../store/ContextStore";
import { FormatCurrency } from "../utilities/FormatCurrency";
import data from "../data.js";

function TotalCart({ id, quantity }) {
  const { removeItem } = useShoppingCart();
  // const { data } = useQuery(["products"], getProducts);
  const product = data.products.find((x) => x.id === id);
  if (product == null) return null;
  return (
    <div className="flex border-gray-200 border-2 mb-2 lg:w-[600px] md:w-[500px] w-[400px] justify-between">
      <div className="flex items-center ">
        <img className="w-12" src={product.image} alt={product.name} />
        <div className="flex flex-col">
          <p>
            {product.name}
            {quantity > 1 && (
              <span className="text-gray-500 ml-3">x{quantity}</span>
            )}
          </p>
          <p className="text-gray-500 text-sm">
            {FormatCurrency(product.price)}
          </p>
        </div>
      </div>

      <div className="flex items-center  mr-2">
        <p className="mr-2">{FormatCurrency(product.price * quantity)}</p>
        <button
          onClick={() => removeItem(id)}
          className="pl-3 pt-1 pb-1 pr-3 text-xs rounded border-2 border-gray-300 hover:bg-red-600 hover:text-white"
        >
          x
        </button>
      </div>
    </div>
  );
}

export default TotalCart;
