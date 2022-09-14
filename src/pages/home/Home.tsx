import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Home.css'


import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado!");
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="container">
          <Grid direction="row" className='hank'>
            <Typography className='title'>
            <TrendingUpIcon className='upicon' /> Melhores Empresas
            </Typography>

            <Grid direction='row'>
              <Box className='box-hank'> 
                {/* <img src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
                <Typography>
                Albuquerque e cia
                </Typography>

              </Box>
              <Box className='box-hank'> </Box>
              <Box className='box-hank'> </Box>
            </Grid>
          </Grid>

        </div>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo-h3"
            >
              Seja bem-vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo-h5"
            >
              Compartilhe suas experiências.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/postagens" className="text-decorator-none">
              <Button variant="outlined" className="btn">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/SynMmr9.png"
            alt=""
            width="600px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;