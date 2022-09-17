import React from "react"
import "./Footer.css"
import { Grid, Box, Typography } from "@mui/material"
import EmailIcon from "@mui/icons-material/EmailOutlined"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookIcon from "@mui/icons-material/Facebook"
import { Link } from "react-router-dom"

function Footer() {

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        className="footer-container">

        <Grid
          paddingY={7}
          item xs={3}>
          <Box>
            <Link to="/login"><img src="https://i.imgur.com/2XHo3mY.png" alt="Logo falaMemo" /></Link>
          </Box>
          <Box
          marginLeft={2}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className="text-style"
              paddingY={13}
              paddingBottom={1}>
              FalaMemo © 2022: <a target="_blank" href="https://brasil.generation.org/" className="text-decorator-none">Generation Brasil</a>
            </Typography>
          </Box>
        </Grid>

        <Grid
          item xs={3}>
          <Box>
            <Typography className="text-title" paddingY={7} paddingBottom={1}>
              FalaMemo
            </Typography>
          </Box>
          <Link to="/sobre" className="text-decorator-none">
            <Box>
              <Typography className="text-style" paddingY={3}>
                Sobre
              </Typography>
            </Box>
          </Link>
          <Box>
            <Link to="/faleConosco" className="text-decorator-none">
              <Box>
                <Typography className="text-style">
                  Fale Conosco
                </Typography>
              </Box>
            </Link>
            <Box>
              <a href="mailto:falamemogeneration@gmail.com" target="_blank" className="icons" >
                <EmailIcon /></a>
              <a href="https://github.com/FalaMemoGeneration" target="_blank" className="icons" >
                <GitHubIcon /></a>
              <a href="https://www.facebook.com" target="_blank" className="icons" >
                <FacebookIcon /></a>
            </Box>
          </Box>
        </Grid>

        <Grid
          item xs={3}>
          <Box>
            <Typography className="text-title" paddingY={7} paddingBottom={1}>
              Informações
            </Typography>
          </Box>
          <Link to="/regras" className="text-decorator-none">
            <Box>
              <Typography className="text-style" paddingY={3}>
                Regras da Comunidade
              </Typography>
            </Box>
          </Link>
          <Link to="/termos" className="text-decorator-none">
            <Box>
              <Typography className="text-style">
                Termos de Uso
              </Typography>
            </Box>
          </Link>
        </Grid>

      </Grid>
    </>
  )
}

export default Footer