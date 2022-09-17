import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Tema from "../../../models/Tema"
import { buscaId, deleteId } from "../../../services/Service"
import { TokenState } from "../../../store/tokens/tokensReducer"
import './DeletarTema.css'

function DeletarTema() {

  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  })

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      navigate("/login")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    })
  }

  function sim() {
    navigate("/temas")
    deleteId(`/temas/${id}`, {
      headers: {
        "Authorization": token
      }
    })
    toast.success("Empresa deletada com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  function nao() {
    navigate("/temas")
  }

  return (
    <>
      <Box m={2} className="publi">
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom variant="h5" className="deletar-h5">
                Deseja deletar a empresa?
              </Typography>
              <Typography color="textSecondary">
              <span className="span-deletar">Empresa: </span>{tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft btnCancelar" color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" color="secondary" className="btnCancelar2 marginRight">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
        <img src="https://i.imgur.com/FQPvqDN.png" alt="" />
      </Box>
    </>
  )
}
export default DeletarTema