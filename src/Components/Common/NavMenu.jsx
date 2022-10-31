import { Link } from "react-router-dom";

const NavMenu = ({ path, title, mobileMode, children }) => {
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
         <div className='collapsible__content'>{children}</div>
      </section>
   ) : (
      <section className='nav-menu'>
         <Link className='nav-menu__title' to={path}>
            {title}
         </Link>
         <div className='nav-menu__content'>{children}</div>
      </section>
   );
};

const toggler = e => {
   e.stopPropagation();
   e.target.closest(".collapsible").classList.toggle("collapsible--expanded");
};

export default NavMenu;
