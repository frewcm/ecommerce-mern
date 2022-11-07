import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FormatCurrency } from "../utilities/FormatCurrency";
import ClipLoader from "react-spinners/ClipLoader";
import { useShoppingCart } from "../store/ContextStore";

function Products() {
  const params = useParams();
  const { slug } = params;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItem,
    cartQuantity,
  } = useShoppingCart();

  //get data from the backend
  const GET_PRODUCT = `/api/products/slug/${slug}`;

  axios.defaults.baseURL = "http://localhost:5000";

  const { data, isLoading, isError, error } = useQuery(
    ["product"],
    async () => {
      const response = await axios.get(GET_PRODUCT);
      return response.data;
    }
  );
  const quantity = getItemQuantity(data?.id);
  console.log(quantity);
  console.log(data);
  return (
    <div className="flex mt-5 ml-24 mb-5 text-green-700">
      {isLoading && <ClipLoader size={80} />}
      {isError && <p className="text-red-800 bg-red-200">{error.message}</p>}

      <div className="flex">
        <img className="w-1/2" src={data?.image} alt={data?.title} />
        <div className="w-1/2 space-y-5 flex flex-col justify-center">
          <p className="ml-5 text-3xl">{data?.name}</p>
          <p className="ml-5">{FormatCurrency(data?.price)}</p>
          <p className="ml-5">Description: {data?.description}</p>
          {data?.countInStock > 0 ? (
            <p className="ml-5 w-16 text-center text-white bg-green-700 ">
              Instock
            </p>
          ) : (
            <p className="ml-5 w-24 p-1 text-center text-white bg-green-700 ">
              Unavalable
            </p>
          )}

          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(data?.id)}
              className="m-3 p-2 w-28 bg-green-700 rounded text-white"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex flex-col">
              <div className="flex">
                <button
                  onClick={() => decreaseCartQuantity(data?.id)}
                  className="p-3 rounded bg-gray-200 w-3"
                >
                  -
                </button>
                <p className="ml-2 mr-2 text-center">{quantity} in cart</p>
                <button
                  onClick={() => increaseCartQuantity(data?.id)}
                  className="p-3 rounded bg-gray-200 w-3"
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 ml-3 mt-2 text-white rounded p-0.5 w-24"
                onClick={() => removeItem(data?.id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
