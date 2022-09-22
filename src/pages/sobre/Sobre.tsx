import React from "react";
import "./Sobre.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Typography } from "@material-ui/core";

import ODS16 from "../../assets/imagens/ODS16.jpg";
import Perfil from "./components/perfil/Perfil";

function Sobre() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="sobre-container"
    >
      <Grid className="sobre-conteudo" xs={9}>
        <Box>
          <Typography variant="h4" component="h4" className="title-sobre">
            Sobre o Fala<span className="span-memo">Memo</span>
          </Typography>
          <Box className="text-sobre">
            <p>
              O FalaMemo é uma rede social que tem como base o Objetivo de
              Desenvolvimento Sustentável 16 da ONU que visa garantir a tomada
              de decisão responsiva, inclusiva, participativa e representativa
              em todos os níveis (indicadores 16.7.1 e 16.7.2), portanto é um
              tema que impacta as minorias no mercado de trabalho e tem por
              consequências a exclusão ou dificuldade de acesso destas minorias
              à oportunidades justas e respeitosas. Por esse motivo, o FalaMemo
              permite que o usuário faça seu cadastro no site e escreva sobre
              sua experiência em determinada empresa adicionando informações
              como cargo, experiência e avaliação (nota). Além disso, também é
              possível interagir com outros usuários por meio de comentários e
              reações às postagens, permitindo criar uma rede de apoio para que
              todes tomem decisões informadas sobre seus locais de trabalho
              atuais ou futuros com base nas experiências de outras minorias. O
              FalaMemo é uma rede social que tem como base a ODS 16 da ONU que
              tem como uma de suas metas garantir a tomada de decisão
              responsiva, inclusiva, participativa e representativa em todos os
              níveis (indicadores 16.7.1 e 16.7.2), portanto é um tema que
              impacta as minorias no mercado de trabalho e tem por consequências
              a exclusão ou dificuldade de acesso destas minorias à
              oportunidades  justas e respeitosas.
            </p>
          </Box>
        </Box>
        <Box className="logoODS16">
          <img src={ODS16} alt="Logo falaMemo" />
        </Box>
      </Grid>

      <span className="before-perfil"></span>

      <Perfil />

      {/* Perfil Amanda */}

      {/* <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoAmanda}
              alt="Foto Amanda Falcão" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Amanda Falcão
              </Typography>
              <Typography align="justify" variant="body2">
                Pós-graduada em Língua Inglesa, mas em transição de carreira para a área de Tecnologia, interessada por UI/UX.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formada no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href=""
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href=""
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}

      {/* Perfil Paj */}

      {/* <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoPaj}
              alt="Foto Fernando Pajtak" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fernando Pajtak
              </Typography>
              <Typography align="justify" variant="body2">
                Apaixonado por música e jogos do gênero MOBA.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href="https://www.linkedin.com/in/fernando-pajtak-barbosa-557279231/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/pajtakk"
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}

      {/* Perfil Filipe */}

      {/* <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoFilipe}
              alt="Foto Filipe Cavalcanti" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Filipe Cavalcanti
              </Typography>
              <Typography align="justify" variant="body2">
                Graduado em RH, mas em transição de carreira para a área de Tecnologia, apaixonado por jogos do gênero RPG.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href="https://www.linkedin.com/in/filipecavalcantideandrade/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/filipecavalcantideandrade"
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}

      {/* Perfil Ingrid */}

      {/* <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoIngrid}
              alt="Foto Ingrid Aquino" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ingrid Aquino
              </Typography>
              <Typography align="justify" variant="body2">
                Certificada pela Brasscom, onde aprimorei mais o meu interesse pela tecnlologia.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formada no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href="https://www.linkedin.com/in/ingrid-aquino-88a8b9147/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/Ingridaquino"
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}

      {/* Perfil Jeff */}

      {/* <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoJeff}
              alt="Foto Jefferson Rocha" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jefferson Rocha
              </Typography>
              <Typography align="justify" variant="body2">
                Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por gatos.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href="https://www.linkedin.com/in/jefferson-rocha-335494211/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/jefftrabalho"
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}

      {/* Perfil Maria */}
      {/* 
        <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoMaria}
              alt="Foto Mariá Dombrate" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mariá Dombrate
              </Typography>
              <Typography align="justify" variant="body2">
                Pós-graduada em Neuropsicologia, mas em transição de carreira para a área de Tecnologia.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formada pelo Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href="https://www.linkedin.com/in/mari%C3%A1-calmon-dombrate/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/dombrate"
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}

      {/* Perfil Victoria */}

      {/* <Grid padding={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="100%"
              image={FotoVictoria}
              alt="Foto Victoria Alcoforado" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Victoria Alcoforado
              </Typography>
              <Typography align="justify" variant="body2">
                Graduada em Arquitetura e Urbanismo, mas em transição de carreira para a área da Tecnologia.
              </Typography>
              <br />
              <Typography align="justify" variant="body2">
                Formada pelo Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).
              </Typography>
              <br />
              <Box>
                <a href="https://www.linkedin.com/in/victoriaalcoforado/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/vickw3"
                  target="_blank"
                  className="sobre-icons">
                  <GitHubIcon /></a>

                <a href="mailto:falamemogeneration@gmail.com"
                  target="_blank"
                  className="sobre-icons">
                  <EmailIcon /></a>
              </Box>
            </CardContent>
          </Card>
        </Grid> */}
    </Grid>
  );
}

export default Sobre;
