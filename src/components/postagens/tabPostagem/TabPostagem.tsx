import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Box } from '@mui/material';
import React, { useState } from 'react'
import ListarPostagem from '../listarPostagem/ListarPostagem';

function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static" style={{ background: "#1D3557" }}>
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab label="Todas as postagens" value="1" className='bold-weight'/>
          <Tab label="Sobre o FalaMemo" value="2" className='bold-weight'/>
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListarPostagem />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre o FalaMemo</Typography>
        <Typography variant="body1" gutterBottom color="textPrimary" align="justify">🚧 O projeto FalaMemo foi criado no bootcamp de Pessoa Desenvolvedora Web Full Stack da Generation Brasil. Seguindo a premissa do ODS 16 de Paz, Justiça e Instituições Eficazes, tivemos a ideia de criar uma rede social que permite que seus usuários compartilhem suas experiências no mercado de trabalho com foco na inclusão e representatividade de minorias. Dessa forma, todes podem escrever, opinar e compartilhar suas vivências em empresas e instituições para que outras minorias decidam se se sentiriam acolhidas em determinado ambiente ou não. 🚧</Typography>
      </TabPanel>
    </TabContext>
  </>
);
}
export default TabPostagem;