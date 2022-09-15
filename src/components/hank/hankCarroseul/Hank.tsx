import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

import "./Hank.css";

const option = [ 
  {
    'id': 1,
    'empresa': 'Albuguerque e cia',
    'logo': 'https://i.imgur.com/fmiK0RV.png'
  },
  {
    'id': 2,
    'empresa':  'Criativas',
    'logo': 'https://i.imgur.com/EN50g7h.png'
  },
  {
    'id': 3,
    'empresa': 'Arco novo',
    'logo': 'https://i.imgur.com/ZeJSZ6f.png'
  },
  {
    'id': 4,
    'empresa':'NormLine',
    'logo': 'https://i.imgur.com/fD6UPCW.png'
  },
  {
    'id': 5,
    'empresa': 'Pense S.A',
    'logo': 'https://i.imgur.com/JeJ7sDh.png'
  },
  {
    'id': 6,
    'empresa': 'Faustino',
    'logo': 'https://i.imgur.com/VJkZPZ9.png'
  },
  {
    'id': 7,
    'empresa': 'A&B',
    'logo': 'https://i.imgur.com/W3dm19N.png'
  },
  {
    'id': 8,
    'empresa': 'Banco Ditiae',
    'logo': 'https://i.imgur.com/rdKSQ2L.png'
  },
  {
    'id': 9,
    'empresa': 'Lázaro Ribeiro',
    'logo': 'https://i.imgur.com/Q2P9ZON.png'
  },
  {
    'id': 10,
    'empresa':  'Lobo',
    'logo': 'https://i.imgur.com/6I0HYD6.png',
  }
]



function Hank() {
  return (
    <>
      {option.map((opcoes)=>(
      <div className="box-hank" key={opcoes.id}>
        <img
          src={opcoes.logo}
          alt=""
        />
        <Typography variant="subtitle1" className="title-hank">
          {opcoes.empresa}
        </Typography>

        <Box className="star">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </Box>
      </div>
      ))
       
      }
    </>
  );
}

export default Hank;
