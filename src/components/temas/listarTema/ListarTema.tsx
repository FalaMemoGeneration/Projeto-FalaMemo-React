import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Tema from "../../../models/Tema";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

import "./ListarTema.css";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
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

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);
  return (
    <>
      <Typography variant="h3" component="h3" className="experiencias">
        Empresas
      </Typography>
      <div className="publi">
      {temas.map((tema) => (
        <div key={tema.id} className="box-empresa">
          <div className="caixa-empresa">
            <CardContent >
              <Typography variant="h5" component="h5" className="empresa02">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft btnAtuali"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="btnDeletar"
                    >
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </div>
        </div>
      ))}  
    </div>
    </>
  );
}

export default ListaTema;
