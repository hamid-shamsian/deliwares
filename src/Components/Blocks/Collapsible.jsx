const Collapsible = ({ title, children, className }) => {
   return (
      <section className={"collapsible " + className}>
         <header
            className='collapsible__header'
            onClick={e =>
               e.target
                  .closest(".collapsible")
                  .classList.toggle("collapsible--expanded")
            }
         >
            <h4 className='collapsible__heading'>{title}</h4>
            <img
               className='icon icon--white collapsible__chevron'
               src='/images/chevron.svg'
               alt=''
            />
         </header>
         <div className='collapsible__content'>{children}</div>
      </section>
   );
};

export default Collapsible;
