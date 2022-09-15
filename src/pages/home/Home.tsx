import React, { useEffect } from "react"
import "./Home.css"
import { Button, Grid, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import StarIcon from "@material-ui/icons/Star"
import StarHalfIcon from "@material-ui/icons/StarHalf"
import Avatar from "@mui/material/Avatar"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem"
import { TokenState } from "../../store/tokens/tokensReducer"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import { toast } from "react-toastify"

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
              <Box className="box-hank">
                <img src="https://images.pexels.com/photos/2467277/pexels-photo-2467277.png?auto=compress&cs=tinysrgb&w=600" alt="" />
                <Typography
                  variant="subtitle1"
                  className="title-hank">
                  Kiss
                </Typography>

                <Box className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Box>
              </Box>

              <Box className="box-hank">
                <img src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <Typography
                  variant="subtitle1"
                  className="title-hank">
                  Albuquerque e cia
                </Typography>

                <Box className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Box>
              </Box>
              <Box className="box-hank">
                <img src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <Typography
                  variant="subtitle1"
                  className="title-hank">
                  #Slack
                </Typography>

                <Box className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Box>
              </Box>
              <Box className="box-hank">
                <img src="https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <Typography
                  variant="subtitle1"
                  className="title-hank">
                  Alphabet
                </Typography>

                <Box className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Box>
              </Box>

              <Box className="box-hank">
                <img src="https://images.pexels.com/photos/9843280/pexels-photo-9843280.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <Typography
                  variant="subtitle1"
                  className="title-hank">
                  Bergerson
                </Typography>

                <Box className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Box>
              </Box>
            </div>

            <div className="div-veja">
              <Button variant="contained" className="btnVeja">
                Veja mais empresas
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

        </div>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo-h3">
              Seja bem-vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo-h5">
              Compartilhe suas experiências.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/postagens" className="text-decorator-none">
              <Button variant="outlined" className="btn">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/SynMmr9.png"
            alt=""
            width="600px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home