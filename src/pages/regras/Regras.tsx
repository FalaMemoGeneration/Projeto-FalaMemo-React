import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import './Regras.css'

function Regras() {
  return (
    <Grid>
      <Grid container className='regras-container'>
        <Grid
          alignItems='flex-start'
          justifyContent='flex-start'
          item xs={12}
          padding={4}>
          <Box>
            <Typography className='regras-title' variant='h6'>Regras da Comunidade</Typography>
          </Box>
          <Box>
            <Typography className='regras-conteudo'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nisl justo. Phasellus non tincidunt justo, quis hendrerit turpis. Quisque id magna convallis, blandit nulla sit amet, pretium dolor. Nulla efficitur, neque eget dictum tempus, mauris quam fringilla lacus, nec fringilla ex massa id sem. Duis commodo vitae nibh ac elementum. Curabitur viverra sed nunc sit amet dictum. Nulla a consectetur dolor. Aenean a pretium nunc. Suspendisse suscipit lacinia purus eget rhoncus. Nulla sed libero metus. Integer ornare magna metus, vel gravida turpis imperdiet et. Vivamus condimentum lobortis bibendum. Aenean vehicula mattis lacus, eget volutpat orci fringilla tempor. Integer rhoncus justo vitae felis ultrices lobortis.</p>
              <br></br>
              <p>Suspendisse potenti. Proin tristique, sapien in laoreet condimentum, ligula metus mattis purus, ut vehicula ipsum dui in nisi. Maecenas vulputate lectus in turpis suscipit fringilla. Fusce nec iaculis massa. Integer aliquam bibendum felis porta luctus. Phasellus nisi ex, gravida et tristique eget, consectetur ut mi. Donec et dolor porttitor, viverra nisi vitae, aliquam velit. Vivamus sit amet libero bibendum orci suscipit pharetra id non mauris. Nullam vestibulum semper tincidunt. Quisque vulputate sem nibh, laoreet accumsan ligula sodales vel. Donec auctor augue nec commodo dignissim.</p>
              <br></br>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Duis placerat porta erat eget rhoncus. Proin malesuada fermentum arcu, in tincidunt turpis porta sit amet. Integer fringilla sed turpis non maximus. Nullam iaculis est semper nisl molestie laoreet. Cras vulputate bibendum felis, ac posuere purus elementum ac. Aliquam quis odio vitae nisl efficitur fermentum quis at nunc. Nullam sagittis, risus vel ullamcorper scelerisque, nunc nibh vestibulum libero, volutpat dapibus nisl massa sed risus.</p>
              <br></br>
              <p>Suspendisse commodo sed nibh sed tristique. Maecenas nec dapibus est. Proin sed porta ante. Praesent a commodo augue. Donec purus odio, fringilla id scelerisque at, dictum ut orci. Fusce vitae pharetra urna, eu pretium sapien. Quisque fermentum a ligula sed sodales. Aenean auctor pellentesque quam in porttitor. Nunc elementum, massa ac feugiat feugiat, leo lectus tincidunt est, ut interdum velit libero ac ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Regras