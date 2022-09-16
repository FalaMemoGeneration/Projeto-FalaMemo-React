import React from "react"
import "./Sobre.css"
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid } from "@mui/material"
import { Typography } from "@material-ui/core"
import EmailIcon from "@mui/icons-material/EmailOutlined"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import ODS16 from "../../assets/imagens/ODS16.jpg"
import FotoAmanda from "../../assets/imagens/amanda.jpeg"
import FotoPaj from "../../assets/imagens/fernando.jpeg"
import FotoFilipe from "../../assets/imagens/filipe.jpeg"
import FotoIngrid from "../../assets/imagens/ingrid.jpeg"
import FotoJeff from "../../assets/imagens/jeff.jpeg"
import FotoMaria from "../../assets/imagens/maria.jpeg"
import FotoVictoria from "../../assets/imagens/victoria.jpeg"

function Sobre() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="sobre-container">
        <Grid
          padding={3}>
          <Box className="logoODS16">
            <img src={ODS16} alt="Logo falaMemo" width={300} height={390} />
          </Box>
        </Grid>

        <Grid
          className="sobre-conteudo"
          xs={9}
          padding={3}>

          <Box>
            <Typography variant="h5">Sobre o FalaMemo</Typography>
          </Box>
          <Box>
            <Typography align="justify">
              <br />
              <p>O FalaMemo é uma rede social que tem como base a ODS 16 da ONU que tem como uma de suas metas garantir a tomada de decisão responsiva, inclusiva, participativa e representativa em todos os níveis (indicadores 16.7.1 e 16.7.2), portanto é um tema que impacta as minorias no mercado de trabalho e tem por consequências a exclusão ou dificuldade de acesso destas minorias à oportunidades  justas e respeitosas.</p>
              <br />
              <p>ODS (Objetivo de Desenvolvimento Sustentável) da ONU são objetivos e metas integrados que abrangem as três dimensões do desenvolvimento sustentável - social, ambiental e econômica - e podem ser colocados em prática por governos, sociedade civil, setor privado e por cada cidadão comprometido com as gerações futuras.</p>
              <br />
              <p>Escolhemos a rede social, pois queremos dar voz às minorias para que elas possam compartilhar suas experiências positivas ou negativas no mercado de trabalho e interagir com outras pessoas que passaram por situações similares, criando uma rede de apoio. Desta forma, conseguiremos saber se as empresas, tanto públicas quanto privadas estão sendo inclusivas ou não por meio do feedback dos funcionários, e isso faz com que ao procurar uma vaga de emprego, a pessoa consiga perceber se aquela empresa é realmente a ideal para ela ou não.</p>
              <br />
              <p>O FalaMemo permite que o usuário faça seu cadastro no site e, caso faça parte de um grupo de minorias, escreva sobre sua experiência em determinada empresa adicionando informações como cargo, salário, avaliação (nota) e por quanto tempo trabalhou lá. Caso o usuário não faça parte de um grupo de minorias, ele pode realizar o cadastro, mas só poderá visualizar as experiências que foram compartilhadas por minorias. Além disso, também é possível interagir com outros usuários por meio de comentários e reações às postagens.</p>
            </Typography>
          </Box>
        </Grid>

        {/* Perfil Amanda */}

        <Grid padding={3}>
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
                Pós-graduada em Letras, mas em transição de carreira para a área de Tecnologia. Formada no bootcamp da Generation Brasil, interessada em Desenvolvimento Web, UI/UX e jogos de simulação.
              </Typography>
              <Box>
                <a href="https://www.linkedin.com/in/amdfd/"
                  target="_blank"
                  className="sobre-icons">
                  <LinkedInIcon /></a>

                <a href="https://github.com/amdfd"
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
        </Grid>

        {/* Perfil Paj */}

        <Grid padding={3}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore magnam fugit provident minus natus exercitationem dolores iure, doloremque corporis tenetur sint eaque ut et quos, accusamus ipsum iusto qui.
              </Typography>
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
        </Grid>

        {/* Perfil Filipe */}

        <Grid padding={3}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore magnam fugit provident minus natus exercitationem dolores iure, doloremque corporis tenetur sint eaque ut et quos, accusamus ipsum iusto qui.
              </Typography>
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
        </Grid>

        {/* Perfil Ingrid */}

        <Grid padding={3}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore magnam fugit provident minus natus exercitationem dolores iure, doloremque corporis tenetur sint eaque ut et quos, accusamus ipsum iusto qui.
              </Typography>
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
        </Grid>

        {/* Perfil Jeff */}

        <Grid padding={3}>
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
                {/* Sou Jefferson, tenho 30 anos, adoro gatos e sou estudante na area de tecnologia. */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis molestiae aut ducimus doloribus ratione in optio temporibus veniam cumque et praesentium laborum, ipsum sint aliquam quo, officia sit voluptas iste?
              </Typography>
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
        </Grid>

        {/* Perfil Maria */}

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi architecto vitae, nihil odit quis veniam dolorum dolores iusto numquam omnis animi ipsum laborum corporis, alias consectetur corrupti perspiciatis laudantium?
              </Typography>
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
        </Grid>

        {/* Perfil Victoria */}

        <Grid padding={3}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi architecto vitae, nihil odit quis veniam dolorum dolores iusto numquam omnis animi ipsum laborum corporis, alias consectetur corrupti perspiciatis laudantium?
              </Typography>
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
        </Grid>

      </Grid>
    </>
  )
}

export default Sobre