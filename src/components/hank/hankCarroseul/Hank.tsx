import { Box, Typography } from "@mui/material";


import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

import "./Hank.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const empresas = [
  {
    "id":1  ,
    "empresa": "Alburquerque e cia" ,
    "foto":"https://i.imgur.com/fmiK0RV.png"
  },
  {
    "id": 2,
    "empresa": "Criativas" ,
    "foto":"https://i.imgur.com/EN50g7h.png"
  },
  {
    "id": 3,
    "empresa":"Arco novo consultoria",
    "foto":"https://i.imgur.com/ZeJSZ6f.png"
  },
  {
    "id": 4,
    "empresa":"Pense S.A",
    "foto":"https://i.imgur.com/JeJ7sDh.png"
  },
  {
    "id": 5,
    "empresa":"Normline",
    "foto":"https://i.imgur.com/fD6UPCW.png" ,
  },
  {
    "id": 6,
    "empresa":"Faustino",
    "foto":"https://i.imgur.com/VJkZPZ9.png" ,
  },
  {
    "id": 7,
    "empresa": "A&B" ,
    "foto":"https://i.imgur.com/W3dm19N.png"
  },
  {
    "id": 8,
    "empresa":"Banco Ditiae" ,
    "foto":"https://i.imgur.com/rdKSQ2L.png" ,
  },
  {
    "id": 9,
    "empresa":"Làzaro Ribeiro" ,
    "foto":"https://i.imgur.com/Q2P9ZON.png" ,
  },
  {
    "id":10 ,
    "empresa":"Lobo" ,
    "foto":"https://i.imgur.com/6I0HYD6.png" ,
  },
]

function Hank() {
  return (
    <>
      <Swiper 
        slidesPerView={4}
         spaceBetween={30}
         loop={true}
         pagination={{
             clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper"
      >

        {
          empresas.map((option) => (
            <SwiperSlide>
              <div className="slide">
              <div className="box-hank" key={option.id}>
                <img
                  src={option.foto}
                  alt=""
                />
                <Typography variant="subtitle1" className="title-hank">
                  {option.empresa}
                </Typography>

                <Box className="star">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                </Box>
              </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}

export default Hank;
