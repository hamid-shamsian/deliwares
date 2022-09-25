import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className='header'>
         <nav className=''>
            <ul className='header__nav'>
               <li>
                  <Link to='/'>Deliwares</Link>
               </li>
               <li>
                  <Link to='/shop'>Shop</Link>
               </li>
               <li>
                  <Link to='/blog'>Blog</Link>
               </li>
               <li>
                  <Link to='/contact'>Contact</Link>
               </li>
               <li>
                  <Link to='/about'>About Us</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
