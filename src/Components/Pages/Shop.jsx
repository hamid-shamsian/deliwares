import { useState } from "react";
import Product from "../Blocks/Product";
import getProducts from "../../services/productService";

const Shop = () => {
   const [products, setProducts] = useState(getProducts());

   return (
      <main className='block shop'>
         <h1>Shop</h1>
         <section className='flex container'>
            {products.map(product => (
               <Product key={product._id} data={product} />
            ))}
         </section>
      </main>
   );
};

export default Shop;
