import {
  makeStyles,
  Theme,
  createStyles,
  alpha,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../../../store/tokens/tokensReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);

function NavbarLogo() {
  const classes = useStyles();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let navbarComponent;

  if (token == "") {
    navbarComponent = (
      <div className={classes.root}>
        <AppBar position="static" className="nav-color">
          <Toolbar>
            <Toolbar>
              <Link to="/home">
                <img src="https://i.imgur.com/2XHo3mY.png" />
              </Link>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavbarLogo;
