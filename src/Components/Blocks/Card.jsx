const Card = ({ name, description }) => {
   return (
      <div className='card card--secondary'>
         <header className='card__header'>
            {/* <h3 className='product__name'>{name}</h3> */}
         </header>
         <div className='card__body'>{description}</div>
      </div>
   );
};

export default Card;
