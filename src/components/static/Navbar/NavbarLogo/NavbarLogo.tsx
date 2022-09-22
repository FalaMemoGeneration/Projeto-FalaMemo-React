import { AppBar, Toolbar } from "@material-ui/core"
import { useSelector } from "react-redux"
import { TokenState } from "../../../../store/tokens/tokensReducer"

function NavbarLogo() {

  return (
    <AppBar position="static" className="nav-color">
      <Toolbar>
        <Toolbar>
          <img src="https://i.imgur.com/2XHo3mY.png" />
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarLogo
