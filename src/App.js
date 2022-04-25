import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    const response = await Axios.get(
      "https://vuejsproject-806e8-default-rtdb.firebaseio.com/AllProducts.json"
    );
    const products = response.data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (<>
        <p key={product.id}>{product.name}: {product.price}</p>
        <button>Increment</button>
        <button>decrement</button>
        </>
      ))}
    </div>
  );
}

export default App;

