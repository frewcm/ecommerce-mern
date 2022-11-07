import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../axios/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import { FormatCurrency } from "../utilities/FormatCurrency";

function Main() {
  //get data from the backend
  const { data, isLoading, isError, error } = useQuery(
    ["products"],
    getProducts
  );
  console.log(data);
  return (
    <div id="#main">
      <h1 className="m-5 font-bold text-3xl text-green-900">
        Featured Products
      </h1>
      <div className="grid grid-cols-4 gap-4 ml-5 mb-10 flex-wrap place-content-center">
        {isLoading && <ClipLoader size={80} />}
        {isError && <p>{error.message}</p>}
        {data?.map((product, index) => {
          return (
            <div className="max-w-xs shadow-sm" key={index}>
              <Link to={`/product/${product?.slug}`}>
                <img
                  className="hover:scale-105 transition duration-300 delay-200 ease-in-out"
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
