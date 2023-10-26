// //import { useState } from "react";
// //import React,{useState} from "react";

// function Item({ name, category,addToCart }) {
//  const  handleAddToCart=() =>{
//   const newItem={
//     name,
//     category
//   };
//   addToCart(newItem)
//  }

// //const [inCart, setInCart] = useState(false);

//   // const toggleCart = () => {
//   //   setInCart(!inCart);
//   // }
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add" onClick={handleAddToCart}>Add to Cart</button>
//     </li>
//   );
// }

// export default Item;
// import React, { useState } from 'react';

// function Item({ name, category, addToCart }) {
//   const [inCart, setInCart] = useState(false);

//   const handleAddToCart = () => {
//     if (inCart) {
//       // If the item is in the cart, remove it
//       setInCart(false);
//       addToCart({ name, category, inCart: false }); // Notify the parent component
//     } else {
//       // If the item is not in the cart, add it
//       setInCart(true);
//       addToCart({ name, category, inCart: true }); // Notify the parent component
//     }
//   };

//   return (
//     <li className={inCart ? "in-cart" : ""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add" onClick={handleAddToCart}>
//         {inCart ? "Remove From Cart" : "Add to Cart"}
//       </button>
//     </li>
//   );
// }

// export default Item;
import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(!inCart); // Toggle the inCart state when the button is clicked
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
