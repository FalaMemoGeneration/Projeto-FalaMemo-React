import { AppBar, Toolbar } from "@material-ui/core"
import { useSelector } from "react-redux"
import { TokenState } from "../../../../store/tokens/tokensReducer"

function NavbarLogo() {

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  let navbarLogoComponent
  if (token === "") {
    <div >
      <AppBar position="static" className="nav-color">
        <Toolbar>
          <Toolbar>
            <img src="https://i.imgur.com/2XHo3mY.png" />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  }

  return (
    <>
      {navbarLogoComponent}
    </>
  )
}

export default NavbarLogo
