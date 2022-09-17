import { ChangeEvent, useEffect, useState } from "react"
import "./Login.css"
import { Grid, TextField, Typography, Button, GridList } from "@material-ui/core"
import { Box } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import UserLogin from "../../models/UserLogin"
import { login } from "../../services/Service"
import { addToken } from "../../store/tokens/actions"

function Login() {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [token, setToken] = useState("")

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token))
      navigate("/home")
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await login(`/usuarios/logar`, userLogin, setToken)
      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } catch (error) {
      toast.error("Usuário não existe. Erro ao logar!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  return (
    <div className="grid-login">
      <div
        className="grid-logo">

        <Box className="logo">
          <img src="https://i.imgur.com/URiYwTB.png" alt="" />
          <Typography align="inherit">
            Compartilhe suas experiências.
          </Typography>
          <Typography align="inherit">
            Dê voz às minorias no FalaMemo
          </Typography>
        </Box>

      </div>


      <div className="boxLogin" >
        <div className="rectangle">
          <form onSubmit={onSubmit}>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              className="input"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              className="input"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="btnEntrar">
                Entrar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2} marginBottom={4}>
            <Link to="/" className="text-decoretor-none">
              <Typography variant="subtitle1" gutterBottom align="center" className="link-senha">
                Esqueceu a senha?
              </Typography>
            </Link>
          </Box>
          <Link to="/cadastro" className="text-decoretor-none">
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              className="btnCadastrar"
            >
              Crie uma conta
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
