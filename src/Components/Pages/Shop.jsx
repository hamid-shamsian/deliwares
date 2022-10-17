import { useState, useEffect } from "react";
import Product from "../Blocks/Product";
import Pagination from "../Common/Pagination";
import getProducts from "../../services/productService";

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [pageSize, setPageSize] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      setProducts(getProducts());
      setPageSize(5);
   }, []);

   const handlePageChange = page => setCurrentPage(page);

   const currentPageProducts = () => {
      const startIndex = (currentPage - 1) * pageSize;
      return products.slice(startIndex, startIndex + pageSize);
   };

   return (
      <main className='block shop'>
         <h1>Shop</h1>
         <hr />
         <nav className='shop__nav'>
            <Pagination
               itemsCount={products.length}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={handlePageChange}
            />
         </nav>
         <section className='flex container'>
            {currentPageProducts().map(product => (
               <Product key={product._id} data={product} />
            ))}
         </section>
      </main>
   );
};

export default Shop;
