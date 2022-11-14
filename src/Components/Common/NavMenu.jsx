import { Link } from "react-router-dom";

const NavMenu = ({ path, title, mobileMode, children }) => {
   const closeMenu = e =>
      e.target.closest(".nav-menu").classList.remove("nav-menu--open");

   return mobileMode ? (
      <section className='collapsible'>
         <header className='collapsible__header'>
            <Link className='collapsible__heading' to={path}>
               {title}
            </Link>
            <img
               className='icon icon--white collapsible__chevron'
               src='/images/chevron.svg'
               onClick={toggler}
               alt=''
            />
         </header>
         <div className='collapsible__content'>{children(() => null)}</div>
      </section>
   ) : (
      <section
         className='nav-menu'
         onMouseEnter={openMenu}
         onMouseLeave={closeMenu}
      >
         <Link className='nav-menu__title' to={path}>
            {title}
         </Link>
         <div className='nav-menu__content glassmorph'>
            {children(closeMenu)}
         </div>
      </section>
   );
};

const toggler = e => {
   e.stopPropagation();
   e.target.closest(".collapsible").classList.toggle("collapsible--expanded");
};

const openMenu = e =>
   e.target.closest(".nav-menu").classList.add("nav-menu--open");

export default NavMenu;
