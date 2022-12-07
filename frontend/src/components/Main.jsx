import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../axios/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import { FormatCurrency } from "../utilities/FormatCurrency";
import data from "../data";

function Main() {
  //get data from the backend
  // const { data, isLoading, isError, error } = useQuery(
  //   ["products"],
  //   getProducts
  // );
  // console.log(data);

  return (
    <div id="shop" className="flex flex-col items-center">
      <h1 className="m-5 font-bold text-3xl text-green-900">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:space-x-20  lg:grid lg:grid-cols-4 lg:space-x-5 ml-2 mt-5 mb-10">
        {/* {isLoading && <ClipLoader size={80} />}
        {isError && <p>{error.message}</p>} */}
        {data?.products.map((product, index) => {
          return (
            <div className="ml-5 shadow-sm" key={index}>
              <Link to={`/product/${product?.slug}`}>
                <img
                  className="w-72 h-96 object-cover hover:scale-105 transition duration-300 delay-200 ease-in-out"
                  src={product?.image}
                  alt={product?.name}
                />
                <p className="m-2 font-bold">{product?.name}</p>
                <p className="m-2">{FormatCurrency(product?.price)}</p>
                <button className="m-3 p-2 bg-green-900 rounded text-white">
                  Add to cart
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
