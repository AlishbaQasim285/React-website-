import { React, useState } from "react";
import "./Latest.css";
import imgee from "../assets/Imagess/blog1.jpg.webp";
import imgee1 from "../assets/Imagess/blog2.jpg.webp";
import imgee2 from "../assets/Imagess/blog3.jpg.webp";

const Latestnewz = () => {
  const [bounce, setBounce] = useState(false);

  const handleBounce = () => {
    setBounce(true);
    setTimeout(() => {
      setBounce(false);
    }, 1000);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 pt-5 pb-5">
        <h1 className="text-center pb-5 text-4xl font-bold text-white bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 pt-7">
          Latest Newz{" "}
        </h1>
        <div className="flex justify-center gap-3 px-8 h-90">
          <div
            className="w-96 p-3  bg-gradient-to-r from-slate-300 to-amber-500
             "
          >
            <img
              className="w-full  object-cover "
              alt="Card Image"
              src={imgee}
            />
            <div className="p-4">
              <h2 className="text-2xl text-red-600 hover:text-black duration-300 cursor-pointer font-light">
                What Curling Irons Are The Best Ones
              </h2>
              <p className="text-sans">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus..
              </p>
              <button
                onClick={handleBounce}
                className={`${
                  bounce ? "animate-bounce" : ""
                } ... underline text-xl pt-3 text-red-600 hover:text-black duration-300`}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-96 p-2  bg-gradient-to-r  from-slate-300 to-amber-500 shadow-md">
            <img
              className="w-full object-cover "
              alt="Card Image"
              src={imgee1}
            />
            <div className="p-4">
              <h2 className="text-2xl t text-red-600 hover:text-black duration-300 cursor-pointer font-sans">
                Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes
              </h2>
              <p className="text-black font-sans">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus..
              </p>
              <button
                onClick={handleBounce}
                className={`${
                  bounce ? "animate-bounce" : ""
                } ... underline text-xl pt-3 text-red-600 hover:text-black duration-300`}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-96 p-2  bg-gradient-to-r  from-slate-300 to-amber-500 shadow-md  ">
            <img
              className="w-full  object-cover "
              alt="Card Image"
              src={imgee2}
            />
            <div className="p-4">
              <h2 className="text-2xl text-red-600 hover:text-black duration-300 cursor-pointer font-light">
                What Curling Irons Are The Best Ones
              </h2>

              <p className="text-black font-sans ">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus..
              </p>
              <button
                onClick={handleBounce}
                className={`${
                  bounce ? "animate-bounce" : ""
                } ... underline text-xl pt-3 text-red-600 hover:text-black duration-300`}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latestnewz;
