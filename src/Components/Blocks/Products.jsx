import { useContext } from "react";
import WindowContext from "../../Context/windowContext";
import CatContext from "../../Context/catContext";
import ProductCard from "../Blocks/ProductCard";
import Pagination from "../Common/Pagination";
import ListGroup from "../Common/ListGroup";
import SortBy from "../Common/SortBy";

const Products = ({
   data: {
      filteredProducts,
      sortPaths,
      currentSort,
      handleSortChange,
      pageSize,
      currentPage,
      handlePageChange
   }
}) => {
   // windowWidth
   const width = useContext(WindowContext);

   // selectedCat
   const { cats, selectedCat, handleCatSelect } = useContext(CatContext);

   const currentPageProducts = () => {
      const startIndex = (currentPage - 1) * pageSize;
      return filteredProducts.slice(startIndex, startIndex + pageSize);
   };

   return (
      <div className='block container shop__container'>
         {width > 767 && (
            <div className='shop__nav'>
               <h2 className='card shop__headings'>Categories</h2>
               <ListGroup
                  items={cats}
                  selectedItem={selectedCat}
                  onItemSelect={handleCatSelect}
               />
               <SortBy
                  sortPaths={sortPaths}
                  currentSort={currentSort}
                  onSortChange={handleSortChange}
               />
            </div>
         )}
         <div className='container'>
            <h2 className='card shop__headings'>
               {selectedCat.name || "All Products"}
            </h2>
            {width < 768 && (
               <SortBy
                  sortPaths={sortPaths}
                  currentSort={currentSort}
                  onSortChange={handleSortChange}
               />
            )}
            <Pagination
               itemsCount={filteredProducts.length}
               pageSize={pageSize}
               currentPage={currentPage}
               onPageChange={handlePageChange}
            />
            <section className='grid grid--cols-3 grid--gap'>
               {currentPageProducts().map(product => (
                  <ProductCard key={product.id} data={product} />
               ))}
            </section>
         </div>
      </div>
   );
};

export default Products;
