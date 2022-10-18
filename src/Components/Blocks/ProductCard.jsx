import { Link } from "react-router-dom";

const ProductCard = ({ data: { _id, title, price, images, category } }) => {
   return (
      <div className='card product'>
         <div className='product__body'>
            <Link className='wraper-link' to={`/shop/products/${_id}`}>
               <img className='product__img1' src={images.a} alt='' />
               <img className='product__img2' src={images.b} alt='' />
            </Link>
            <div className='product__actions'>
               <span className='product__action'>cat: {category}</span>
               <span className='product__action'></span>
               <span className='product__action'></span>
            </div>
         </div>
         <header className='card__header product__brief'>
            <h3 className='card__heading product__title'>
               <Link to={`/shop/products/${_id}`}>{title}</Link>
            </h3>
            <span className='badge badge--primary product__price'>
               ${price}
            </span>
         </header>
      </div>
   );
};

export default ProductCard;
