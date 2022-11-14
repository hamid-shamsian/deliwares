import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../Pages/NotFound";

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

   if (!product) return <NotFound what='Product' />;

   return (
      <div className='block container'>
         <h2 className='card shop__headings'>{product.name}</h2>
         <div className='grid grid--cols-2'>
            <section className='prodetails__images'>
               <img className='prodetails__image' src={imgSrc} alt='Product' />
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
               <button className='btn shining prodetails__add-btn'>
                  Add to Cart
               </button>
            </section>
         </div>
      </div>
   );
};

export default ProductDetails;
