import { useState, useEffect, useMemo, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCount from "../Common/ProductCount";
import NotFound from "../Pages/NotFound";
import CartContext from "../../Context/cartContext";

const ProductDetails = ({ data }) => {
   const { productId } = useParams();
   const product = useMemo(
      () => data.filter(p => p.id.toString() === productId)[0],
      [productId, data]
   );

   const [imgSrc, setImgSrc] = useState();

   const [attributes, setAttributes] = useState({});
   useEffect(() => {
      if (product) {
         setImgSrc(product.images[0].src);
         const attributes = {};
         product.attributes.forEach(a => (attributes[a.name] = null));
         setAttributes(attributes);
      }
   }, [product]);

   const [count, setCount] = useState(1);

   const { cart, setCart } = useContext(CartContext);
   const addToCart = () => {
      const p = {
         id: product.id,
         name: product.name.slice(0, 20),
         price: product.price,
         image: product.images[0].src,
         attributes,
         count
      };
      setCart([...cart, p]);
   };

   if (!product) return <NotFound what='Product' />;

   return (
      <div className='block container'>
         <h2 className='card shop__headings'>{product.name}</h2>
         <div className='grid grid--cols-2'>
            <section className='prodetails__images'>
               <img
                  className='card prodetails__image'
                  src={imgSrc}
                  alt='Product'
               />
               <div className='flex'>
                  {product.images.map((img, i) => (
                     <img
                        key={i}
                        className='prodetails__thumbnail'
                        src={img.src}
                        onClick={() => setImgSrc(img.src)}
                        alt='thumbnail'
                     />
                  ))}
               </div>
            </section>
            <section className='prodetails__options'>
               {product.attributes.map(
                  (attr, i) =>
                     !attr.name.toLowerCase().includes("ship") && (
                        <div key={i} className='prodetails__attr'>
                           <h5 className='prodetails__attr-name'>
                              {attr.name}
                           </h5>
                           {attr.options.map((op, j) => (
                              <span
                                 key={j}
                                 className={
                                    "shining prodetails__attr-value" +
                                    (op === attributes[attr.name]
                                       ? " selected"
                                       : "")
                                 }
                                 onClick={() =>
                                    setAttributes({
                                       ...attributes,
                                       [attr.name]: op
                                    })
                                 }
                              >
                                 {op}
                              </span>
                           ))}
                        </div>
                     )
               )}
               <div className='prodetails__price'>
                  Price:{" "}
                  <span className='badge badge--primary shining'>
                     ${product.price}
                  </span>
               </div>
               <ProductCount
                  count={count}
                  unitPrice={product.price}
                  onCountChange={c => setCount(c)}
               />
               <button
                  className='btn shining prodetails__add-btn'
                  onClick={addToCart}
               >
                  Add to Cart
               </button>
            </section>
         </div>
      </div>
   );
};

export default ProductDetails;
