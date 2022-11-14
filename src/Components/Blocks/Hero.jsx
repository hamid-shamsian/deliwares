import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
   const headings = [
      { title: "Autumn Collection", path: "/shop/collection/autumn" },
      { title: "Winter Collection", path: "/shop/collection/winter" },
      { title: "Spring Collection", path: "/shop/collection/spring" }
   ];

   const [slide, setSlide] = useState(0);
   const [showHeading, setShowHeading] = useState(false);
   const [showStaticContent, setShowStaticContent] = useState(false);
   const timer = useRef(0);

   const changeSlide = useCallback(e => {
      clearTimer();
      const direction = e && e.target.id === "hero__prevSlide" ? -1 : 1;
      setShowHeading(false);
      timer.current = setTimeout(() => {
         setShowHeading(true);
         setSlide(s => (s + direction === -1 ? 2 : (s + direction) % 3));
         timer.current = setTimeout(changeSlide, 5000); //if timeout changed:
         //change hero__progress animation duration ^^^ accordingly.
      }, 500);
   }, []);

   const clearTimer = () => clearTimeout(timer.current);

   useEffect(() => {
      setShowHeading(true);
      timer.current = setTimeout(() => {
         setShowStaticContent(true);
         timer.current = setTimeout(changeSlide, 4000); // =above timeout(5000)-below timeout(1000)
      }, 1000);
      return clearTimer;
   }, [changeSlide]);

   return (
      <div className='hero'>
         <header
            className={`hero__header relative-animation move-${
               showHeading ? "right-in" : "left-out"
            }`}
         >
            <h2 className='hero__heading'>{headings[slide].title}</h2>
            <Link
               to={headings[slide].path}
               className='btn hero__btn glassmorph'
            >
               Shop Now
            </Link>
         </header>
         <img
            src='./images/landing-4.jpg'
            alt=''
            className={`hero__img ${slide || "full-opacity"}`}
         />
         <img
            src='./images/landing-1.jpg'
            alt=''
            className={`hero__img ${slide - 1 || "full-opacity"}`}
         />
         <img
            src='./images/landing-5.jpg'
            alt=''
            className={`hero__img ${slide - 2 || "full-opacity"}`}
         />
         <span
            className={`hero__slide hero__slide--prev glassmorph ${
               showStaticContent || "move-left-out"
            }`}
            onClick={changeSlide}
            id='hero__prevSlide'
         >
            &lt;
         </span>
         <span
            className={`hero__slide hero__slide--next glassmorph ${
               showStaticContent || "move-right-out"
            }`}
            onClick={changeSlide}
         >
            &gt;
         </span>
         <div
            className={`hero__progress ${
               showHeading && "hero__progress--full"
            }`}
         ></div>
      </div>
   );
};

export default Hero;
