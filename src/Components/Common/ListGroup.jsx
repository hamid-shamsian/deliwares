import { Fragment } from "react";
import PropTypes from "prop-types";

const ListGroup = ({ items, selectedItem, onItemSelect, onClick }) => {
   if (!items.length) return;
   const nestingItems = items.filter(item => !item.parent);
   let parentsIDs = new Set(items.map(i => i.parent || null));
   nestingItems.forEach(i => {
      const itemID = i.id;
      if (parentsIDs.has(itemID))
         i.children = items.filter(i => i.parent === itemID);
   });

   return (
      <ul className='list list-group' onClick={onClick}>
         {nestingItems.map(item => (
            <Fragment key={item.id}>
               <li
                  className={
                     item === selectedItem
                        ? "list-group__item active"
                        : "list-group__item"
                  }
                  onClick={() => onItemSelect(item)}
               >
                  {item.name}
               </li>
               {item.children && (
                  <Fragment>
                     {item.children.map(child => (
                        <li
                           key={child.id}
                           className={
                              child === selectedItem
                                 ? "list-group__item nested active"
                                 : "list-group__item nested"
                           }
                           onClick={() => onItemSelect(child)}
                        >
                           {child.name}
                        </li>
                     ))}
                  </Fragment>
               )}
            </Fragment>
         ))}
      </ul>
   );
};

ListGroup.defaultProps = {
   // selectedItem: items[0]
};

ListGroup.propTypes = {
   items: PropTypes.array.isRequired,
   onItemSelect: PropTypes.func.isRequired
};

export default ListGroup;
