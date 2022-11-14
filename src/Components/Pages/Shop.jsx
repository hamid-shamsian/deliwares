import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { orderBy } from "lodash";
import CatContext from "../../Context/catContext";
import Products from "../Blocks/Products";
import ProductDetails from "../Blocks/ProductDetails";
import NotFound from "./NotFound";
// import getProducts from "../../services/productService";

const Shop = () => {
   // loading
   const [loading, setLoading] = useState(true);

   // products
   const [products, setProducts] = useState([]);
   useEffect(
      () =>
         (function () {
            // Promise.all([getProducts(1), getProducts(2)]).then(res => {
            //    setProducts([...res[0].data, ...res[1].data]);
            //    setLoading(false);
            // });
            setProducts(JSON.parse(localStorage.getItem("p"))); //temp
            setTimeout(() => setLoading(false), 1000); //temp
         })(),
      []
   );

   // selectedCat
   const { selectedCat } = useContext(CatContext);
   useEffect(() => {
      setFilteredProducts(
         selectedCat.id
            ? products.filter(p => p.categories[0].id === selectedCat.id)
            : products
      );
      setCurrentSort(currentSort => ({ ...currentSort }));
      setCurrentPage(1);
   }, [selectedCat, products]);

   // filteredProducts
   const [filteredProducts, setFilteredProducts] = useState([]);

   // currentSort
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
   const sortPaths = [
      { key: "date_modified", title: "Latest" },
      { key: "name", title: "Title" },
      { key: "price", title: "Price" }
   ];

   // pageSize
   // const [pageSize, setPageSize] = useState(4);
   const pageSize = 10;

   // currentPage
   const [currentPage, setCurrentPage] = useState(1);
   const handlePageChange = page => setCurrentPage(page);

   const pInterface = {
      filteredProducts,
      sortPaths,
      currentSort,
      handleSortChange,
      pageSize,
      currentPage,
      handlePageChange
   };

   return (
      <main className='block shop'>
         {loading && <div className='loading'></div>}
         <h1>Shop</h1>
         <hr />

         <Routes>
            <Route path='/' element={<Products data={pInterface} />} />
            <Route
               path='/products/:productId'
               element={<ProductDetails data={products} />}
            />
            {/* <Route path='collections/:col' element={<Collection />} /> */}
            <Route path='/*' element={<NotFound />} />
         </Routes>
      </main>
   );
};

export default Shop;
