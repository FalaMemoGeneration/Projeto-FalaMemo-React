import "./Menu.css";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../../../../store/tokens/actions";

export default function BasicMenu() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function changeClick() {
    handleClose();
    goLogout();
  }

  function goLogout() {
    dispatch(addToken(""));
    alert("Você saiu!");
    navigate("/login");
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/home" className="text-decorator-none">
            Home
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/postagens" className="text-decorator-none">
            Experiências
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/temas" className="text-decorator-none">
            Empresas
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/formularioTema" className="text-decorator-none">
            Cadastrar empresa
          </Link>
        </MenuItem>

        <MenuItem onClick={changeClick}>Sair</MenuItem>
      </Menu>
    </div>
  );
}
