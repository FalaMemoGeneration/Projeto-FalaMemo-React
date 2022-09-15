import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import User from "../../models/User"
import { cadastroUsuario } from "../../services/Service"
import "./CadastroUsuario.css"

function CadastroUsuario() {
  let navigate = useNavigate()
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    genero: "",
    orientacao: "",
    pcd: false,
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    genero: "",
    orientacao: "",
    pcd: false,
  })

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login")
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.senha && user.senha.length >= 8) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      toast.success("Usuário cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.error("Dados incorretos. Favor verificar as informações de cadastro!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      setUser({ ...user, senha: "" })
      setConfirmarSenha("")
    }
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" className="cadastro-container">
      <Grid item xs={2}></Grid>
      <Typography
        variant="h3"
        gutterBottom
        color={"textPrimary"}
        component="h3"
        align="center"
        className="cadastro-h3"
      >
        Cadastrar
      </Typography>

      <Grid item xs={6} alignItems="center" className="cadastro-grid">

        <Box>
          <form onSubmit={onSubmit} className="cadastro-form">
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome*"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Email*"
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
              label="Senha*"
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
              label="Confirmar senha*"
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
              label="Url da foto"
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
              label="Gênero"
              variant="outlined"
              name="genero"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.orientacao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="orientacao"
              label="Orientação"
              variant="outlined"
              name="orientacao"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.pcd}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="pcd"
              label="Pessoa com deficiência?"
              variant="outlined"
              name="pcd"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="btnCadastrar2">
                Cadastrar
              </Button>
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CadastroUsuario
