import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Blocks/Header";
import Footer from "../Blocks/Footer";

const Layout = () => {
   return (
      <Fragment>
         <Header />
         <Outlet />
         <Footer />
      </Fragment>
   );
};

export default Layout;
