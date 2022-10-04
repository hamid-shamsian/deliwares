import PropTypes from "prop-types";

const List = ({ className, items }) => {
   return (
      <ul className={`list ${className}`}>
         {items.map(item => (
            <li key={item._id} className='list__item'>
               {item.content}
            </li>
         ))}
      </ul>
   );
};

List.propTypes = {
   items: PropTypes.arrayOf(PropTypes.object).isRequired,
   className: PropTypes.string.isRequired
};

export default List;
