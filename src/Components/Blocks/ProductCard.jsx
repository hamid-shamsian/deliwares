import { Link } from "react-router-dom";

const ProductCard = ({ data: { id, name, price, images, categories } }) => {
   return (
      <div className='card product'>
         <div className='product__body'>
            <Link className='wraper-link' to={`/shop/products/${id}`}>
               {/* <img className='product__img1' src={images[0].src} alt='' /> */}
               {/* {images[1] && (
                  <img className='product__img2' src={images[1].src} alt='' />
               )} */}
            </Link>
            <div className='product__actions'>
               <span className='product__action'>cat: {categories[0].id}</span>
               <span className='product__action'>id: {id}</span>
               <span className='product__action'></span>
            </div>
         </div>
         <header className='card__header product__brief'>
            <h3 className='card__heading product__title'>
               <Link to={`/shop/products/${id}`}>{name.slice(0, 20)}</Link>
            </h3>
            <span className='badge badge--primary product__price'>
               ${price}
            </span>
         </header>
      </div>
   );
};

export default ProductCard;
