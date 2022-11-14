const NotFound = ({ what }) => {
   return (
      <section className='block container flex'>
         <h2 className='glassmorph shop__headings'>
            <span>Oops!</span>
            <br />
            <br />
            {what} Not Found!
         </h2>
      </section>
   );
};

export default NotFound;
