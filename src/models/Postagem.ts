import Tema from "./Tema"
import User from "./User"

interface Postagem {
    id: number
    titulo: string
    texto: string
    avaliacao: number
    tema?: Tema | null
    usuario?: User | null
}

export default Postagem