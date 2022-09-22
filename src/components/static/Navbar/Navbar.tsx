import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TokenState } from "../../../store/tokens/tokensReducer";
import BasicMenu from "./Menu/Menu";
import NavbarLogo from "./NavbarLogo/NavbarLogo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(0),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(2),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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

function Navbar() {
  const classes = useStyles();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  return token? (
      <div className={classes.root}>
        <AppBar position="static" className="nav-color">
          <Toolbar className="tool-home">
            <Toolbar className="logo-home">
              <Link to="/home">
                <img src="https://i.imgur.com/2XHo3mY.png" />
              </Link>
            </Toolbar>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon className="nav-search-icon" />
              </div>
              <InputBase
                className="search-color-border"
                placeholder="Buscar empresas"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Avatar
              alt=""
              src="https://i.imgur.com/6OvsYjP.png"
              className="nav-avatar"
            />
            <BasicMenu />
          </Toolbar>
        </AppBar>
      </div>
    ) :  // else
    (
        <NavbarLogo />
    ) }

export default Navbar;
