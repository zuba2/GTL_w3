const Navbar = () => {
  return(
    <nav className="navbar">
    <div className="container">
      <a href="#">Hulk</a>
      {/* <!-- Currently Active --> */}
      <a href="#" className="logo is-active">Mavel</a>
      <a href="#">Venom</a>
    </div>
  </nav>
  );
}

export default Navbar;