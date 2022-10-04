import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import LandingPage from "./Components/Pages/LandingPage";
import Shop from "./Components/Pages/Shop";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<LandingPage />} />
               <Route path='shop' element={<Shop />} />
               <Route path='blog' element={<Blog />} />
               <Route path='contact' element={<Contact />} />
               <Route path='about' element={<About />} />
               <Route path='*' element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
