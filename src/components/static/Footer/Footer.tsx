import React from 'react'
import './Footer.css'
import { Grid, Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='footer-container'>
                <Grid alignItems="center" item xs={6}>
                    <Box>
                        <Typography variant="h5">Logo</Typography>
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={3}>
                    <Box>
                        <Typography>FalaMemo</Typography>
                    </Box>
                    <Box>
                        <Typography>Sobre </Typography>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>Fale Conosco </Typography>
                        </Box>
                        <Box>
                            <a href="mailto:falamemogeneration@gmail.com" target="_blank">
                                <EmailIcon />
                            </a>
                            <a href="https://github.com/FalaMemoGeneration" target="_blank">
                                <GitHubIcon />
                            </a>
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookIcon />
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={3}>
                    <Box display="flex">
                        <Typography className='footerTitle'>Informações</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography>Regras da Comunidade</Typography>
                    </Box>
                    <Box display="flex">
                        <Typography>Termos de Uso</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid>
            <Box>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom >FalaMemo© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org/">
                                <Typography variant="subtitle2" gutterBottom align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
            </Grid>
        </>
    )
}

export default Footer