import React, { useState } from "react";
import product_data from "../data/prodData";
import ProductCard from "./ProductCard";

const Product = () => {
  const [itemsToShow, setItemsToShow] = useState(6);
  const [selectedCity, setSelectedCity] = useState(""); // State to store the selected city

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 6);
  };

  // Function to filter data based on the selected city
  const filterDataByCity = () => {
    if (selectedCity === "") {
      return product_data.slice(0, itemsToShow);
    } else {
      return product_data
        .filter((item) => item.location === selectedCity) // Filter by location (city)
        .slice(0, itemsToShow);
    }
  };

  const filteredItems = filterDataByCity();

  const handleSearchData = (data) => {
    setItemsToShow(6);
    setSelectedCity(""); // Reset selected city when a new search is performed
  };

  const cities = ["London", "Mumbai", "Bangalore", "Pune"];

  return (
    <div className="flex flex-col items-center bg-sky-50 font-semibold">
      <div className="rounded-xl">
        <div className="flex flex-col items-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex flex-row justify-between gap-x-4 my-5">
            {cities.map((city) => (
              <p
                key={city}
                className={`bg-gray-200 p-4 rounded-full cursor-pointer ${
                  selectedCity === city ? "bg-indigo-600 text-white" : ""
                }`}
                onClick={() => setSelectedCity(city)} // Set the selected city
              >
                {city}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {filteredItems.length > 0 ? (
              filteredItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No Places available to rent</p>
            )}
          </div>
          {filteredItems.length < product_data.length && (
            <button
              onClick={handleShowMore}
              className="bg-indigo-600 rounded-full text-white px-4 py-2  mt-4"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
