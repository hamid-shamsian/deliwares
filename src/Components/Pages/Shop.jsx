import { useState, useEffect, useRef } from "react";
import getProducts from "../../services/productService";
import getCategories from "../../services/categoryService";
import Product from "../Blocks/Product";
import Pagination from "../Common/Pagination";
import ListGroup from "../Common/ListGroup";

const Shop = () => {
   // Products
   const products = useRef(getProducts());
   // Categories
   const categories = useRef(getCategories());

   const [filteredProducts, setFilteredProducts] = useState([]);

   // SelectedCat
   const [selectedCat, setSelectedCat] = useState(categories.current[0]);
   useEffect(() => {
      setFilteredProducts(
         products.current.filter(p => p.category === selectedCat._id)
      );
   }, [selectedCat]);
   const handleCatSelect = category => setSelectedCat(category);

   // PageSize
   // const [pageSize, setPageSize] = useState(4);
   const pageSize = 4;

   // CurrentPage
   const [currentPage, setCurrentPage] = useState(1);
   const handlePageChange = page => setCurrentPage(page);

   const currentPageProducts = () => {
      const startIndex = (currentPage - 1) * pageSize;
      return filteredProducts.slice(startIndex, startIndex + pageSize);
   };

   return (
      <main className='block shop'>
         <h1>Shop</h1>
         <hr />
         <nav className='shop__nav'>
            <ListGroup
               items={categories.current}
               selectedItem={selectedCat}
               onItemSelect={handleCatSelect}
            />
            <Pagination
               itemsCount={filteredProducts.length}
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
