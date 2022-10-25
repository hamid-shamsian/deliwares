import PropTypes from "prop-types";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
   return (
      <ul className='list list-group'>
         {items.map((item, i) => (
            <li
               key={i}
               className={
                  item === selectedItem
                     ? "list-group__item active"
                     : "list-group__item"
               }
               onClick={() => onItemSelect(item)}
            >
               {item.name}
            </li>
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
