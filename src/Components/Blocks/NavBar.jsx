import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import WindowContext from "../../Context/windowContext";
import CatContext from "./../../Context/catContext";
import ListGroup from "./../Common/ListGroup";
import NavMenu from "./../Common/NavMenu";

const NavBar = ({ logo, history }) => {
   const width = useContext(WindowContext);
   const mobileMode = width < 768;

   const navigate = useNavigate();

   const { cats, selectedCat, handleCatSelect } = useContext(CatContext);

   const items = [
      {
         content: (
            <NavMenu path={"/shop"} title={"Shop"} mobileMode={mobileMode}>
               <ListGroup
                  onClick={() => navigate("/shop")}
                  items={cats}
                  selectedItem={selectedCat}
                  onItemSelect={handleCatSelect}
               />
            </NavMenu>
         )
      },
      { path: "/blog", content: "Blog" },
      { path: "/contact", content: "Contact" },
      { path: "/about", content: "About Us" }
   ];

   return mobileMode ? (
      <nav className='nav'>
         <Link className='nav__logo' to='/' onClick={closeNav}>
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
               {items.map((item, i) => (
                  <li key={i} className='nav__item' onClick={closeNav}>
                     {item.path ? (
                        <NavLink to={item.path}>{item.content}</NavLink>
                     ) : (
                        item.content
                     )}
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
         <Link className='nav__logo' to='/'>
            <img src={logo} alt='Logo' />
         </Link>
         <div className='nav__content'>
            <div className='nav__sign-in'>
               <span>Sign in</span>
            </div>
            <ul className='list nav__list'>
               {items.map((item, i) => (
                  <li key={i} className='nav__item'>
                     {item.path ? (
                        <Link to={item.path}>{item.content}</Link>
                     ) : (
                        item.content
                     )}
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
