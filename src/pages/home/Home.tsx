import React, { useEffect } from "react"
import "./Home.css"
import { Button, Grid, Typography } from "@material-ui/core"

import Avatar from "@mui/material/Avatar"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

import { TokenState } from "../../store/tokens/tokensReducer"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import { toast } from "react-toastify"
import Hank from "../../components/hank/hankCarroseul/Hank"
import ContainerPost from "../../components/publicacao/containerPost/ContainerPost"




function Home() {
  let navigate = useNavigate()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado!', {
        position: 'top-right',
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
  
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="container">
          <Grid direction="row" className="hank" xs={12}>
            <Typography className="title">
              <TrendingUpIcon className="upicon" /> Melhores Empresas
            </Typography>

            <div className="container-hank">
              <Hank />
            </div>

            <div className="div-veja">
              <Button variant="contained" className="btnVeja">
                <Link to ="/temas" className="text-decorator-none cor-link">Veja mais empresas</Link>
              </Button>
            </div>
          </Grid>

          <div className="campo-text">
            <div>
              <Avatar
                src="https://i.imgur.com/6OvsYjP.png"
                className="avatar-home"
              />
            </div>

            <div>
              <ModalPostagem />
            </div>
          </div>

          <div>
            <ContainerPost />
          </div>
  
        </div>
      </Grid>
    </>
  )
}

export default Home