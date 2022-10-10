import NavBar from "../Blocks/NavBar";

const Header = () => {
   const items = [
      { _id: "/shop", content: "Shop" },
      { _id: "/blog", content: "Blog" },
      { _id: "/contact", content: "Contact" },
      { _id: "/about", content: "About Us" }
   ];

   return (
      <header className='header'>
         <NavBar logo='./images/logo.jpg' items={items} />
      </header>
   );
};

export default Header;
