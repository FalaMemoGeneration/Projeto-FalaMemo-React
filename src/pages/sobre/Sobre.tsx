import React from "react"
import "./Sobre.css"
import { Box, Grid } from "@mui/material"
import { Typography } from "@material-ui/core"
import EmailIcon from "@mui/icons-material/EmailOutlined"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

function Sobre() {
  return (
    <Grid>
      <Grid container className="sobre-container">
        <Grid
          alignItems="flex-start"
          justifyContent="flex-start"
          item xs={6}
          padding={4}>
          <Box>
            <Typography className="sobre-title" variant="h6">Sobre o FalaMemo</Typography>
          </Box>
          <Box>
            <Typography className="sobre-conteudo">
              <p>O FalaMemo é uma rede social que tem como base a ODS 16 da ONU que tem como uma de suas metas garantir a tomada de decisão responsiva, inclusiva, participativa e representativa em todos os níveis (indicadores 16.7.1 e 16.7.2), portanto é um tema que impacta as minorias no mercado de trabalho e tem por consequências a exclusão ou dificuldade de acesso destas minorias à oportunidades  justas e respeitosas.</p>
              <p>ODS (Objetivo de Desenvolvimento Sustentável) da ONU são objetivos e metas integrados que abrangem as três dimensões do desenvolvimento sustentável - social, ambiental e econômica - e podem ser colocados em prática por governos, sociedade civil, setor privado e por cada cidadão comprometido com as gerações futuras.</p>
              <p>Escolhemos a rede social, pois queremos dar voz às minorias para que elas possam compartilhar suas experiências positivas ou negativas no mercado de trabalho e interagir com outras pessoas que passaram por situações similares, criando uma rede de apoio. Desta forma, conseguiremos saber se as empresas, tanto públicas quanto privadas estão sendo inclusivas ou não por meio do feedback dos funcionários, e isso faz com que ao procurar uma vaga de emprego, a pessoa consiga perceber se aquela empresa é realmente a ideal para ela ou não.</p>
              <p>O FalaMemo permite que o usuário faça seu cadastro no site e, caso faça parte de um grupo de minorias, escreva sobre sua experiência em determinada empresa adicionando informações como cargo, salário, avaliação (nota) e por quanto tempo trabalhou lá. Caso o usuário não faça parte de um grupo de minorias, ele pode realizar o cadastro, mas só poderá visualizar as experiências que foram compartilhadas por minorias. Além disso, também é possível interagir com outros usuários por meio de comentários e reações às postagens.</p>
            </Typography>
          </Box>
        </Grid>
        <Grid
          alignItems="center"
          justifyContent="center"
          item xs={6}
          padding={4}>
          <Box className="sobre-imagem">
          </Box>
        </Grid>
        <Grid container padding={3}>
          <Grid xs={3}></Grid>
          <Grid justifyContent="center" xs={3}>
            <Box
              paddingX={5}
              className="img-Amanda">
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Amanda Falcão</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Pós-graduada em Letras, mas em transição de carreira para a área de Tecnologia. Formada no bootcamp da Generation Brasil, interessada em Desenvolvimento Web, UI/UX e jogos de simulação.
              </Typography>
            </Box>
            <Box>
              <Typography className="sobre-integrante">
                <a
                  href="https://www.linkedin.com/in/amdfd/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /> LinkedIn </a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/amdfd"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>

              <Typography className="sobre-integrante"><a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container className="sobre-background" padding={3}>
          <Grid xs={3}></Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Fernando Pajtak</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum.
              </Typography>
            </Box>
            <Box>

              <Typography className="sobre-integrante"><a
                href="https://www.linkedin.com/in/fernando-pajtak-barbosa-557279231/"
                target="_blank"
                className="sobre-icons"><LinkedInIcon /> LinkedIn</a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/pajtakk"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>

              <Typography className="sobre-integrante"><a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box
              paddingRight={5}
              className="img-Fernando">
            </Box>
          </Grid>
        </Grid>
        <Grid container padding={3}>
          <Grid xs={3}></Grid>
          <Grid justifyContent="center" xs={3}>
            <Box
              paddingX={5}
              className="img-Filipe">
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Filipe Cavalcanti</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum.
              </Typography>
            </Box>
            <Box>

              <Typography className="sobre-integrante"><a
                href="https://www.linkedin.com/in/filipecavalcantideandrade/"
                target="_blank"
                className="sobre-icons">
                <LinkedInIcon /> LinkedIn</a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/filipe-cavalcanti"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>


              <Typography className="sobre-integrante"> <a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>

            </Box>
          </Grid>
        </Grid>
        <Grid container className="sobre-background" padding={3}>
          <Grid xs={3}></Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Ingrid Aquino</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum.
              </Typography>
            </Box>
            <Box>

              <Typography className="sobre-integrante"><a
                href="https://www.linkedin.com/in/ingrid-aquino-88a8b9147/"
                target="_blank"
                className="sobre-icons"><LinkedInIcon /> LinkedIn</a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/Ingridaquino"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>

              <Typography className="sobre-integrante"><a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>

            </Box>
          </Grid>
          <Grid xs={3}>
            <Box
              paddingRight={5}
              className="img-Ingrid">
            </Box>
          </Grid>
        </Grid>
        <Grid container padding={3}>
          <Grid xs={3}></Grid>
          <Grid justifyContent="center" xs={3}>
            <Box
              paddingX={5}
              className="img-Jeff">
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Jefferson Rocha</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Sou Jefferson, tenho 30 anos, adoro gatos e sou estudante na area de tecnologia.
              </Typography>
            </Box>
            <Box>

              <Typography className="sobre-integrante"><a
                href="https://www.linkedin.com/in/jefferson-rocha-335494211/"
                target="_blank"
                className="sobre-icons">
                <LinkedInIcon /> LinkedIn</a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/jefftrabalho"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>

              <Typography className="sobre-integrante"><a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>

            </Box>
          </Grid>
        </Grid>
        <Grid container className="sobre-background" padding={3}>
          <Grid xs={3}></Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Mariá Dombrate</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper blandit tempor. Duis tincidunt turpis in eros semper bibendum.
              </Typography>
            </Box>
            <Box>

              <Typography className="sobre-integrante"><a
                href="https://www.linkedin.com/in/mari%C3%A1-calmon-dombrate/"
                target="_blank"
                className="sobre-icons"><LinkedInIcon /> LinkedIn</a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/dombrate"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>

              <Typography className="sobre-integrante"><a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>

            </Box>
          </Grid>
          <Grid xs={3}>
            <Box
              paddingRight={5}
              className="img-Maria">
            </Box>
          </Grid>
        </Grid>
        <Grid container padding={3}>
          <Grid xs={3}></Grid>
          <Grid justifyContent="center" xs={3}>
            <Box
              paddingX={5}
              className="img-Victoria">
            </Box>
          </Grid>
          <Grid xs={3}>
            <Box paddingRight={2}>
              <Typography className="nome-integrante">Victoria Alcoforado</Typography>
            </Box>
            <Box paddingRight={2}>
              <Typography className="sobre-integrante">
                Formada em Arquitetura e Urbanismo, mas em transição de carreira para área de tecnologia através do bootcamp da Generation de Pessoa Desenvolvedora Web Java Full Stack.
              </Typography>
            </Box>
            <Box>

              <Typography className="sobre-integrante"><a
                href="https://www.linkedin.com/in/victoriaalcoforado/"
                target="_blank"
                className="sobre-icons">
                <LinkedInIcon /> LinkedIn</a></Typography>

              <Typography className="sobre-integrante"><a
                href="https://github.com/vickw3"
                target="_blank"
                className="sobre-icons">
                <GitHubIcon /> GitHub</a></Typography>

              <Typography className="sobre-integrante"><a
                href="mailto:falamemogeneration@gmail.com"
                target="_blank"
                className="sobre-icons">
                <EmailIcon /> Email</a></Typography>

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Sobre