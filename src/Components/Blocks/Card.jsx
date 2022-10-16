const Card = ({ heading, description }) => {
   return (
      <div className='card card--secondary'>
         <header className='card__header'>
            <h3 className='card__heading'>{heading}</h3>
         </header>
         <div className='card__body'>{description}</div>
      </div>
   );
};

export default Card;
