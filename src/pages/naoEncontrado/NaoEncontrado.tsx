import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './NaoEncontrado.css';

function NotFound(){
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="container">
      <Grid alignItems="center">
      <Box>
        <img src="https://i.imgur.com/0vLoHmT.png" alt="" />
      </Box>
      </Grid>
    </Grid>
  )
}

export default NotFound;