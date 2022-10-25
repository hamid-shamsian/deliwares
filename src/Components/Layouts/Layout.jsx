import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../Blocks/Header";
import Footer from "../Blocks/Footer";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
   return (
      <Fragment>
         <Header />
         <Outlet />
         <Footer />
         <ToastContainer />
      </Fragment>
   );
};

export default Layout;
