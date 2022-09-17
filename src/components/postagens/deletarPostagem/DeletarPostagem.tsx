import React, { useEffect, useState } from "react"
import "./DeletarPostagem.css"
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Postagem from "../../../models/Postagem"
import { buscaId, deleteId } from "../../../services/Service"
import { TokenState } from "../../../store/tokens/tokensReducer"

function DeletarPostagem() {
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
                Authorization: token,
            },
        })
    }

    function sim() {
        navigate("/postagens")
        deleteId(`/postagens/${id}`, {
            headers: {
                "Authorization": token
            }
        })
        toast.success("Postagem deletada com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    }

    function nao() {
        navigate("/postagens")
    }

    return (
        <>
            <Box m={2} className="publi">
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center" >
                            <Typography color="textSecondary" gutterBottom variant="h5" className="deletar-h5">
                                Deseja deletar a postagem abaixo?
                            </Typography>
                            <Typography color="textSecondary" >
                                <span className="span-deletar">Cargo:</span> {post?.titulo}
                            </Typography>
                            <Typography color="textSecondary">
                            <span className="span-deletar">Experiência:</span> {post?.texto}
                            </Typography>
                            <Typography color="textSecondary">
                            <span className="span-deletar">Avaliação:</span> {post?.avaliacao} estrela(s) 
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft btnCancelar" color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" color="secondary" className="btnCancelar2">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarPostagem
