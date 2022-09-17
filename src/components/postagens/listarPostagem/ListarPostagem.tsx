import { useEffect, useState } from "react";
import "./ListarPostagem.css";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function ListarPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      <Typography variant="h3" component="h3" className="experiencias">
        Experiências
      </Typography>
      <div className="publi">
        {posts.map((post) => (
          <div className="post-user" key={post.id}>
            <CardContent className="text-publi">
              <div className="text-avaliacao">
                <Typography gutterBottom>
                  {post.avaliacao},0
                  <Box className="star-public">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </Box>
                </Typography>
                <Typography variant="body2" component="p" className="empresa">
                  {post.tema?.descricao}
                </Typography>
              </div>

              <div className="texto">
                <Typography
                  variant="h5"
                  component="h5"
                  className="title-experiencias"
                >
                  {post.titulo}
                </Typography>

                <div className="caixa-text">
                  <Typography
                    variant="body2"
                    component="p"
                    className="texto-experiencias"
                  >
                    {post.texto}
                  </Typography>
                </div>
              </div>
            </CardContent>

            <CardActions className="botoes">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={1.5}
              >
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1} className="box-botoes">
                    <Button
                      variant="contained"
                      className="marginLeft btnAtuali"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>

                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1} className="box-botoes">
                    <Button variant="contained" className="btnDeletar">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListarPostagem;
