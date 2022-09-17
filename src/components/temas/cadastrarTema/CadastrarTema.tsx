import { Button, Container, TextField, Typography } from "@material-ui/core"
import React, { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Tema from "../../../models/Tema"
import { buscaId, post, put } from "../../../services/Service"
import { TokenState } from "../../../store/tokens/tokensReducer"
import "./CadastrarTema.css"

function CadastrarTema() {
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })

    useEffect(() => {
        if (token === "") {
            toast.error("Você precisa estar logado!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            navigate("/login")
        }
    }, [token])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))
        if (id !== undefined) {
            console.log(tema)
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        "Authorization": token
                    }
                })
                toast.success("Tema atualizado com sucesso!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error("Erro! - Por favor verifique a quantidade mínima de caracteres!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            }
        } else {
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        "Authorization": token
                    }
                })
                toast.success("Tema cadastrado com sucesso!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error("Erro! - Por favor verifique a quantidade mínima de caracteres!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            }
        }
        back()
    }

    function back() {
        navigate("/temas")
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} className="centralizar">
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className="cadastro-tema-margin experiencias" >Cadastrar Empresa</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Nome da empresa" variant="outlined" name="descricao" margin="normal" fullWidth className="cadastro-tema-margin-2" />
                <Button type="submit" variant="contained" color="primary" className="btnCadastrar2 btnCentralizar">
                    Cadastrar
                </Button>
                <img className="cadastrar-tema-img" src="https://i.imgur.com/p7yARNs.png" alt="" />
            </form>
        </Container>
    )
}

export default CadastrarTema