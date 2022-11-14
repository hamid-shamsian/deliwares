const SortBy = ({ sortPaths, currentSort, onSortChange }) => {
   return (
      <div className='sort-by'>
         <label htmlFor='sort-by'>Sort By:</label>
         <select
            className='sort-by__path shining'
            id='sort-by'
            value={currentSort.path}
            onChange={e => onSortChange({ path: e.target.value, order: "asc" })}
         >
            {sortPaths.map((path, i) => (
               <option key={i} value={path.key}>
                  {path.title}
               </option>
            ))}
         </select>
         <span
            className='sort-by__order shining'
            onClick={() =>
               onSortChange({
                  path: currentSort.path,
                  order: currentSort.order === "asc" ? "desc" : "asc"
               })
            }
         >
            {/* <svg className='icon icon--white'>
               <use xlinkHref='./images/sprite.svg#sort-up'></use>
            </svg> */}
            <img
               src={`./images/sort-${
                  currentSort.order === "asc" ? "up" : "down"
               }.svg`}
               alt=''
            />
         </span>
      </div>
   );
};

export default SortBy;
