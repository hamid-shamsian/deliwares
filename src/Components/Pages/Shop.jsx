import { useState, useEffect, useRef, useMemo } from "react";
import { orderBy } from "lodash";
import getProducts from "../../services/productService";
import getCategories from "../../services/categoryService";
import ProductCard from "../Blocks/ProductCard";
import Pagination from "../Common/Pagination";
import ListGroup from "../Common/ListGroup";
import SortBy from "../Common/SortBy";

const Shop = () => {
   // All Products
   const products = useRef(getProducts());
   // Categories
   const categories = useRef(getCategories());

   // FilteredProducts
   const [filteredProducts, setFilteredProducts] = useState([]);

   // SelectedCat
   const [selectedCat, setSelectedCat] = useState(categories.current[0]);
   const handleCatSelect = category => setSelectedCat(category);
   useEffect(() => {
      setFilteredProducts(
         products.current.filter(p => p.category === selectedCat._id)
      );
      setCurrentSort(currentSort => ({ ...currentSort }));
   }, [selectedCat]);

   // CurrentSort
   const [currentSort, setCurrentSort] = useState({});
   const handleSortChange = sort => setCurrentSort(sort);
   useEffect(() => {
      setFilteredProducts(fP =>
         orderBy(fP, [currentSort.path], [currentSort.order])
      );
   }, [currentSort]);

   // PageSize
   // const [pageSize, setPageSize] = useState(4);
   const pageSize = 5;

   // CurrentPage
   const [currentPage, setCurrentPage] = useState(1);
   const handlePageChange = page => setCurrentPage(page);
   const currentPageProducts = useMemo(() => {
      const startIndex = (currentPage - 1) * pageSize;
      return filteredProducts.slice(startIndex, startIndex + pageSize);
   }, [filteredProducts, currentPage, pageSize]);

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
            <SortBy
               paths={["title", "price", "_id"]}
               currentSort={currentSort}
               onSortChange={handleSortChange}
            />
            <Pagination
               itemsCount={filteredProducts.length}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={handlePageChange}
            />
         </nav>
         <section className='flex container'>
            {currentPageProducts.map(product => (
               <ProductCard key={product._id} data={product} />
            ))}
         </section>
      </main>
   );
};

export default Shop;
