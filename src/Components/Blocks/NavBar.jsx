import { useContext } from "react";
import { Link } from "react-router-dom";
import WindowContext from "../../context/windowContext";

const NavBar = ({ logo, items }) => {
   const width = useContext(WindowContext);

   return width < 768 ? (
      <nav className='nav collapsible collapsible--overlay'>
         <Link to='/'>
            <img src={logo} alt='Logo' />
         </Link>
         <svg className='icon icon--white nav__toggler' onClick={toggler}>
            <use xlinkHref='./images/sprite.svg#menu'></use>
         </svg>
         <ul className='list nav__list collapsible__content'>
            {items.map(item => (
               <li key={item._id} className='nav__item' onClick={toggler}>
                  <Link to={item._id}>{item.content}</Link>
               </li>
            ))}
         </ul>
      </nav>
   ) : (
      <nav className='nav'>
         <Link to='/'>
            <img src={logo} alt='Logo' />
         </Link>
         <ul className='list nav__list'>
            {" "}
            {items.map(item => (
               <li key={item._id} className='nav__item'>
                  <Link to={item._id}>{item.content}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

const toggler = e =>
   e.target.closest(".collapsible").classList.toggle("collapsible--expanded");

export default NavBar;
