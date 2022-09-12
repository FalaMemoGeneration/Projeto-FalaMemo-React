import React from "react";
import "./Footer.css";
import { Grid, Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="footer-container"
      >
        <Grid alignItems="center" justifyContent="center" item xs={6}>
          <Box>
            <img
              src="https://i.imgur.com/zv4GQCP.png"
              alt=""
              width="150px"
              height=""
            />
          </Box>
        </Grid>

        <Grid alignItems="flex-start" justifyContent="flex-start" item xs={3}>
          <Box>
            <Typography className="text-title" paddingY={2}>
              FalaMemo
            </Typography>
          </Box>
          <Link to="/Sobre" className="text-decorator-none">
            <Box>
              <Typography className="text-style">Sobre </Typography>
            </Box>
          </Link>
          <Box>
            <Box>
              <Typography className="text-style">Fale Conosco </Typography>
            </Box>
            <Box>
              <a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="icons"
              >
                <EmailIcon />
              </a>
              <a
                href="https://github.com/FalaMemoGeneration"
                target="_blank"
                className="icons"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="icons"
              >
                <FacebookIcon />
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="flex-start" justifyContent="flex-start" item xs={3}>
          <Box>
            <Typography className="text-title" paddingY={2}>
              Informações
            </Typography>
          </Box>
          <Link to="/Regras" className="text-decorator-none">
            <Box>
              <Typography className="text-style">
                Regras da Comunidade
              </Typography>
            </Box>
          </Link>
          <Link to="/Termos" className="text-decorator-none">
            <Box>
              <Typography className="text-style">Termos de Uso</Typography>
            </Box>
          </Link>
        </Grid>

        <Box>
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className="text-style"
            >
              FalaMemo© 2022 Copyright:
            </Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org/">
              <Typography
                variant="subtitle2"
                gutterBottom
                align="center"
                className="text-style"
              >
                brasil.generation.org
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
