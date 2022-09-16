import React, { useEffect, useState } from 'react';

import { Avatar, Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';

import Curtidas from "../curtidas/Curtidas";
import "./ContainerPost.css"
import Postagem from '../../../models/Postagem';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { busca } from '../../../services/Service';


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
      <Typography  gutterBottom>
          {pub.avaliacao}
        </Typography>
      <Typography variant="body2" component="p">
          {pub.texto}
        </Typography>
      
    <Typography variant="body2" component="p">
        {pub.tema?.descricao}
      </Typography>
    </div>

    <div className="reacao">
      <Curtidas />
    </div>

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
