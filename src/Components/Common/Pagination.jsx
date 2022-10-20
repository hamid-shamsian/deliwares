import PropTypes from "prop-types";
import { range } from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
   const pagesCount = Math.ceil(itemsCount / pageSize);
   if (pagesCount === 1) return null;
   const pages = range(1, pagesCount + 1);
   return (
      <ul className='card list pagination'>
         <li
            className='page__item'
            onClick={() => currentPage - 1 && onPageChange(currentPage - 1)}
         >
            &lt;
         </li>
         {pages.map(page => (
            <li
               key={page}
               className={
                  page === currentPage ? "page__item active" : "page__item"
               }
               onClick={() => onPageChange(page)}
            >
               {page}
            </li>
         ))}
         <li
            className='page__item'
            onClick={() =>
               pagesCount - currentPage && onPageChange(currentPage + 1)
            }
         >
            &gt;
         </li>
      </ul>
   );
};

Pagination.propTypes = {
   itemsCount: PropTypes.number.isRequired,
   pageSize: PropTypes.number.isRequired,
   currentPage: PropTypes.number.isRequired,
   onPageChange: PropTypes.func.isRequired
};

export default Pagination;
