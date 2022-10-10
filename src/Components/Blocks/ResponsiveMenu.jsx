import PropTypes from "prop-types";
import { useContext } from "react";
import WindowContext from "../../context/windowContext";

const ResponsiveMenu = ({ title, children, bPoint, className }) => {
   const width = useContext(WindowContext);

   return width < bPoint ? (
      <section className={"collapsible " + className}>
         <header
            className='collapsible__header'
            onClick={e =>
               e.target
                  .closest(".collapsible")
                  .classList.toggle("collapsible--expanded")
            }
         >
            <h4 className='collapsible__heading menu__heading'>{title}</h4>
            <img
               className='icon icon--white collapsible__chevron'
               src='/images/chevron.svg'
               alt=''
            />
         </header>
         <div className='collapsible__content menu__content'>{children}</div>
      </section>
   ) : (
      <section className={className}>
         <header>
            <h4 className='menu__heading'>{title}</h4>
         </header>
         <div className='menu__content'>{children}</div>
      </section>
   );
};

ResponsiveMenu.defaultProps = {
   bPoint: 1024
};

ResponsiveMenu.propTypes = {
   bPoint: PropTypes.number.isRequired,
   className: PropTypes.string // parent-component class
};

export default ResponsiveMenu;
