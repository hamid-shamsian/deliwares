const SortBy = ({ paths, currentSort, onSortChange }) => {
   return (
      <div className='sort-by'>
         <label htmlFor='sort-by'>Sort By:</label>
         <select
            className='sort-by__path'
            id='sort-by'
            onChange={e => onSortChange({ path: e.target.value, order: "asc" })}
         >
            {paths.map(path => (
               <option key={path} value={path}>
                  {path}
               </option>
            ))}
         </select>
         <span
            className='sort-by__order'
            onClick={() =>
               onSortChange({
                  path: currentSort.path,
                  order: currentSort.order === "asc" ? "desc" : "asc"
               })
            }
         >
            {currentSort.order}
         </span>
      </div>
   );
};

export default SortBy;
