import React from "react";
import { BsBuildings } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
import { SlCursorMove } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      href={product.href}
      className="group rounded-lg bg-white drop-shadow-lg"
    >
      <div className="m-2">
        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <div>
            <p className="p-2 rounded-full absolute top-8 left-4 bg-white text-indigo-600">
              For Rent
            </p>

            <AiOutlineHeart
              size={36}
              className="mt-1 absolute text-indigo-600 top-8 right-4 bg-white rounded-full p-1"
            />
          </div>
          <img
            src={product.homeMainPic}
            alt={product.name}
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="flex flex-row m-4 text-black text-xl space-x-2">
          <FiMapPin className="mt-1 text-gray-400" />
          <h3 className=" ">{product.location}</h3>
        </div>
        <div className="flex flex-row m-4 text-black text-xl space-x-2">
          <h3 className=" ">{product.name}</h3>
        </div>

        <div className="flex flex-row m-4 justify-between text-sm text-gray-800">
          <div className="flex flex-col items-center">
            <BsBuildings size={24} />
            <p className="text-md">{product.rooms} Rooms</p>
          </div>
          <div className="flex flex-col items-center">
            <BiBed size={24} />
            <p className="text-md">{product.beds} Beds</p>
          </div>
          <div className="flex flex-col items-center">
            <BiBath size={24} />
            <p className="text-md">{product.bathrooms} Bathrooms </p>
          </div>
          <div className="flex flex-col items-center">
            <SlCursorMove size={24} />
            <p className="text-md">{product.area}</p>
          </div>
        </div>

        <div className="flex flex-row justify-between m-2">
          <p className="my-2 text-lg font-medium text-gray-900">
            ${product.price}
            <span className="text-xs ml-1">/ month</span>
          </p>
          <div className="gap-x-4 mt-1">
            <Link to={`/product/${product.id}`}>
              <button className="bg-white-400 rounded-full text-indigo-600 border border-indigo-600 font-bold p-2">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
