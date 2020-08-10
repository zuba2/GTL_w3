import Head from "next/head";

const Header = () => {
  return(
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Search"/>
     </div>
    </header>
  );
}

export default Header;