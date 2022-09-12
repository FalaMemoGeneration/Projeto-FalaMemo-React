import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import './Sobre.css'
import EmailIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Sobre() {
  return (
    <Grid>
      <Grid container className="sobre-container">
        <Grid alignItems="flex-start" justifyContent="flex-start" item xs={6} padding={4}>
          <Box>
            <Typography className="sobre-title" variant="h6">Sobre o FalaMemo</Typography>
          </Box>
          <Box>
            <Typography className="sobre-conteudo">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum. Praesent vel pharetra nulla. Aliquam dignissim convallis placerat. Etiam est leo, euismod eu pretium vel, dictum at diam. Nunc turpis velit, pulvinar iaculis nunc a, blandit sodales est. Aliquam erat volutpat. Ut et tempor sem. Curabitur ultrices et tortor a porta. Vestibulum accumsan at nunc ac congue.</p>
              <p>Donec tempor elit efficitur magna eleifend, at maximus dolor tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquam, ligula ac feugiat tincidunt, tellus velit viverra ex, sit amet fermentum felis nibh sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at justo diam. Nulla non ultrices massa. Nam et elit semper, interdum augue id, interdum metus. Morbi tincidunt rutrum dictum. Duis cursus imperdiet nisi a varius. Duis varius eget turpis ut pulvinar. Phasellus posuere mattis orci non lobortis. Fusce maximus, nibh vitae consequat porttitor, odio arcu consequat magna, vitae ultrices nibh elit vitae ex. Vivamus in sem neque. Integer gravida ante est, eu faucibus est cursus ut. Nulla mattis, turpis in venenatis laoreet, leo metus tristique mi, ut ullamcorper tellus tortor et mauris. Curabitur enim risus, iaculis interdum elit sed, suscipit molestie nibh.</p>
            </Typography>
          </Box>
        </Grid>
        <Grid alignItems="center" justifyContent="center" item xs={6} padding={4}>
          <Box>
            <img
              src="https://i.imgur.com/zv4GQCP.png"
              alt=""
              width="620px"
              height=""
            />
          </Box>
        </Grid>
        <Grid container padding={3}>
          <Grid xs={3}></Grid>
          <Grid justifyContent="center" xs={3}>
            <Box paddingX={5}>
              <img
                src="https://i.imgur.com/zv4GQCP.png"
                alt=""
                width="256px"
                height="257px"
              />
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Nome Integrante</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum.
              </Typography>
            </Box>
            <Box>
              <a href="https://www.facebook.com" target="_blank" className="sobre-icons">
                <LinkedInIcon />
                <Typography className="sobre-integrante">LinkedIn</Typography>
              </a>
              <a href="https://github.com/FalaMemoGeneration" target="_blank" className="sobre-icons">
                <GitHubIcon />
                <Typography className="sobre-integrante">GitHub</Typography>
              </a>
              <a href="mailto:falamemogeneration@gmail.com" target="_blank" className="sobre-icons">
                <EmailIcon />
                <Typography className="sobre-integrante">Email</Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
        <Grid container  className="sobre-background" padding={3}>
          <Grid xs={3}></Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Nome Integrante</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum.
              </Typography>
            </Box>
            <Box>
              <a href="https://www.facebook.com" target="_blank" className="sobre-icons"><LinkedInIcon />
                <Typography className="sobre-integrante">LinkedIn</Typography>
              </a>
              <a href="https://github.com/FalaMemoGeneration" target="_blank" className="sobre-icons">
                <GitHubIcon />
                <Typography className="sobre-integrante">GitHub</Typography>
              </a>
              <a href="mailto:falamemogeneration@gmail.com" target="_blank" className="sobre-icons">
                <EmailIcon />
                <Typography className="sobre-integrante">Email</Typography>
              </a>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box paddingRight={5}>
              <img
                src="https://i.imgur.com/zv4GQCP.png"
                alt=""
                width="256px"
                height="257px"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Sobre