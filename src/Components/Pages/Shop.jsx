import { useState, useEffect, useMemo } from "react";
import { orderBy } from "lodash";
import getProducts from "../../services/productService";
import getCategories from "../../services/categoryService";
import ProductCard from "../Blocks/ProductCard";
import Pagination from "../Common/Pagination";
import ListGroup from "../Common/ListGroup";
import SortBy from "../Common/SortBy";

const Shop = () => {
   // Loading
   const [loading, setLoading] = useState(true);

   // All Products & Categories
   const [products, setProducts] = useState([]);
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      Promise.all([getProducts(), getCategories()]).then(res => {
         setProducts(res[0].data);
         setCategories(res[1].data);
         setLoading(false);
      });
   }, []);

   // FilteredProducts
   const [filteredProducts, setFilteredProducts] = useState([]);

   // SelectedCat
   const [selectedCat, setSelectedCat] = useState({});
   const handleCatSelect = category => setSelectedCat(category);
   useEffect(() => {
      setFilteredProducts(
         products.filter(p => p.categories[0].id === selectedCat.id)
      );
      setCurrentSort(currentSort => ({ ...currentSort }));
   }, [selectedCat, products]);

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
   const pageSize = 3;

   // CurrentPage
   const [currentPage, setCurrentPage] = useState(1);
   const handlePageChange = page => setCurrentPage(page);
   const currentPageProducts = useMemo(() => {
      const startIndex = (currentPage - 1) * pageSize;
      return filteredProducts.slice(startIndex, startIndex + pageSize);
   }, [filteredProducts, currentPage, pageSize]);

   return (
      <main className='block shop'>
         {loading && <div className='loading'></div>}
         <h1>Shop</h1>
         <hr />
         <ListGroup
            items={categories}
            selectedItem={selectedCat}
            onItemSelect={handleCatSelect}
         />
         <nav className='grid grid--cols-2 grid--gap container shop__nav'>
            <SortBy
               paths={["name", "price", "id"]}
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
         <section className='grid grid--cols-3 grid--gap container'>
            {currentPageProducts.map((product, i) => (
               <ProductCard key={i} data={product} />
            ))}
         </section>
      </main>
   );
};

export default Shop;
