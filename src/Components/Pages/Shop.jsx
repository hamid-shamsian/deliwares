import { useState, useEffect, useMemo, useContext } from "react";
import { orderBy } from "lodash";
import CatContext from "./../../Context/catContext";
import ProductCard from "../Blocks/ProductCard";
import Pagination from "../Common/Pagination";
import ListGroup from "../Common/ListGroup";
import SortBy from "../Common/SortBy";
// import getProducts from "../../services/productService";
// import getCategories from "../../services/categoryService";

const Shop = () => {
   const { cats, selectedCat, handleCatSelect } = useContext(CatContext);

   // Loading
   const [loading, setLoading] = useState(true);

   // Products
   const [products, setProducts] = useState([]);
   useEffect(
      () =>
         (function () {
            // Promise.all([getProducts(1), getProducts(2)]).then(res => {
            //    setProducts([...res[0].data, ...res[1].data]);
            //    setLoading(false);
            // });
            setProducts(JSON.parse(localStorage.getItem("p"))); //temp
            setLoading(false); //temp
         })(),
      []
   );

   // SelectedCat
   useEffect(() => {
      setFilteredProducts(
         selectedCat.id
            ? products.filter(p => p.categories[0].id === selectedCat.id)
            : products
      );
      setCurrentSort(currentSort => ({ ...currentSort }));
      setCurrentPage(1);
   }, [selectedCat, products]);

   // FilteredProducts
   const [filteredProducts, setFilteredProducts] = useState([]);

   // CurrentSort
   const [currentSort, setCurrentSort] = useState({
      path: "date_modified",
      order: "desc"
   });
   const handleSortChange = sort => setCurrentSort(sort);
   useEffect(() => {
      setFilteredProducts(fP =>
         orderBy(fP, [currentSort.path], [currentSort.order])
      );
   }, [currentSort]);

   // PageSize
   // const [pageSize, setPageSize] = useState(4);
   const pageSize = 10;

   // CurrentPage
   const [currentPage, setCurrentPage] = useState(1);
   const handlePageChange = page => setCurrentPage(page);
   const currentPageProducts = useMemo(() => {
      const startIndex = (currentPage - 1) * pageSize;
      return filteredProducts.slice(startIndex, startIndex + pageSize);
   }, [filteredProducts, currentPage, pageSize]);

   const fP_count = filteredProducts.length;
   const HelperVar = currentPage * pageSize;

   return (
      <main className='block shop'>
         {loading && <div className='loading'></div>}
         <h1>Shop</h1>
         <hr />
         <ListGroup
            items={cats}
            selectedItem={selectedCat}
            onItemSelect={handleCatSelect}
         />
         <nav className='grid grid--cols-2 grid--gap container shop__nav'>
            <SortBy
               paths={[
                  { key: "date_modified", title: "Latest" },
                  { key: "name", title: "Title" },
                  { key: "price", title: "Price" }
               ]}
               currentSort={currentSort}
               onSortChange={handleSortChange}
            />
            <Pagination
               itemsCount={fP_count}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={handlePageChange}
            />
         </nav>
         <p>
            Showing {HelperVar - pageSize + 1}-
            {HelperVar > fP_count ? fP_count : HelperVar} of {fP_count} Results:
         </p>
         <section className='grid grid--cols-3 grid--gap container'>
            {currentPageProducts.map((product, i) => (
               <ProductCard key={i} data={product} />
            ))}
         </section>
      </main>
   );
};

export default Shop;
