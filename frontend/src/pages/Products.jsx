import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FormatCurrency } from "../utilities/FormatCurrency";
import ClipLoader from "react-spinners/ClipLoader";
import { useShoppingCart } from "../store/ContextStore";
import data from "../data";

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
  // const GET_PRODUCT = `/api/products/slug/${slug}`;

  // axios.defaults.baseURL = "http://localhost:8000";

  // const { data, isLoading, isError, error } = useQuery(
  //   ["product"],
  //   async () => {
  //     const response = await axios.get(GET_PRODUCT);
  //     return response.data;
  //   }
  // );
  const product = data.products.find((x) => x.slug === slug);
  const quantity = getItemQuantity(product.id);
  console.log(quantity);
  console.log(data);
  return (
    <div className="flex mt-5 ml-24 mb-5 text-green-700 ">
      {/* {isLoading && <ClipLoader size={80} />}
      {isError && <p className="text-red-800 bg-red-200">{error.message}</p>} */}

      <div className="flex">
        <img
          className="w-[440px] object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="w-1/2 space-y-5 flex flex-col m-5">
          <p className="ml-5 text-3xl">{product.name}</p>
          <p className="ml-5">{FormatCurrency(product.price)}</p>
          <p className="ml-5">Description: {product.description}</p>
          {product.countInStock > 0 ? (
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
              onClick={() => increaseCartQuantity(product.id)}
              className="m-3 p-2 w-28 bg-green-700 rounded text-white"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex flex-col">
              <div className="flex">
                <button
                  onClick={() => decreaseCartQuantity(product.id)}
                  className="p-3 rounded bg-gray-200 w-3"
                >
                  -
                </button>
                <p className="ml-2 mr-2 text-center">{quantity} in cart</p>
                <button
                  onClick={() => increaseCartQuantity(product.id)}
                  className="p-3 rounded bg-gray-200 w-3"
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 ml-3 mt-2 text-white rounded p-0.5 w-24"
                onClick={() => removeItem(product.id)}
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
