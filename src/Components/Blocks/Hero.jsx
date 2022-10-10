import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
   const headings = [
      { title: "Autumn Collection", path: "/shop/collection/autumn" },
      { title: "Winter Collection", path: "/shop/collection/winter" },
      { title: "Spring Collection", path: "/shop/collection/spring" }
   ];

   const [banner, setBanner] = useState(0);
   const [showHeading, setShowHeading] = useState(false);
   const [showStaticContent, setShowStaticContent] = useState(false);
   const timer = useRef(0);

   const changeBanner = useCallback(e => {
      clearTimer();
      const direction = e && e.target.id === "hero__prevBan" ? -1 : 1;
      setShowHeading(false);
      timer.current = setTimeout(() => {
         setShowHeading(true);
         setBanner(b => (b + direction === -1 ? 2 : (b + direction) % 3));
         timer.current = setTimeout(changeBanner, 5000); //if timeout changed:
         //change hero__progress animation duration ^^^ accordingly.
      }, 500);
   }, []);

   const clearTimer = () => clearTimeout(timer.current);

   useEffect(() => {
      setShowHeading(true);
      timer.current = setTimeout(() => {
         setShowStaticContent(true);
         timer.current = setTimeout(changeBanner, 4000); // =above timeout(5000)-below timeout(1000)
      }, 1000);
      return clearTimer;
   }, [changeBanner]);

   return (
      <div className='hero'>
         <header
            className={`hero__header relative-animation move-${
               showHeading ? "right-in" : "left-out"
            }`}
         >
            <h2 className='hero__heading'>{headings[banner].title}</h2>
            <Link
               to={headings[banner].path}
               className='btn btn--primary hero__btn'
            >
               Shop Now
            </Link>
         </header>
         <img
            src='./images/landing-4.jpg'
            alt=''
            className={`hero__img ${banner || "full-opacity"}`}
         />
         <img
            src='./images/landing-1.jpg'
            alt=''
            className={`hero__img ${banner - 1 || "full-opacity"}`}
         />
         <img
            src='./images/landing-5.jpg'
            alt=''
            className={`hero__img ${banner - 2 || "full-opacity"}`}
         />
         <span
            className={`hero__chngBan hero__chngBan--prev ${
               showStaticContent || "move-left-out"
            }`}
            onClick={changeBanner}
            id='hero__prevBan'
         >
            &lt;
         </span>
         <span
            className={`hero__chngBan hero__chngBan--next ${
               showStaticContent || "move-right-out"
            }`}
            onClick={changeBanner}
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
