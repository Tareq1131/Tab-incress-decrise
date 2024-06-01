// src/components/CardList.js
// import React from "react";

// const CardList = ({ products }) => {
//   return (
//     <div className="card-list">
//       {products.map((product) => (
//         <div key={product.id} className="card">
//           <h3>{product.name}</h3>
//           <p>ID: {product.id}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;

import React from "react";

const CardList = ({ products, onDeleteProduct }) => {
  return (
    <div className="card-list">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>ID: {product.id}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
