import PropTypes from "prop-types";
import { range } from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
   const pagesCount = Math.ceil(itemsCount / pageSize);

   const pages =
      pagesCount < 6
         ? range(1, pagesCount + 1)
         : currentPage < 4
         ? [1, 2, 3, null, pagesCount]
         : currentPage > pagesCount - 3
         ? [1, null, pagesCount - 2, pagesCount - 1, pagesCount]
         : [1, null, currentPage, null, pagesCount];

   const cN = "page__item shining";
   const lastItem = currentPage * pageSize;

   return (
      <div className='pagination'>
         <span>
            Showing {lastItem - pageSize + 1}-{Math.min(lastItem, itemsCount)}{" "}
            of {itemsCount} Results:
         </span>
         {pagesCount > 1 && (
            <ul className='list page__items'>
               <li
                  className={cN}
                  onClick={() =>
                     currentPage - 1 && onPageChange(currentPage - 1)
                  }
               >
                  &lt;
               </li>
               {pages.map((page, i) => (
                  <li
                     key={i} // only i is suitable because pages.length is always below or equal to 5, but the page is unstable because of change of the page numbers.
                     className={
                        page
                           ? page === currentPage
                              ? cN + " active"
                              : cN
                           : "page__space"
                     }
                     onClick={() => page && onPageChange(page)}
                  >
                     {page || "..."}
                  </li>
               ))}
               <li
                  className={cN}
                  onClick={() =>
                     pagesCount - currentPage && onPageChange(currentPage + 1)
                  }
               >
                  &gt;
               </li>
            </ul>
         )}
      </div>
   );
};

Pagination.propTypes = {
   itemsCount: PropTypes.number.isRequired,
   pageSize: PropTypes.number.isRequired,
   currentPage: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired
};

export default Pagination;
