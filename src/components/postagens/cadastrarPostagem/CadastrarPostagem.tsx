import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Postagem from '../../../models/Postagem'
import Tema from '../../../models/Tema'
import { busca, buscaId, post, put } from '../../../services/Service'
import { TokenState } from '../../../store/tokens/tokensReducer'

function CadastroPost() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        progress: undefined
      })
      navigate("/login")
    }
  }, [token])

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  })
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    avaliacao: 0,
    tema: null,
    usuario: {
      id: 1,
      nome: '',
      usuario: '',
      foto: '',
      genero: '',
      orientacao: '',
      pcd: false,
      senha: ''
    }
  })

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema
    })
  }, [tema])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findByIdPostagem(id)
    }
  }, [id])

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    })
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    })
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      })
      alert("Postagem atualizada com sucesso!")
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      })
      alert("Postagem cadastrada com sucesso!")
    }
    back()
  }

  function back() {
    navigate("/postagens")
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastro de postagem:
        </Typography>
        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="Título"
          variant="outlined"
          placeholder="Insira no mínimo 3 caracteres"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="Texto"
          name="texto"
          variant="outlined"
          placeholder="Insira no mínimo 5 caracteres"
          margin="normal"
          fullWidth
        />

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
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
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
            {temas.map(tema => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary" className="btn">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}
export default CadastroPost