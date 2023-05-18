import React, { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <section className="py-5">
      <h3 className="text-center text-2xl uppercase ">products</h3>
      {data && (
        <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto">
          {data.map((product) => (
            <div
              key={product.name}
              className="bg-white/25 rounded-lg overflow-hidden"
            >
              <div>
                <img
                  src={product.url}
                  alt=""
                  className="h-60 w-full object-contain object-center "
                />
                <div className="px-3 py-4">
                  <h5 className="text-lg ">{product.name}</h5>
                  <p>{product.description.slice(1, 100)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
