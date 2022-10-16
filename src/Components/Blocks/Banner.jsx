import { Link } from "react-router-dom";

const Banner = () => {
   return (
      <div className='container block'>
         <div className='grid grid--cols-2 banner'>
            <Link
               className='wraper-link banner__img'
               to='/shop/collection/women'
            >
               <img src='./images/banner-1.webp' alt='' />
            </Link>
            <header className='banner__header'>
               <h3 className='banner__heading'>
                  Smart <span>Women</span>
               </h3>
               <span className='banner__tagline'>
                  <span>Product</span> Collection
               </span>
               <Link
                  className='btn btn--accent banner__btn'
                  to='/shop/collection/women'
               >
                  shop now
               </Link>
            </header>
         </div>
         <div className='grid grid--cols-2 banner'>
            <Link className='wraper-link banner__img' to='/shop/collection/men'>
               <img src='./images/banner-2.webp' alt='' />
            </Link>
            <header className='banner__header'>
               <h3 className='banner__heading'>
                  Stylish <span>Men</span>
               </h3>
               <span className='banner__tagline'>
                  <span>Product</span> Collection
               </span>
               <Link
                  className='btn btn--accent banner__btn'
                  to='/shop/collection/men'
               >
                  shop now
               </Link>
            </header>
         </div>
      </div>
   );
};

export default Banner;
