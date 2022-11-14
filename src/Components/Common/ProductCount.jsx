const ProductCount = ({ count, unitPrice, onCountChange }) => {
   return (
      <div className='product-count'>
         <div className='card product-count__count'>
            {count}
            <div className='product-count__btn shining'>
               <div
                  className='product-count__seg'
                  onClick={() => onCountChange(count + 1)}
               >
                  +
               </div>
               <div
                  className='product-count__seg'
                  onClick={() => count - 1 && onCountChange(count - 1)}
               >
                  -
               </div>
            </div>
         </div>
         <span className='product-count__total-price'>
            Total Price: ${unitPrice * count}
         </span>
      </div>
   );
};

export default ProductCount;
