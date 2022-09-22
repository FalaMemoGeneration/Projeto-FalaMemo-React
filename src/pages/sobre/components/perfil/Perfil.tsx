import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import FotoAmanda from "../../../../assets/imagens/amanda.jpeg";
import FotoPaj from "../../../../assets/imagens/fernando.jpeg";
import FotoFilipe from "../../../../assets/imagens/filipe.jpeg";
import FotoIngrid from "../../../../assets/imagens/ingrid.jpeg";
import FotoJeff from "../../../../assets/imagens/jeff.jpeg";
import FotoMaria from "../../../../assets/imagens/maria.jpeg";
import FotoVictoria from "../../../../assets/imagens/victoria.jpeg";

import "./Perfil.css";

const colaboradores = [
  {
    id: 1,
    indentificador: "impar",
    nome: "Amanda Falcão",
    texto:
      " Pós-graduada em Língua Inglesa, mas em transição de carreira para a área de Tecnologia, interessada por UI/UX. Formada no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoAmanda}`,
    linkedln: "https://www.linkedin.com/in/amdfd/",
    github: "https://github.com/amdfd",
  },
  {
    id: 2,
    indentificador: "par",
    nome: "Fernando Pajtak",
    texto:
      "Apaixonado por música e jogos do gênero MOBA. Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoPaj}`,
    linkedln: "https://www.linkedin.com/in/fernando-pajtak-barbosa-557279231/",
    github: "https://github.com/pajtakk",
  },
  {
    id: 3,
    indentificador: "impar",
    nome: "Filipe Cavalcanti",
    texto:
      "Graduado em RH, mas em transição de carreira para a área de Tecnologia, apaixonado por jogos do gênero RPG.  Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoFilipe}`,
    linkedln: "https://www.linkedin.com/in/filipecavalcantideandrade/",
    github: "https://github.com/filipecavalcantideandrade",
  },
  {
    id: 4,
    indentificador: "par",
    nome: "Ingrid Aquino",
    texto:
      "Certificada pela Brasscom, onde aprimorei mais o meu interesse pela tecnlologia. Formada no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoIngrid}`,
    linkedln: "https://www.linkedin.com/in/ingrid-aquino-88a8b9147",
    github: "https://github.com/Ingridaquino",
  },
  {
    id: 5,
    indentificador: "impar",
    nome: "Jefferson Rocha",
    texto:
      "Graduado em RH, mas em transição de carreira para a área de Tecnologia, apaixonado por jogos do gênero RPG.  Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoJeff}`,
    linkedln: "https://www.linkedin.com/in/filipecavalcantideandrade/",
    github: "https://github.com/filipecavalcantideandrade",
  },
  {
    id: 6,
    indentificador: "par",
    nome: "Filipe Cavalcanti",
    texto:
      "Graduado em RH, mas em transição de carreira para a área de Tecnologia, apaixonado por jogos do gênero RPG.  Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoMaria}`,
    linkedln: "https://www.linkedin.com/in/filipecavalcantideandrade/",
    github: "https://github.com/filipecavalcantideandrade",
  },
  {
    id: 7,
    indentificador: "impar",
    nome: "Filipe Cavalcanti",
    texto:
      "Graduado em RH, mas em transição de carreira para a área de Tecnologia, apaixonado por jogos do gênero RPG.  Formado no Bootcamp da Generation Brasil de Pessoa Desenvolvedora Web Java (Full Stack).",
    foto: `${FotoVictoria}`,
    linkedln: "https://www.linkedin.com/in/filipecavalcantideandrade/",
    github: "https://github.com/filipecavalcantideandrade",
  },

];



function Perfil() {
  return (
    <div className="container-perfil">
      {colaboradores.map((perfil) => (
        <Box className="box-perfil" key={perfil.id}>  

          {perfil.indentificador !== "par"  ?
            <>              
              <Box className="img-perfil" >
                <img src={perfil.foto} alt={perfil.nome} />
              </Box> 
            </>
        : null }

          <Box className="descricao-perfil">
            <Typography variant="h4" className="nome">
              {perfil.nome}
            </Typography>

            <Typography component="p" className="pitch">
              {perfil.texto}
            </Typography>

            <Box className="redesocial">
              <a href={perfil.linkedln}>
                <LinkedInIcon className="icon" />
              </a>

              <a href={perfil.github}>
                <GitHubIcon className="icon" />
              </a>
            </Box>
          </Box>

          {perfil.indentificador !== "impar"?
             <>
               <Box className="img-impar" >
               <span className="after-caixa"></span>
                 <img src={perfil.foto} alt={perfil.nome} />
               </Box> 
             </>
        : null }
        </Box>
      ))}
    </div>
  );
}

export default Perfil;
