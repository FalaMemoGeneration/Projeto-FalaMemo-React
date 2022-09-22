import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box, Grid, Rating, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import { busca, buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./CadastrarPostagem.css";

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

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

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  // const [rating, setRating] = useState<string>('');

  // const getRating = (e: SelectChangeEvent<{ value: unknown }>) => {
  //   setRating(e.target.value as string);
  // }

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    avaliacao: 1,
    tema: null,
    usuario: {
      id: 1,
      nome: "",
      usuario: "",
      foto: "",
      genero: "",
      orientacao: "",
      pcd: false,
      senha: "",
    },
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      // avaliacao: rating
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      // avaliacao: rating
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem atualizada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem cadastrada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/postagens");
  }

  return (
    <Grid container className="topo centralizar">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h3"
          align="center"
          className="cadastro-tema-margin experiencias"
        >
          Compartilhe sua experiência:
        </Typography>
        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="Seu cargo*"
          variant="outlined"
          placeholder="Insira no mínimo 3 caracteres"
          name="titulo"
          margin="normal"
          fullWidth
          className="cadastro-tema-margin-2"
        />

        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="Sua experiência*"
          name="texto"
          variant="outlined"
          multiline
          minRows={6}
          placeholder="Insira no mínimo 5 caracteres"
          margin="normal"
          fullWidth
        />

{/* <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">
                Avaliação
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="avaliacao"
                value={postagem.avaliacao}
                label="Avaliação"
                name="avaliacao"
                onChange={getRating}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl> */}

        <TextField
            value={postagem.avaliacao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="avaliacao"
            label="Avaliação"
            name="avaliacao"
            variant="outlined"
            placeholder="Insira um número de 1 a 5"
            margin="normal"
            fullWidth
          />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Empresa</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/temas/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha uma empresa da lista</FormHelperText>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btnCadastrar cadastro-margin-top"
          >
            Publicar
          </Button>
        </FormControl>
      </form>
    </Grid>
  );
}
export default CadastroPost;
