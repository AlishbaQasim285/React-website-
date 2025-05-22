import React from "react";
import "./Products.css";
import imge from "../assets/Imagess/PhotoRoom-20211023_140603-01_600x111.jpg";
import imge1 from "../assets/Imagess/c04ed451b8c67b5b79b499eb833c11a1.jpg";
import imge2 from "../assets/Imagess/serum.jpg"
import imge3 from "../assets/Imagess/perfume.jpeg";
import imge6 from "../assets/Imagess/base.jpeg";

const Products = () => {
  return ( <div className="bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 pt-5 pb-5">
      <h1 className="text-center pb-5 text-4xl font-bold text-white bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 pt-7">
        You May Like This{" "}
      </h1>
      <div className="flex justify-center gap-3 px-8 h-90">
        <div
          className="w-80 p-3  bg-gradient-to-br from-sky-300 to-slate-800
        rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src={imge}
          />
          <div className="p-4">
            <h2 className="text-xl text-teal-900 font-semibold">Hand Cream</h2>
            <p className="text-white font-light">Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between mt-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-black hover:text-white duration-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-80 p-2  bg-gradient-to-br from-sky-300 to-slate-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-36 object-cover rounded-t-lg"
            alt="Card Image"
            src={imge1}
          />
          <div className="p-4">
            <h2 className="text-xl text-sky-900 font-semibold">
              Foundation Cream
            </h2>
            <p className="text-white font-light">Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between mt-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-black hover:text-white duration-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-80 p-2  bg-gradient-to-br from-sky-300 to-slate-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src={imge2}
          />
          <div className="p-4">
            <h2 className="text-xl text-teal-900  font-semibold">Black Mask</h2>
            <p className="text-white font-light">Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between mt-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-black hover:text-white duration-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
   
        <div className="w-80 p-2  bg-gradient-to-br from-sky-300 to-slate-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src={imge3}
          />
          <div className="p-4">
            <h2 className="text-xl text-sky-900 font-semibold">Perfumes</h2>
            <p className="text-white font-light">Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between mt-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-black hover:text-white duration-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      
        <div className="w-80 p-2  bg-gradient-to-br from-sky-300 to-slate-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            alt="Card Image"
            src={imge6}
          />
          <div className="p-4">
            <h2 className="text-xl text-sky-900 font-semibold">
              Whitening Cream{" "}
            </h2>
            <p className="text-white font-light">Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between mt-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-black hover:text-white duration-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
