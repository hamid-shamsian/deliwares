const InputGroup = () => {
   return (
      <div className='input-group'>
         <input
            type='text'
            className='input'
            placeholder='Enter Your Name Here...'
         />
         <button className='btn btn--accent'>Search</button>
      </div>
   );
};

export default InputGroup;
