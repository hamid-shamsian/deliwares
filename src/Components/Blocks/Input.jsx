//
const Input = ({ name, label, error, ...rest }) => {
   return (
      <div className=''>
         {label && <label htmlFor={name}>{label}</label>}
         <input className='input' id={name} name={name} {...rest} />
         {error && <div className=''>{error}</div>}
      </div>
   );
};

export default Input;
