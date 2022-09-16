import React, { useEffect, useState } from 'react';

import { Avatar, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import { Box } from "@mui/material"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';

import Curtidas from "../curtidas/Curtidas";
import "./ContainerPost.css"
import Postagem from '../../../models/Postagem';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { busca } from '../../../services/Service';


import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";



function ContainerPost() {

  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
    {posts.map((pub) => (

    <div className="publi-user" key={pub.id}>
    <div className="user">
      <div className="avatar-user">
        <Avatar alt="Remy Sharp" 
          src="https://i.imgur.com/6OvsYjP.png" 
          className="icon-avatar"
          />
      </div>
      <div className="dados-user">
        <Typography className="title-user">
          {pub.titulo}
        </Typography>
        <span> Homem cis gay </span>
      </div>
      <div>
        {/* <MenuPublic /> */}
      </div>
    </div>

    <div className="public">
      <div className='text-avaliacao'>
      <Typography  gutterBottom >
          <span className='nota'> {pub.avaliacao},0 </span>
        
        <Box className="star-public">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </Box>
       
        </Typography>

        <Typography variant="body2" component="p" className='empresa' >
          {pub.tema?.descricao}
        </Typography>
      </div>

      <div className='texto'>
        <Typography className='typoText'>
          {pub.texto}
        </Typography>
      </div>
    </div>

    <div className="reacao">
      <Curtidas />
    </div>

    <span className='before'></span>

    <div className="buttons">

      <Button variant="contained" className="btnReacao">
          <ThumbUpAltIcon /> <span>Gostei</span> 
      </Button>

      <Button variant="contained" className="btnReacao">
        <ChatIcon/> <span> Comentar</span>
      </Button>

      <Button variant="contained" className="btnReacao">
        <ShareIcon/> <span>Compartilhar</span>  
      </Button>
    </div>

  </div>
    ))}
    </>
  );
}

export default ContainerPost;
