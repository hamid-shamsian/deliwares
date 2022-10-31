import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WindowContext from "./Context/windowContext";
import CatContext from "./Context/catContext";
import Layout from "./Components/Layouts/Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Shop from "./Components/Pages/Shop";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
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

   return (
      <WindowContext.Provider value={windowWidth}>
         <CatContext.Provider value={{ cats, selectedCat, handleCatSelect }}>
            <BrowserRouter>
               <Routes>
                  <Route path='/' element={<Layout />}>
                     <Route index element={<LandingPage />} />
                     <Route path='shop' element={<Shop />} />
                     {/* <Route path='shop/*' element={<Collection />} /> */}
                     <Route path='blog' element={<Blog />} />
                     <Route path='contact' element={<Contact />} />
                     <Route path='about' element={<About />} />
                     <Route path='not-found' element={<NotFound />} />
                     {/* Redirect * to not-found */}
                  </Route>
               </Routes>
            </BrowserRouter>
         </CatContext.Provider>
      </WindowContext.Provider>
   );
}

export default App;
