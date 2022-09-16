import { useEffect, useState } from "react"
import "./ListarPostagem.css"
import { Button, CardActions, CardContent, Typography } from "@material-ui/core"
import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Postagem from "../../../models/Postagem"
import { busca } from "../../../services/Service"
import { TokenState } from "../../../store/tokens/tokensReducer"


function ListarPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    let navigate = useNavigate()

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
            <div className="publi" >
                {posts.map((post) => (
                    <div className="post-user" key={post.id}>
                        <CardContent className="text-publi">
                            <Typography gutterBottom>
                                {post.avaliacao}
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {post.titulo}
                            </Typography>

                            <Typography variant="body2" component="p">
                                {post.texto}
                            </Typography>

                            <Typography variant="body2" component="p">
                                {post.tema?.descricao}
                            </Typography>

                        </CardContent>

                        <CardActions className="botoes">
                            <Box display="flex" alignItems="center" justifyContent="center" mb={1.5}>

                                <Link
                                    to={`/formularioPostagem/${post.id}`}
                                    className="text-decorator-none">
                                    <Box mx={1} className="box-botoes">
                                        <Button
                                            variant="contained"
                                            className="marginLeft btnAtuali">
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>

                                <Link
                                    to={`/deletarPostagem/${post.id}`}
                                    className="text-decorator-none">
                                    <Box mx={1} className="box-botoes" >
                                        <Button
                                            variant="contained"
                                            className="btnDeletar">
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
    )
}

export default ListarPostagem
