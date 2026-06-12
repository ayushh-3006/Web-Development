// import React from "react";

// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };

// const Products = () => {
//   return (
//     <>
//       <div className="p-10 grid grid-cols-4 gap-4">
//         <div className="w-75 border rounded h-84">
//           <div className="w-full h-40">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="image"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <h2 className="font-bold mt-3">{product.title}</h2>

//           <p>${product.price}</p>

//           <p>{product.category}</p>

//           <p>
//             ⭐ {product.rating.rate} ({product.rating.count})
//           </p>

//           <button className="border rounded h-10 bg-amber-100 flex flex-col justify-between items-center"> add to cart</button>
//         </div>

//         <div className="w-75 border rounded h-80">
//           <div className="w-full h-40">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="image"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
//           <p>${product.price}</p>
//           <p>{product.category}</p>
//           <p>
//             ⭐ {product.rating.rate} ({product.rating.count})
//           </p>
//         </div>

//         <div className="w-75 border rounded h-80">
//           <div className="w-full h-40">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="image"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
//           <p>${product.price}</p>
//           <p>{product.category}</p>
//           <p>
//             ⭐ {product.rating.rate} ({product.rating.count})
//           </p>
//         </div>

//         <div className="w-75 border rounded h-80">
//           <div className="w-full h-40">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="image"
//               className="w-full h-full object-contain"
//             />
//           </div>
//            <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
//           <p>${product.price}</p>
//           <p>{product.category}</p>
//           <p>
//             ⭐ {product.rating.rate} ({product.rating.count})
//           </p>
//         </div>

//          <div className="w-75 border rounded h-80">
//           <div className="w-full h-40">
//             <img
//               src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//               alt="image"
//               className="w-full h-full object-contain"
//             />
//           </div>
//            <h2 className="font-bold mt-3">Lorem ipsum dolor sit amet.</h2>
//           <p>${product.price}</p>
//           <p>{product.category}</p>
//           <p>
//             ⭐ {product.rating.rate} ({product.rating.count})
//           </p>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";

import loading from "../assets/loading.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading} alt="" className="w-50" />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-4 gap-5">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className="w-75 border rounded h-100 p-3" key={index}>
                <div className="w-full h-40">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between h-50">
                  <div>
                    <p className="text-xl">{product.title}</p>
                    <p className="text-sm capitalize text-gray-500">
                      {product.category}
                    </p>
                    <p>₹ {product.price * 100}</p>
                    <p>{product.rating.rate}/5</p>
                  </div>

                  <button className="bg-orange-400 rounded-full px-4 py-2">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
