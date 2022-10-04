const Grid = ({ cols, children }) => {
   return <div className={"grid grid--" + cols}>{children}</div>;
};

export default Grid;
