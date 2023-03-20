import "./navBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{color: "inherit", textDecoration: "none"  }}>
        <span className="logo">Asuntour</span>
        </Link>
        <div className="navItems">
          <button className="navButton">register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
