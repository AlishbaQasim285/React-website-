import React from "react";
import "./Cate.css";
import img from "../assets/Imagess/anime-boy-character-illustration_1192741-586.avif";
import img1 from "../assets/Imagess/a5fed69d8db90c92f5bc8b3b259038a2.jpg";
import img2 from "../assets/Imagess/baby-is-crawling-floor-with-green-shirt_984237-46297.avif";
const Cate = () => {
  return (
    <>
    <h1 className="text-center text-3xl font-bold text-white pt-5 bg-gradient-to-r from-stone-700 via-red-500 to-slate-600">Categories</h1>
      <div className="flex justify-center gap-4 bg-gradient-to-r from-stone-700 via-red-500 to-slate-600 p-4">
      
        <div className="card flex flex-col items-center text-white font-serif">
          <img src={img} alt="man photo" className="w-40" />
          <p className="text-center">Men's Fashion</p>
        </div>
        <div className="card flex flex-col items-center text-white font-serif">
          <img src={img1} alt="woman photo" className="w-44" />
          <p className="text-center">Women's Fashion</p>
        </div>
        <div className="card flex flex-col items-center text-white font-serif ">
          <img src={img2} alt="woman photo" className="w-40" />
          <p className="text-center">Baby's Fashion</p>
        </div>
      </div>
   
    </>
  );
};

export default Cate;
