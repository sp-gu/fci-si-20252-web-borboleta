import Image from "next/image";
import styles from "./destino.module.css";

export default function DestinoPage({ params }) {
    const dadosDestino = {
        calca: {
            nome: 'Calça Jeans',
            descricao: 'X.',
            caminhoImg: '/imagens/calca.jpg'
        },
        saia: {
            nome: 'Saia',
            descricao: 'X.',
            caminhoImg: '/imagens/saia.jpg'
        },
        camiseta: {
            nome: 'Blusa',
            descricao: 'X.',
            caminhoImg: '/imagens/blusa.jpg'
        },
        sapato: {
            nome: 'Salto Alto',
            descricao: 'X.',
            caminhoImg: '/imagens/salto.jpg'
        },
        colar: {
            nome: 'Colar',
            descricao: 'X.',
            caminhoImg: '/imagens/colar.jpg'
        },
        brinco: {
            nome: 'Brinco',
            descricao: 'X.',
            caminhoImg: '/imagens/brinco.jpg'
        }
    }

    const destino = dadosDestino[params.id];

    return (
        
        <section className={styles.sectionMain}>
            <h2> {destino.nome} </h2>

            <Image className={styles.imagem} src={destino.caminhoImg} alt={destino.descricao} width={500} height={350}/>

            <p className={styles.descricao}> {destino.descricao} </p>
        
        </section>
    )
}