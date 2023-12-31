import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WindowContext from "./Context/windowContext";
import CatContext from "./Context/catContext";
import CartContext from "./Context/cartContext";
import Layout from "./Components/Layouts/Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Shop from "./Components/Pages/Shop";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
// import getCategories from "../../services/categoryService";
import { getCart, putCart } from "./services/cartService";
import "./App.css";

function App() {
   // WindowWidth
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const updateWindowWidth = () => setWindowWidth(window.innerWidth);
   useEffect(() => {
      window.addEventListener("resize", updateWindowWidth);
      return () => window.removeEventListener("resize", updateWindowWidth);
   }, []);

   // Categories
   const [cats, setCats] = useState([]);
   useEffect(() => {
      (function () {
         // getCategories().then(res => setCats(res.data.slice(0, -1)));
         setCats(JSON.parse(localStorage.getItem("c"))); //temp
      })();
   }, []);
   const [selectedCat, setSelectedCat] = useState({});
   const handleCatSelect = category => setSelectedCat(category);

   // Cart
   const [cart, setCart] = useState(getCart());
   useEffect(() => putCart(cart), [cart]);

   return (
      <WindowContext.Provider value={windowWidth}>
         <CatContext.Provider value={{ cats, selectedCat, handleCatSelect }}>
            <CartContext.Provider value={{ cart, setCart }}>
               <BrowserRouter>
                  <Routes>
                     <Route path='/' element={<Layout />}>
                        <Route index element={<LandingPage />} />
                        <Route path='shop/*' element={<Shop />} />
                        <Route path='blog' element={<Blog />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='about' element={<About />} />
                        <Route path='not-found' element={<NotFound />} />
                        <Route
                           path='*'
                           element={<Navigate to='/not-found' />}
                        />
                     </Route>
                  </Routes>
               </BrowserRouter>
            </CartContext.Provider>
         </CatContext.Provider>
      </WindowContext.Provider>
   );
}

export default App;
