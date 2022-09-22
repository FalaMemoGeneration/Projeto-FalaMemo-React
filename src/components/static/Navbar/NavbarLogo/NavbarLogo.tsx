import { AppBar, Toolbar } from "@material-ui/core"
import { Link } from "react-router-dom"
import './NavbarLogo.css'

function NavbarLogo() {

  return (
    <AppBar position="static" className="nav-color">
      <Toolbar className="navbarlogo-position">
        <Toolbar className="navbar-img-position">
          <Link to="/login">
          <img src="https://i.imgur.com/2XHo3mY.png" />
          </Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarLogo
