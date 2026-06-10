import React from "react";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const Products = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-4 gap-4">
        <div className="w-75 border rounded h-84">
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="font-bold mt-3">{product.title}</h2>

          <p>${product.price}</p>

          <p>{product.category}</p>

          <p>
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>

          <button className="border rounded h-10 bg-amber-100 flex justify-center items-center px-3 py-2"> add to cart</button>
        </div>

        <div className="w-75 border rounded h-80">
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>
        </div>

        <div className="w-75 border rounded h-80">
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>
        </div>

        <div className="w-75 border rounded h-80">
          <div className="w-full h-40">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>
           <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>
        </div>

        
      </div>
    </>
  );
};

export default Products;
