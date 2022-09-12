import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    genero: "",
    orientacao: "",
    pcd: false,
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    genero: "",
    orientacao: "",
    pcd: false,
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha && user.senha.length >= 8) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuário cadastrado com sucesso");
    } else {
      alert("Dados incorretos. Favor verificar as informações de cadastro.");
      setUser({ ...user, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6}></Grid>
      <Grid item xs={6} alignItems="center">
        <Box>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color={"textPrimary"}
              component="h3"
              align="center"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="e-mail"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
              type="email"
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
              type="password"
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              fullWidth
              type="password"
            />
            <TextField
              value={user.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="foto"
              label="url da foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
              type="url"
            />

            {/*<Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="genero"
                  value={user.genero}
                  label="genero"
                  name="genero" 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                >
                  <MenuItem>Ten</MenuItem>
                  <MenuItem>Twenty</MenuItem>
                  <MenuItem>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>*/}

            <TextField
              value={user.genero}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="genero"
              label="genero"
              variant="outlined"
              name="genero"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.orientacao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="orientacao"
              label="orientacao"
              variant="outlined"
              name="orientacao"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.pcd}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="pcd"
              label="pcd"
              variant="outlined"
              name="pcd"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="botaoCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
