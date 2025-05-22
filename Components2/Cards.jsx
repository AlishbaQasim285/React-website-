import React, { useState } from "react";
import image1 from "../assets/Imagess/1690387296020a_800x800.webp";
import image2 from "../assets/Imagess/copy3.jpg";
import image3 from "../assets/Imagess/1690387295919g_800x800.webp";
import image4 from "../assets/Imagess/img52.jpg";
import image5 from "../assets/Imagess/8715c263ca12cb25d68539ef54c04289fd474b0b_high (1).webp";
import image6 from "../assets/Imagess/img6.jpg";
import image7 from "../assets/Imagess/65d76375c19cf0d884e31e5272724f073950e210_high.webp";
import image8 from "../assets/Imagess/image81.jpeg.jpg";
import image9 from "../assets/Imagess/10142b4d2c66dd401da1fce6d4b237f7_high.webp";
import image10 from "../assets/Imagess/ffdc6d396cc0f15dc1e3fbe0268d2fdc_high.webp";
import image11 from "../assets/Imagess/bfed8d0a7bec4b70ff042e717d4237341295d2a9_high.webp";
import image12 from "../assets/Imagess/077df6273b4a1825f7357b68ceb3b64d513c9f3c_high.webp";
import image13 from "../assets/Imagess/df927ee88ff88d4f0a16af022d296cd5_high.webp";
import image14 from "../assets/Imagess/946d445fd29e4e3c092b1ac69bbcfa4a92d0ec44_high.webp";
import image15 from "../assets/Imagess/a8c796fef13f58563c6bd6d519540e357fa83d5f_high.webp";
import image16 from "../assets/Imagess/9152be2d581582e148f0524f9e8510e3b99c8b5c_high.webp";
import image17 from "../assets/Imagess/c0865667acd2b2c0ece67f44899a37ec27fa1e23_high.webp";
import image18 from "../assets/Imagess/7cc08f4734ccb5e096be553c3926bf742e87de17_high.webp";
import image19 from "../assets/Imagess/039dc6f28e5f0ad3f4ea4b170a79bca031b1437d_high.webp";
import image20 from "../assets/Imagess/882436d8be7ca5c13698e8a0765cb24d46c37abb_high.webp";
import image21 from "../assets/Imagess/7347c6f24b066ee854cb216de382be46d123059a_high.webp";

import "./Cards.css";
const Cards = () => {
  const products = [
    {
      image: image1,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image2,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image3,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image4,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image5,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image6,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image7,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image8,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image9,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image10,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image11,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image12,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image13,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image14,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image15,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image16,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image17,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image18,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image19,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image20,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
    {
      image: image21,
      title: "Cashmere Tank + Bag",
      price: "$98.00",
      originalPrice: "$120.00",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-gradient-to-r  from-stone-700 via-red-500 to-slate-600">
        <div
          className="relative w-full max-w-6xl mx-auto overflow-hidden  text-white pt-5
         bg-gradient-to-br from-gray-700 to-gray-800"
        >
          <h1 className="text-center text-4xl font-bold text-white pt-10">
            Trending This Week{" "}
          </h1>
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 p-5 "
                style={{ flexBasis: "33.33%" }}
              >
                <div className="flex flex-col items-center pt-20">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <div className="text-sm text-gray-300">
                    <span className="text-red-500">{product.price}</span>
                    <span className="line-through ml-2">
                      {product.originalPrice}
                    </span>
                    <button
                      className="bg-gradient-to-br from-stone-600 to-red-00 text-white hover:text-black 
               font-bold py-2 px-4 duration-300  mt-3 flex col-span-1 ps-3"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
