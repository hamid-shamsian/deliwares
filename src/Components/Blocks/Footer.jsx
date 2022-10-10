import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className='block footer'>
         <div className='container grid grid--cols-2'>
            <div className='footer__nav'>
               <ResponsiveMenu title={"aaaaaa"} className={"footer__menu"}>
                  <ul className='list'>
                     <li>item 1</li>
                     <li>item 2</li>
                     <li>item 3</li>
                  </ul>
               </ResponsiveMenu>
               <ResponsiveMenu title={"bbbbbb"} className={"footer__menu"}>
                  <ul className='list'>
                     <li>item 1</li>
                     <li>item 2</li>
                  </ul>
               </ResponsiveMenu>
               <ResponsiveMenu title={"cccccc"} className={"footer__menu"}>
                  <ul className='list'>
                     <li>item 1</li>
                     <li>item 2</li>
                     <li>item 3</li>
                  </ul>
               </ResponsiveMenu>
               <ResponsiveMenu title={"dddddd"} className={"footer__menu"}>
                  <ul className='list'>
                     <li>item 1</li>
                     <li>item 2</li>
                  </ul>
               </ResponsiveMenu>
            </div>
            <div className='footer__brand'>
               <Link className='footer__logo' to='/'>
                  <img src='./images/logo.jpg' alt='Logo' />
               </Link>
               <span className='footer__copyright'>
                  © 2022 DeliWares.
                  <br />
                  All Rights Reserved.
               </span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
