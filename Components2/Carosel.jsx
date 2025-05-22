import React from "react";
import "./Carosel.css";
const Carosel = () => {
  return (
    <div
      className="carousel bg-gray-500 relative container mx-auto"
      style={{ maxWidth: 1600 }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked="checked"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "80vh" }}
        >
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            style={{
              backgroundImage: 'url("src/assets/Imagess/PC-WALLPAPER-4K.webp',
            }}
          >
            <div className="container mx-auto  p-5  font-mono text-white text-left">
              <h1>
                {" "}
                <i>
                  <b className="text-5xl">Fashion Sales </b>
                </i>
              </h1>
              <p>
                <p className="text-red-700 text-3xl">
                  {" "}
                  <b>Minimal Menz Style</b>
                </p>
                <p className="text-yellow-200">
                  Lorem ipsum, dolor sit amet <br /> consectetur adipisicing
                  elit. <br />
                  Lorem ipsum, dolor sit amet.
                </p>
              </p>
              <button
                className="bg-gradient-to-br from-purple-600 to-red-800 text-white hover:text-black 
               font-bold py-2 px-4 duration-300  mt-3"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div
          className="carousel-item absolute opacity-0 bg-cover bg-right"
          style={{ height: "80vh" }}
        >
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
            style={{
              backgroundImage:
                'url("src/assets/Imagess/C-yyQtIXgAEtl-x.jpg_large',
            }}
          >
            <div className="container mx-auto p-5 font-mono text-blck">
              <h1>
                {" "}
                <i>
                  <b className="text-5xl">Fashion Sales </b>
                </i>
              </h1>
              <p>
                <p className="text-red-700 text-3xl">
                  {" "}
                  <b>Minimal Menz Style</b>
                </p>
                <p className="text-amber-800">
                  Lorem ipsum, dolor sit amet <br /> consectetur adipisicing
                  elit. <br />
                  Lorem ipsum, dolor sit amet.
                </p>
              </p>
              <button className="bg-gradient-to-l  from-red-950 to-green-300 mt-3 text-white hover:text-white font-bold py-2 px-4 duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "80vh" }}
        >
          <div
            className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center"
            style={{
              backgroundImage:
                'url("src/assets/Imagess/desktop-wallpaper-hanging-out-with-your-friends-girl-anime-boy-friends.jpg',
            }}
          >
            <div className="container mx-auto p-5 font-mono text-blue-950 ">
              <h1>
                {" "}
                <i>
                  <b className="text-5xl">Fashion Sales </b>
                </i>
              </h1>
              <p>
                <p className="text-red-700 text-3xl">
                  {" "}
                  <b>Minimal Menz Style</b>
                </p>
                <p className="text-lime-500">
                  Lorem ipsum, dolor sit amet <br /> consectetur adipisicing
                  elit. <br />
                  Lorem ipsum, dolor sit amet.
                </p>
              </p>
              <button
                className="bg-gradient-to-b from-blue-950 to-black
               text-white hover:text-black  font-bold py-2 px-4 duration-300 mt-3"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-2"
          className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-1"
          className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carosel;
