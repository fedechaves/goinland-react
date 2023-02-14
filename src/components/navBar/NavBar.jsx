import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Asuntour</span>
        <div className="navItems">
          <button className="navButton">register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
