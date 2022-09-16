import React from "react"
import "./Sobre.css"
import { Box, Grid } from "@mui/material"
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
      <Grid direction="row" container className="sobre-container">
        <Grid
          item xs={6}
          padding={3}>
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
          xs={6}
          padding={3}>
          <Box>
            <img src={ODS16} alt="Logo falaMemo" width={400} />
          </Box>
        </Grid>

        {/* Perfil Amanda */}

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoAmanda} alt="Foto Amanda Falcão" />
          </Box>
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Amanda Falcão</Typography>
            <Typography className="sobre-integrante">
              Pós-graduada em Letras, mas em transição de carreira para a área de Tecnologia. Formada no bootcamp da Generation Brasil, interessada em Desenvolvimento Web, UI/UX e jogos de simulação.
            </Typography>
          </Box>

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
        </Grid>

        {/* Perfil Paj */}

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Fernando Pajtak</Typography>
            <Typography className="sobre-integrante">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nemo ab facilis? Consequatur, eius ullam fugiat consequuntur dignissimos, minus eligendi quaerat accusantium dolor non accusamus atque rerum, deserunt magni cum!
            </Typography>
          </Box>

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
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoPaj} alt="Foto Fernando Pajtak" />
          </Box>
        </Grid>

        {/* Perfil Filipe */}

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoFilipe} alt="Foto Filipe Cavalcanti" />
          </Box>
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Filipe Cavalcanti</Typography>
            <Typography className="sobre-integrante">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, aliquam rem natus nesciunt nobis iste aliquid dolore quod provident reiciendis ducimus magnam mollitia quidem possimus in labore doloribus molestiae ea!
            </Typography>
          </Box>

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
        </Grid>

        {/* Perfil Ingrid */}

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Ingrid Aquino</Typography>
            <Typography className="sobre-integrante">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nemo ab facilis? Consequatur, eius ullam fugiat consequuntur dignissimos, minus eligendi quaerat accusantium dolor non accusamus atque rerum, deserunt magni cum!
            </Typography>
          </Box>

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
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoIngrid} alt="Foto Ingrid Aquino" />
          </Box>
        </Grid>

        {/* Perfil Jeff */}

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoJeff} alt="Foto Jefferson Rocha" />
          </Box>
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Jefferson Rocha</Typography>
            <Typography className="sobre-integrante">
              Sou Jefferson, tenho 30 anos, adoro gatos e sou estudante na area de tecnologia.
            </Typography>
          </Box>

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
        </Grid>

        {/* Perfil Maria */}

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Mariá Dombrate</Typography>
            <Typography className="sobre-integrante">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nemo ab facilis? Consequatur, eius ullam fugiat consequuntur dignissimos, minus eligendi quaerat accusantium dolor non accusamus atque rerum, deserunt magni cum!
            </Typography>
          </Box>

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
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoMaria} alt="Foto Mariá Dombrate" />
          </Box>
        </Grid>

        {/* Perfil Victoria */}

        <Grid xs={6} padding={3}>
          <Box>
            <img className="img" src={FotoVictoria} alt="Foto Victoria Alcoforado" />
          </Box>
        </Grid>

        <Grid xs={6} padding={3}>
          <Box>
            <Typography className="nome-integrante">Victoria Alcoforado</Typography>
            <Typography className="sobre-integrante">
              Sou Jefferson, tenho 30 anos, adoro gatos e sou estudante na area de tecnologia.
            </Typography>
          </Box>

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
        </Grid>

      </Grid>
    </>
  )
}

export default Sobre