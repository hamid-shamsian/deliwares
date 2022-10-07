import { useContext } from "react";
import { Link } from "react-router-dom";
import WindowContext from "../../context/windowContext";

const NavBar = ({ logo, items }) => {
   const width = useContext(WindowContext);

   return width < 900 ? (
      <nav className='nav'>
         <Link to='/' className='nav__logo' onClick={closeNav}>
            <img src={logo} alt='Logo' />
         </Link>
         <svg className='icon icon--white nav__toggler' onClick={toggleNav}>
            <use xlinkHref='./images/sprite.svg#menu'></use>
         </svg>
         <div className='nav__burger'>
            <div className='nav__sign-in'>
               <span>Sign in</span>
            </div>
            <ul className='list nav__list'>
               {items.map(item => (
                  <li key={item._id} className='nav__item'>
                     <Link to={item._id} onClick={closeNav}>
                        {item.content}
                     </Link>
                  </li>
               ))}
            </ul>
            <div className='nav__connect'>
               <span>Connect with us</span>
            </div>
         </div>
      </nav>
   ) : (
      <nav className='nav nav--inline'>
         <Link to='/'>
            <img src={logo} alt='Logo' />
         </Link>
         <div className='nav__content'>
            <div className='nav__sign-in'>
               <span>Sign in</span>
            </div>
            <ul className='list nav__list'>
               {items.map(item => (
                  <li key={item._id} className='nav__item'>
                     <Link to={item._id}>{item.content}</Link>
                  </li>
               ))}
            </ul>
            {/* <div className='nav__connect'>
               <span>Connect with us</span>
            </div> */}
         </div>
      </nav>
   );
};

const closeNav = e => e.target.closest(".nav").classList.remove("nav--open");
const toggleNav = e => e.target.closest(".nav").classList.toggle("nav--open");

export default NavBar;
