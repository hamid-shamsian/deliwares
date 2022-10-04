const Block = ({ header, children }) => {
   return (
      <>
         <section className='block container'>
            <header className='block__header'>
               <h2 className='block__heading'>{header.title}</h2>
               <p>{header.tagLine}</p>
            </header>
            {children}
         </section>

         {/* <section className='block block--dark block--polygon'>
            <div className='container'>
               <h2 className='block__heading'>Heading</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia quis id officiis architecto amet deserunt ex
                  cupiditate labore soluta neque?
               </p>
            </div>
         </section> */}
      </>
   );
};

export default Block;
